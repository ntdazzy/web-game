<?php

namespace App\Services;

use Illuminate\Support\Facades\File;

class HomePageService
{
    private const LAYOUT_PATH = 'data/home/layout.json';
    private const CONTENT_PATH = 'data/home/content.json';

    public function __construct(private PageContextService $pageContext)
    {
    }

    public function context(): array
    {
        $base = $this->pageContext->base('Trang chủ | Hải Tặc Mạnh Nhất');
        $layout = $this->loadJson(self::LAYOUT_PATH);
        $content = $this->loadJson(self::CONTENT_PATH);

        return array_merge($base, $layout, $content);
    }

    private function loadJson(string $relativePath): array
    {
        $path = resource_path($relativePath);

        if (! File::exists($path)) {
            return [];
        }

        $data = json_decode(File::get($path), true);

        return is_array($data) ? $data : [];
        return is_array($data) ? $data : [];
    }
}
