<?php

namespace App\Console\Commands;

use App\Models\Event;
use App\Models\Post;
use App\Models\User;
use Carbon\Carbon;
use DOMDocument;
use DOMElement;
use DOMNodeList;
use DOMXPath;
use Illuminate\Console\Command;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

class ImportLegacyContent extends Command
{
    /**
     * Tên command và các tùy chọn.
     *
     * --base: thư mục chứa nguồn mirror (mặc định ../src_gốc).
     * --dry-run: chỉ thống kê, không ghi DB / copy asset.
     * --only: news|update|events để giới hạn phạm vi import.
     * --limit: giới hạn số file xử lý mỗi nhóm (0 = không giới hạn).
     */
    protected $signature = 'legacy:import
        {--base=../src_gốc}
        {--dry-run : Chỉ thử nghiệm, không ghi dữ liệu}
        {--only= : Chỉ import nhóm cụ thể (news,update,events)}
        {--limit=0 : Giới hạn số file cho mỗi nhóm}';

    protected $description = 'Import toàn bộ bài viết / sự kiện từ source HTML cũ vào database.';

    protected bool $dryRun = false;

    /** @var array<string, int> */
    protected array $stats = [
        'news_created' => 0,
        'news_updated' => 0,
        'news_skipped' => 0,
        'update_created' => 0,
        'update_updated' => 0,
        'update_skipped' => 0,
        'events_created' => 0,
        'events_updated' => 0,
        'events_skipped' => 0,
        'assets_copied' => 0,
    ];

    protected ?string $legacyBasePath = null;
    protected ?string $legacyAssetsPath = null;
    protected string $targetAssetsPath;

    /** @var array<string, bool> */
    protected array $copiedAssets = [];

    protected ?int $defaultAuthorId = null;
    protected bool $postsTableExists = false;
    protected bool $eventsTableExists = false;

    public function handle(): int
    {
        $this->dryRun = (bool) $this->option('dry-run');
        $only = Str::of((string) $this->option('only'))->lower()->trim()->value();
        $limit = (int) $this->option('limit');

        $baseOption = (string) $this->option('base');
        $resolvedBase = realpath(base_path($baseOption));

        if ($resolvedBase === false || ! is_dir($resolvedBase)) {
            $this->error("Không tìm thấy thư mục nguồn: {$baseOption}");
            return self::FAILURE;
        }

        $this->legacyBasePath = $resolvedBase;
        $this->legacyAssetsPath = realpath($resolvedBase.DIRECTORY_SEPARATOR.'st-ms') ?: null;
        $this->targetAssetsPath = resource_path('assets/legacy');
        $this->defaultAuthorId = optional(User::query()->first())->id;
        $this->postsTableExists = Schema::hasTable((new Post())->getTable());
        $this->eventsTableExists = Schema::hasTable((new Event())->getTable());

        if (! $this->postsTableExists) {
            $this->warn('Bảng posts chưa tồn tại – vui lòng chạy migrations trước khi import chính thức.');
        }

        if (! $this->eventsTableExists) {
            $this->warn('Bảng events chưa tồn tại – vui lòng chạy migrations trước khi import chính thức.');
        }

        if (! File::exists($this->targetAssetsPath) && ! $this->dryRun) {
            File::makeDirectory($this->targetAssetsPath, 0755, true);
        }

        if ($only === '' || $only === 'news' || $only === 'update') {
            $this->importPosts($only, $limit);
        }

        if ($only === '' || $only === 'events') {
            $this->importEvents($limit);
        }

        $this->renderSummary();

        return self::SUCCESS;
    }

