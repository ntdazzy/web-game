<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\DevilFruit;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Vite;
use Illuminate\View\View;

class DevilFruitController extends Controller
{
    public function index(): View
    {
        return $this->renderCategory('standard', 'pages.devilfruits.index');
    }

    public function fusion(): View
    {
        return $this->renderCategory('fusion', 'pages.devilfruits.fusion');
    }

    protected function renderCategory(string $category, string $view): View
    {
        $fruits = DevilFruit::query()
            ->where('category', $category)
            ->orderBy('sort_order')
            ->orderBy('name')
            ->get()
            ->map(fn (DevilFruit $fruit) => $this->transformFruit($fruit));

        $downloadBase = rtrim(config('app.download_base_url', 'https://dl.haitacmanhnhat.vn/tdt'), '/');
        $assetPaths = [
            'arrow_left' => Vite::asset('resources/assets/images/icon-arrow-left.png'),
            'arrow_right' => Vite::asset('resources/assets/images/icon-arrow-right.png'),
            'fruit_fallback' => Vite::asset('resources/assets/images/devil-fruit/fruit-item.jpg'),
        ];

        return view($view, [
            'fruits' => $fruits,
            'downloadBase' => $downloadBase,
            'assetPaths' => $assetPaths,
        ]);
    }

    protected function transformFruit(DevilFruit $fruit): array
    {
        $property = Arr::get($fruit->metadata, 'raw_property');

        if (! $property && $fruit->properties) {
            $property = json_encode($fruit->properties, JSON_UNESCAPED_UNICODE);
        }

        return [
            'id' => $fruit->legacy_id ?? $fruit->id,
            'uid' => $fruit->uid,
            'name' => $fruit->name,
            'itemSmall' => $fruit->image,
            'quality' => $fruit->quality,
            'info' => $fruit->description,
            'effect' => $fruit->effect,
            'type' => $fruit->type,
            'status' => $fruit->status,
            'ord' => $fruit->sort_order,
            'property' => $property,
        ];
    }
}
