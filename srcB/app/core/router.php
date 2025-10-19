<?php
declare(strict_types=1);

require_once __DIR__ . '/config.php';

/**
 * Match the provided slug against the routing table.
 *
 * @param string|null $slug Request slug from query string.
 *
 * @return array{view:string,data:array<string,mixed>}
 */
function match_route(?string $slug): array
{
    $rawSlug = trim((string) $slug, '/');
    $slug = $rawSlug;

    if ($slug === '' || $slug === 'home') {
        return [
            'view' => 'home',
            'data' => [
                'slug' => '/',
            ],
        ];
    }

    if (str_ends_with($slug, '.html')) {
        $slug = substr($slug, 0, -5);
    }

    $routesFile = PATHS['data'] . '/routes.php';
    $routes = is_file($routesFile) ? include $routesFile : [];

    if (isset($routes[$slug])) {
        $route = $routes[$slug];

        if (is_string($route)) {
            return [
                'view' => $route,
                'data' => [
                    'slug' => '/' . $slug,
                ],
            ];
        }

        if (is_array($route) && isset($route['view'])) {
            $data = $route['data'] ?? [];
            if (!isset($data['slug'])) {
                $data['slug'] = '/' . $slug;
            }
            return [
                'view' => $route['view'],
                'data' => $data,
            ];
        }
    }

    if (preg_match('#^(tin-tuc|su-kien|update)/([^/]+)$#', $slug, $matches)) {
        return [
            'view' => 'article',
            'data' => [
                'category' => $matches[1],
                'post' => $matches[2],
                'slug' => '/' . $matches[1] . '/' . $matches[2],
            ],
        ];
    }

    if (preg_match('#^danh-sach-tuong/([^/]+)$#', $slug, $matches)) {
        return [
            'view' => 'danh-sach-tuong/' . $matches[1],
            'data' => [
                'slug' => '/' . $slug,
            ],
        ];
    }

    return [
        'view' => '404',
        'data' => [
            'slug' => '/' . $rawSlug,
            'code' => 404,
        ],
    ];
}

