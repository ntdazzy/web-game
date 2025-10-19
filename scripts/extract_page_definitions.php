#!/usr/bin/env php
<?php
declare(strict_types=1);

require_once __DIR__ . '/../srcB/app/core/config.php';
require_once PATHS['core'] . '/helpers.php';

$definitionsDir = PATHS['views'] . '/definitions';
$outputPages = PATHS['data'] . '/pages.php';
$outputCharacters = PATHS['data'] . '/characters.definitions.php';

$iterator = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($definitionsDir, RecursiveDirectoryIterator::SKIP_DOTS)
);

$pages = [];
$characters = [];

foreach ($iterator as $fileInfo) {
    if ($fileInfo->getExtension() !== 'php') {
        continue;
    }

    $file = $fileInfo->getPathname();
    $relativePath = str_replace($definitionsDir . '/', '', $file);

    try {
        $data = (static function (string $file): array {
            $page = [];
            $content = null;
            $sections = [];
            $styles = [];
            $scripts = [];
            $scriptsHead = [];
            $scriptsFooter = [];
            $data = [];

            ob_start();
            include $file;
            ob_end_clean();

            return [
                'page' => $page,
                'content' => $content,
                'sections' => $sections,
                'styles' => $styles,
                'scripts' => $scripts,
                'scripts_head' => $scriptsHead,
                'scripts_footer' => $scriptsFooter,
            ];
        })($file);
    } catch (Throwable $exception) {
        fwrite(STDERR, "[extract] Skip {$relativePath}: {$exception->getMessage()}\n");
        continue;
    }

    $page = $data['page'] ?? [];
    $slug = $page['slug'] ?? null;
    if ($slug === null) {
        fwrite(STDERR, "[extract] Skip {$relativePath}: missing slug\n");
        continue;
    }

    $slugNormalized = trim((string) $slug, '/');
    if ($slugNormalized === '') {
        $slugNormalized = '/';
    }

    $entry = [
        'title' => $page['title'] ?? '',
        'body_class' => $page['body_class'] ?? '',
        'nav_active' => $page['nav_active'] ?? null,
        'view' => $page['view'] ?? $slugNormalized,
        'content' => $data['content'],
        'sections' => $data['sections'] ?? [],
        'styles' => $data['styles'] ?? [],
        'scripts' => $data['scripts'] ?? [],
        'scripts_head' => $data['scripts_head'] ?? [],
        'scripts_footer' => $data['scripts_footer'] ?? [],
        'login_widget_script' => $page['login_widget_script'] ?? null,
        'meta' => [
            'description' => $page['description'] ?? ($page['meta']['description'] ?? null ?? null),
            'canonical' => $page['canonical'] ?? ($page['meta']['canonical'] ?? null ?? null),
            'og' => $page['og'] ?? ($page['meta']['og'] ?? []),
        ],
        'extra' => array_diff_key(
            $page,
            array_flip([
                'title',
                'body_class',
                'nav_active',
                'slug',
                'view',
                'login_widget_script',
                'description',
                'canonical',
                'meta',
                'og',
            ])
        ),
    ];

    if (str_starts_with($slugNormalized, 'danh-sach-tuong/')) {
        $entry['slug'] = $slugNormalized;
        $characters[$slugNormalized] = $entry;
    } else {
        $pages[$slugNormalized] = $entry;
    }
}

ksort($pages);
ksort($characters);

$pagesExport = "<?php\nreturn " . var_export($pages, true) . ";\n";
$charactersExport = "<?php\nreturn " . var_export($characters, true) . ";\n";

file_put_contents($outputPages, $pagesExport);
file_put_contents($outputCharacters, $charactersExport);

echo "[extract] Wrote " . str_replace(PATHS['root'] . '/', '', $outputPages) . PHP_EOL;
echo "[extract] Wrote " . str_replace(PATHS['root'] . '/', '', $outputCharacters) . PHP_EOL;
