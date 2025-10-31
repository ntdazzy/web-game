<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;

class LegacyContentController extends Controller
{
    public function devilFruits(): View
    {
        return view('legacy.devil-fruits');
    }

    public function fusionFruits(): View
    {
        return view('legacy.fusion-fruits');
    }

    public function giftcode(): View
    {
        return view('legacy.giftcode');
    }
}
