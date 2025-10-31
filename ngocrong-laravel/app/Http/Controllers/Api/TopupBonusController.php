<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\TopupBonusResource;
use App\Models\TopupBonus;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class TopupBonusController extends Controller
{
    public function index(Request $request): AnonymousResourceCollection
    {
        $query = TopupBonus::query()
            ->where('status', 'active')
            ->orderBy('sort_order')
            ->orderBy('name');

        if ($request->filled('category')) {
            $query->where('category', $request->string('category'));
        }

        return TopupBonusResource::collection(
            $query->paginate((int) $request->input('per_page', 15))->withQueryString()
        );
    }

    public function show(TopupBonus $topupBonus): TopupBonusResource
    {
        return TopupBonusResource::make($topupBonus);
    }
}