    protected function importPosts(string $only, int $limit): void
    {
        /** @var array<string, string> $directories */
        $directories = [
            'news' => 'tin-tuc',
            'update' => 'update',
        ];

        foreach ($directories as $type => $folder) {
            if ($only !== '' && $only !== $type) {
                continue;
            }

            if (! $this->postsTableExists && ! $this->dryRun) {
                $this->error('Không thể import bài viết khi bảng posts chưa tồn tại.');
                return;
            }

            $dirPath = $this->legacyBasePath.DIRECTORY_SEPARATOR.$folder;
            if (! is_dir($dirPath)) {
                $this->warn("Bỏ qua thư mục {$folder} (không tồn tại).");
                continue;
            }

            $files = $this->collectHtmlFiles($dirPath, $limit);

            if ($files->isEmpty()) {
                $this->warn("Không có file hợp lệ trong thư mục {$folder}.");
                continue;
            }

            $this->info("Đang import {$files->count()} bài viết {$type} từ {$folder}...");
            $progress = $this->output->createProgressBar($files->count());

            foreach ($files as $filePath) {
                $slug = Str::beforeLast(basename($filePath), '.');

                $payload = $this->extractPostPayload($filePath, $slug, $type);

                if ($payload === null) {
                    $this->stats["{$type}_skipped"]++;
                    $progress->advance();
                    continue;
                }

                if ($this->dryRun) {
                    if (! $this->postsTableExists) {
                        $this->stats["{$type}_created"]++;
                    } elseif (! Post::query()->where('slug', $slug)->exists()) {
                        $this->stats["{$type}_created"]++;
                    } else {
                        $this->stats["{$type}_updated"]++;
                    }
                } elseif ($this->postsTableExists) {
                    $model = Post::updateOrCreate(
                        ['slug' => $slug],
                        $payload
                    );

                    if ($model->wasRecentlyCreated) {
                        $this->stats["{$type}_created"]++;
                    } else {
                        $this->stats["{$type}_updated"]++;
                    }
                }

                $progress->advance();
            }

            $progress->finish();
            $this->newLine(2);
        }
    }

    protected function importEvents(int $limit): void
    {
        $folder = 'su-kien';
        $dirPath = $this->legacyBasePath.DIRECTORY_SEPARATOR.$folder;

        if (! is_dir($dirPath)) {
            $this->warn("Bỏ qua thư mục {$folder} (không tồn tại).");
            return;
        }

        $files = $this->collectHtmlFiles($dirPath, $limit);

        if ($files->isEmpty()) {
            $this->warn('Không có file sự kiện hợp lệ.');
            return;
        }

        if (! $this->eventsTableExists && ! $this->dryRun) {
            $this->error('Không thể import sự kiện khi bảng events chưa tồn tại.');
            return;
        }

        $this->info("Đang import {$files->count()} sự kiện từ {$folder}...");
        $progress = $this->output->createProgressBar($files->count());

        foreach ($files as $filePath) {
            $slug = Str::beforeLast(basename($filePath), '.');
            $payload = $this->extractEventPayload($filePath, $slug);

            if ($payload === null) {
                $this->stats['events_skipped']++;
                $progress->advance();
                continue;
            }

            if ($this->dryRun) {
                if (! $this->eventsTableExists) {
                    $this->stats['events_created']++;
                } elseif (! Event::query()->where('slug', $slug)->exists()) {
                    $this->stats['events_created']++;
                } else {
                    $this->stats['events_updated']++;
                }
            } elseif ($this->eventsTableExists) {
                $model = Event::updateOrCreate(
                    ['slug' => $slug],
                    $payload
                );

                if ($model->wasRecentlyCreated) {
                    $this->stats['events_created']++;
                } else {
                    $this->stats['events_updated']++;
                }
            }

            $progress->advance();
        }

        $progress->finish();
        $this->newLine(2);
    }

    /**
     * Thu thập danh sách file HTML hợp lệ.
     *
     * @return \Illuminate\Support\Collection<int, string>
     */
    protected function collectHtmlFiles(string $directory, int $limit): Collection
    {
        $files = collect(File::glob($directory.DIRECTORY_SEPARATOR.'*.html'))
            ->filter(fn ($file) => $this->isDetailPage($file))
            ->sort()
            ->values();

        if ($limit > 0) {
            return $files->take($limit)->values();
        }

        return $files;
    }

    protected function isDetailPage(string $filePath): bool
    {
        $slug = Str::beforeLast(basename($filePath), '.');

        if ($slug === '' || is_numeric($slug)) {
            return false;
        }

        $skip = [
            'index',
            'tin-tuc',
            'su-kien',
            'update',
            'event',
            'timeline',
        ];

        return ! in_array(Str::lower($slug), $skip, true);
    }

    /**
     * Trích xuất dữ liệu bài viết.
     *
     * @return array<string, mixed>|null
     */
    protected function extractPostPayload(string $filePath, string $slug, string $type): ?array
    {
        $parsed = $this->parseLegacyHtml($filePath);

        if ($parsed === null || $parsed['content_html'] === '') {
            $this->warn("Không thể phân tích bài viết: {$slug}");
            return null;
        }

        $excerpt = Str::of(strip_tags($parsed['content_html']))
            ->replace("\xc2\xa0", ' ')
            ->squish()
            ->limit(250, '...')
            ->value();

        $payload = [
            'title' => $parsed['title'] ?: Str::headline($slug),
            'type' => $type,
            'excerpt' => $excerpt,
            'content' => $parsed['content_html'],
            'cover_image' => $parsed['cover_image'],
            'cover_image_url' => $parsed['cover_image_url'],
            'published_at' => $parsed['published_at'],
            'status' => 'published',
        ];

        if ($this->defaultAuthorId !== null) {
            $payload['author_id'] = $this->defaultAuthorId;
        }

        return $payload;
    }

