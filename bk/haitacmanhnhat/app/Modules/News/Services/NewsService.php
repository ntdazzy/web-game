<?php
namespace App\Modules\News\Services;

use App\Modules\News\Repositories\NewsRepository;

class NewsService
{
    private const DATASET_ALIASES = [
        'event' => ['event', 'events', 'su-kien'],
        'update' => ['update', 'updates'],
        'news' => ['news'],
    ];

    private const DATASET_VIEW_MAP = [
        'news' => [
            'list_view' => 'news::list',
            'detail_view' => 'news::detail',
            'title' => 'Tin tức | Hải Tặc Mạnh Nhất',
            'script_page' => 'tin-tuc',
            'nav' => 'news',
            'base_path' => '/tin-tuc',
        ],
        'event' => [
            'list_view' => 'news::list',
            'detail_view' => 'news::detail',
            'title' => 'Sự kiện | Hải Tặc Mạnh Nhất',
            'script_page' => 'su-kien',
            'nav' => 'news',
            'base_path' => '/su-kien',
        ],
        'update' => [
            'list_view' => 'news::list',
            'detail_view' => 'news::detail',
            'title' => 'Update | Hải Tặc Mạnh Nhất',
            'script_page' => 'update',
            'nav' => 'news',
            'base_path' => '/update',
        ],
    ];

    public function resolveDataset(string $type): string
    {
        $slug = strtolower(trim($type));
        foreach (self::DATASET_ALIASES as $normalized => $aliases) {
            if (in_array($slug, $aliases, true)) {
                return $normalized;
            }
        }

        return 'news';
    }

    public function getDatasetConfig(string $dataset): array
    {
        return self::DATASET_VIEW_MAP[$dataset] ?? self::DATASET_VIEW_MAP['news'];
    }

    public function paginate(int $page, int $limit, string $dataset): array
    {
        return NewsRepository::paginateDataset($page, $limit, $dataset);
    }

    public function findBySlug(string $slug, string $dataset): ?array
    {
        return NewsRepository::findBySlug($slug, $dataset);
    }

    public function latest(string $dataset, int $limit, ?string $excludeSlug = null): array
    {
        return NewsRepository::latest($dataset, $limit, $excludeSlug);
    }
}
