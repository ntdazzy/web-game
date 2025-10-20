<?php
namespace App\Modules\Characters\Repositories;

use App\Core\Data\JsonRepository;

class CharacterRepository extends JsonRepository
{
    public static function all(): array
    {
        return static::loadJson('characters.json') ?? [];
    }

    public static function paginate(int $page = 1, int $limit = 20, ?string $rank = null): array
    {
        $all = static::all();
        if ($rank) {
            $all = array_values(array_filter($all, fn ($item) => strcasecmp($item['rank'] ?? '', $rank) === 0));
        }
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

    public static function findBySlug(string $slug): ?array
    {
        $slug = trim($slug, '/');
        $detail = static::loadJson('characters/' . $slug . '.json');
        if (!$detail) {
            return null;
        }
        $list = static::all();
        foreach ($list as $item) {
            if (($item['slug'] ?? null) === $slug) {
                $detail = array_merge($item, $detail);
                break;
            }
        }
        return $detail;
    }
}