    /**
     * Trích xuất dữ liệu sự kiện.
     *
     * @return array<string, mixed>|null
     */
    protected function extractEventPayload(string $filePath, string $slug): ?array
    {
        $parsed = $this->parseLegacyHtml($filePath);

        if ($parsed === null || $parsed['content_html'] === '') {
            $this->warn("Không thể phân tích sự kiện: {$slug}");
            return null;
        }

        $excerpt = Str::of(strip_tags($parsed['content_html']))
            ->replace("\xc2\xa0", ' ')
            ->squish()
            ->limit(220, '...')
            ->value();

        $publishedAt = $parsed['published_at'] ?? Carbon::now();

        return [
            'title' => $parsed['title'] ?: Str::headline($slug),
            'excerpt' => $excerpt,
            'content' => $parsed['content_html'],
            'banner' => $parsed['cover_image'],
            'banner_url' => $parsed['cover_image_url'],
            'published_at' => $publishedAt,
            'starts_at' => $publishedAt,
            'ends_at' => $publishedAt?->copy()->addDays(7),
            'status' => 'published',
        ];
    }

    /**
     * Phân tích HTML và trả về dữ liệu chuẩn hóa.
     *
     * @return array{
     *     title: string,
     *     published_at: \Carbon\CarbonInterface|null,
     *     content_html: string,
     *     cover_image: string|null,
     *     cover_image_url: string|null
     * }|null
     */
    protected function parseLegacyHtml(string $filePath): ?array
    {
        $html = File::get($filePath);
        $encoding = mb_detect_encoding($html, ['UTF-8', 'ISO-8859-1', 'WINDOWS-1252'], true);

        if ($encoding !== false && Str::upper($encoding) !== 'UTF-8') {
            $html = mb_convert_encoding($html, 'UTF-8', $encoding);
        }

        libxml_use_internal_errors(true);
        $document = new DOMDocument();
        $document->recover = true;
        $document->formatOutput = false;

        $loaded = $document->loadHTML('<?xml encoding="utf-8" ?>'.$html);
        libxml_clear_errors();

        if (! $loaded) {
            return null;
        }

        $xpath = new DOMXPath($document);

        $title = $this->textContent($xpath->query("//div[contains(@class,'post-title')]//h1")) ?: $this->textContent($xpath->query('//h1'));
        $timeText = $this->textContent($xpath->query("//div[contains(@class,'post-title')]//span[contains(@class,'time')]"));
        $publishedAt = $this->parsePublishedAt($timeText) ?? $this->guessPublishedAtFromFilename($filePath);

        /** @var DOMElement|null $contentNode */
        $contentNode = $xpath->query("//div[contains(@class,'post-content')]")->item(0);

        if (! $contentNode instanceof DOMElement) {
            return null;
        }

        $media = $this->normaliseContentNode($contentNode, dirname($filePath));

        return [
            'title' => $title,
            'published_at' => $publishedAt,
            'content_html' => $media['html'],
            'cover_image' => $media['cover_image'],
            'cover_image_url' => $media['cover_image_url'],
        ];
    }

    protected function textContent(?DOMNodeList $nodes): string
    {
        if ($nodes === null || $nodes->length === 0) {
            return '';
        }

        return Str::of($nodes->item(0)?->textContent ?? '')
            ->replace("\xc2\xa0", ' ')
            ->squish()
            ->value();
    }

    protected function parsePublishedAt(string $timeText): ?Carbon
    {
        if ($timeText === '') {
            return null;
        }

        if (preg_match('/(\d{2})[\/-](\d{2})[\/-](\d{4})/', $timeText, $matches)) {
            $format = Str::contains($matches[0], '/') ? 'd/m/Y' : 'd-m-Y';

            try {
                return Carbon::createFromFormat($format, $matches[0])->startOfDay();
            } catch (\Exception) {
                return null;
            }
        }

        return null;
    }

