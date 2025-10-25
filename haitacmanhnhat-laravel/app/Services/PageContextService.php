<?php

namespace App\Services;

use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;

class PageContextService
{
    private const COMMON_PATH = 'data/common/page.json';

    public function base(string $pageTitle, array $metaOverrides = []): array
    {
        $common = $this->loadCommon();

        $meta = array_merge($common['meta'] ?? [], $metaOverrides);
        $meta['og:title'] = $pageTitle;

        return [
            'pageTitle' => $pageTitle,
            'meta' => $meta,
            'structuredData' => $this->prepareStructuredData($common['structuredData'] ?? []),
        ];
    }

    private function loadCommon(): array
    {
        return $this->loadJson(self::COMMON_PATH);
    }

    private function loadJson(string $relativePath): array
    {
        $path = resource_path($relativePath);

        if (! File::exists($path)) {
            return [];
        }

        $data = json_decode(File::get($path), true);

        return is_array($data) ? $data : [];
    }

    private function prepareStructuredData(array $schemas): array
    {
        return array_map(function (array $schema): array {
            if (($schema['@type'] ?? null) === 'Organization') {
                $schema['url'] = absolute_url('/');
                $schema['logo'] = absolute_url($schema['logo'] ?? '/assets/imgs/logo.png');
                $schema['sameAs'] = array_map(function ($url) {
                    return $this->ensureAbsoluteUrl($url);
                }, $schema['sameAs'] ?? []);
            }

            if (($schema['@type'] ?? null) === 'WebSite') {
                $schema['url'] = absolute_url('/');
                if (isset($schema['potentialAction']['target'])) {
                    $schema['potentialAction']['target'] = absolute_url('/tin-tuc') . '?q={search_term_string}';
                }
            }

            return $schema;
        }, Arr::wrap($schemas));
    }

    private function ensureAbsoluteUrl(string $value): string
    {
        return str_starts_with($value, 'http') ? $value : absolute_url($value);
    }
}
