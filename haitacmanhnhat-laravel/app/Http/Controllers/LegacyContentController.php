<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class LegacyContentController extends Controller
{
    public function devilFruits(): View
    {
        return view('legacy.fruits', [
            'title' => 'Trái Ác Quỷ',
            'description' => 'Danh sách trái ác quỷ được tổng hợp từ nguồn dữ liệu cũ. Nội dung sẽ được mở rộng trong các bản cập nhật tới.',
            'items' => $this->loadFruitData('trai-ac-quy.json'),
        ]);
    }

    public function fusionFruits(): View
    {
        return view('legacy.fruits', [
            'title' => 'Trái Dung Hợp',
            'description' => 'Danh sách trái dung hợp (legacy) dùng để tham khảo nhanh.',
            'items' => $this->loadFruitData('trai-dung-hop.json'),
        ]);
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    private function loadFruitData(string $filename): array
    {
        $path = resource_path('data/legacy/' . $filename);

        if (! File::exists($path)) {
            return [];
        }

        $contents = File::get($path);

        try {
            $raw = json_decode($contents, true, flags: JSON_THROW_ON_ERROR);
        } catch (\JsonException) {
            return [];
        }

        return array_map(static function (array $item): array {
            $properties = [];
            $propertyRaw = Arr::get($item, 'property');

            if (is_string($propertyRaw)) {
                try {
                    $decoded = json_decode($propertyRaw, true, flags: JSON_THROW_ON_ERROR);
                    if (is_array($decoded)) {
                        $properties = array_values($decoded);
                    }
                } catch (\JsonException) {
                    $properties = [];
                }
            }

            return [
                'name' => Arr::get($item, 'name'),
                'effect' => Arr::get($item, 'effect'),
                'quality' => Arr::get($item, 'quality'),
                'info' => Arr::get($item, 'info'),
                'properties' => $properties,
                'icon' => Arr::get($item, 'itemSmall'),
                'slug' => Str::slug((string) Arr::get($item, 'name')),
            ];
        }, array_values($raw ?? []));
    }
}