    protected function guessPublishedAtFromFilename(string $filePath): ?Carbon
    {
        $filename = basename($filePath);

        if (preg_match('/(\d{2})-(\d{2})-(\d{4})/', $filename, $matches)) {
            try {
                return Carbon::createFromFormat('d-m-Y', "{$matches[1]}-{$matches[2]}-{$matches[3]}")->startOfDay();
            } catch (\Exception) {
                return null;
            }
        }

        return null;
    }

    /**
     * Chuẩn hóa nội dung, copy asset và trả về HTML đã thay thế placeholder.
     *
     * @return array{html: string, cover_image: string|null, cover_image_url: string|null}
     */
    protected function normaliseContentNode(DOMElement $contentNode, string $fileDir): array
    {
        $document = $contentNode->ownerDocument;

        $firstImagePath = null;
        $firstImageUrl = null;

        /** @var DOMElement[] $images */
        $images = [];
        foreach ($contentNode->getElementsByTagName('img') as $img) {
            if ($img instanceof DOMElement) {
                $images[] = $img;
            }
        }

        foreach ($images as $img) {
            $rawSrc = trim($img->getAttribute('src'));

            if ($rawSrc === '') {
                continue;
            }

            $normalized = $this->normaliseAssetPath($rawSrc, $fileDir);

            if ($normalized === null) {
                if ($firstImageUrl === null) {
                    $firstImageUrl = $rawSrc;
                }
                continue;
            }

            $img->setAttribute('src', $normalized['placeholder']);

            if ($firstImagePath === null) {
                $firstImagePath = 'resources/assets/'.$normalized['relative'];
            }
        }

        $html = trim($this->innerHtml($document, $contentNode));

        return [
            'html' => $html,
            'cover_image' => $firstImagePath,
            'cover_image_url' => $firstImageUrl,
        ];
    }

    protected function innerHtml(DOMDocument $document, DOMElement $element): string
    {
        $html = '';

        foreach ($element->childNodes as $child) {
            $html .= $document->saveHTML($child);
        }

        return trim($html);
    }

    /**
     * Trả về placeholder asset và copy vào resources nếu cần.
     *
     * @return array{placeholder: string, relative: string}|null
     */
    protected function normaliseAssetPath(string $raw, string $fileDir): ?array
    {
        if ($raw === '' || preg_match('#^(?:https?:)?//#i', $raw) || Str::startsWith($raw, ['data:', 'mailto:'])) {
            return null;
        }

        $decoded = rawurldecode($raw);
        $candidate = $fileDir.DIRECTORY_SEPARATOR.$decoded;
        $absolute = realpath($candidate);

        if ($absolute === false && $this->legacyAssetsPath !== null) {
            $absolute = realpath($this->legacyAssetsPath.DIRECTORY_SEPARATOR.ltrim($decoded, '/'));
        }

        if ($absolute === false || $absolute === null) {
            return null;
        }

        if ($this->legacyAssetsPath === null || ! Str::startsWith($absolute, $this->legacyAssetsPath)) {
            return null;
        }

        $relative = ltrim(Str::after($absolute, $this->legacyAssetsPath), DIRECTORY_SEPARATOR);
        $relative = str_replace(['\\', '..'], ['/', ''], $relative);

        if ($relative === '') {
            return null;
        }

        $targetRelative = 'legacy/'.$relative;
        $targetPath = $this->targetAssetsPath.DIRECTORY_SEPARATOR.$relative;
        $targetDir = dirname($targetPath);

        if (! $this->dryRun) {
            if (! File::exists($targetDir)) {
                File::makeDirectory($targetDir, 0755, true);
            }

            if (! isset($this->copiedAssets[$targetRelative]) && ! File::exists($targetPath)) {
                if (@File::copy($absolute, $targetPath)) {
                    $this->stats['assets_copied']++;
                }
            }
        }

        $this->copiedAssets[$targetRelative] = true;

        return [
            'placeholder' => '[[asset|'.$targetRelative.']]',
            'relative' => $targetRelative,
        ];
    }

    protected function renderSummary(): void
    {
        $this->table(
            ['Nhóm', 'Tạo mới', 'Cập nhật', 'Bỏ qua'],
            [
                ['Tin tức', $this->stats['news_created'], $this->stats['news_updated'], $this->stats['news_skipped']],
                ['Update', $this->stats['update_created'], $this->stats['update_updated'], $this->stats['update_skipped']],
                ['Sự kiện', $this->stats['events_created'], $this->stats['events_updated'], $this->stats['events_skipped']],
            ]
        );

        $this->info('Asset đã copy: '.$this->stats['assets_copied'].($this->dryRun ? ' (dry-run)' : ''));
    }
}
