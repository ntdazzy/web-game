<?php
namespace App\Models;

class NewsModel extends BaseModel
{
    protected static function datasetFile(string $dataset): string
    {
        return match (strtolower($dataset)) {
            'event', 'events', 'su-kien' => 'events.json',
            'update', 'updates' => 'updates.json',
            default => 'news.json',
        };
    }

    protected static function detailFile(string $dataset, string $slug): string
    {
        $slug = trim($slug, '/');
        $folder = match (strtolower($dataset)) {
            'event', 'events', 'su-kien' => 'events',
            'update', 'updates' => 'updates',
            default => 'news',
        };
        return $folder . '/' . $slug . '.json';
    }

    public static function all(string $dataset = 'news'): array
    {
        return static::loadJson(static::datasetFile($dataset)) ?? [];
    }

    public static function paginateDataset(int $page = 1, int $limit = 10, string $dataset = 'news'): array
    {
        $all = static::all($dataset);
        $total = count($all);
        $limit = max(1, $limit);
        $page = max(1, $page);
        $offset = ($page - 1) * $limit;
        $slice = array_slice($all, $offset, $limit);
        return [
            'data' => $slice,
            'page' => $page,
            'limit' => $limit,
            'total' => $total,
            'total_pages' => (int)ceil($total / $limit),
        ];
    }

    public static function findBySlug(string $slug, string $dataset = 'news'): ?array
    {
        $slug = trim($slug);
        if ($slug === '') {
            return null;
        }
        $data = static::loadJson(static::detailFile($dataset, $slug));
        if (!$data) {
            return null;
        }
        $list = static::all($dataset);
        foreach ($list as $item) {
            if (($item['slug'] ?? null) === $slug) {
                $data = array_merge($item, $data);
                break;
            }
        }
        return $data;
    }
}
