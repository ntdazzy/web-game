<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\File;

class LegacyContentController extends Controller
{
    public function devilFruits(): View
    {
        return $this->renderLegacyPage('trai-ac-quy.html', [
            'pageTitle' => 'Trái ác quỷ | Hải Tặc Mạnh Nhất',
            'headScripts' => ['assets/js/data/devil-fruits-base-data.js'],
            'scripts' => ['assets/js/pages/devil-fruits.js'],
        ]);
    }

    public function fusionFruits(): View
    {
        return $this->renderLegacyPage('trai-dung-hop.html', [
            'pageTitle' => 'Trái dung hợp | Hải Tặc Mạnh Nhất',
            'headScripts' => ['assets/js/data/devil-fruits-base-data.js'],
            'scripts' => ['assets/js/pages/devil-fruits.js'],
        ]);
    }

    public function giftcode(): View
    {
        return $this->renderLegacyPage('giftcode.html', [
            'pageTitle' => 'Nhận GIFTCODE | Hải Tặc Mạnh Nhất',
            'styles' => ['assets/css/modules/giftcode.css'],
            'scripts' => ['assets/js/pages/giftcode.js'],
        ]);
    }

    private function renderLegacyPage(string $htmlFile, array $options = []): View
    {
        $path = resource_path('legacy/html/' . $htmlFile);
        $legacyHtml = File::exists($path) ? File::get($path) : '';

        return view('legacy.raw', array_merge([
            'legacyHtml' => $legacyHtml,
            'bodyAttr' => 'class="wrapper-subpage overflow-y-auto"',
        ], $options));
    }
}
