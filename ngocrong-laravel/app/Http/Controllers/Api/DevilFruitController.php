<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\DevilFruitResource;
use App\Models\DevilFruit;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class DevilFruitController extends Controller
{
    public function index(Request $request): AnonymousResourceCollection
    {
        $query = DevilFruit::query()
            ->orderBy('sort_order')
            ->orderBy('name');

        if ($request->filled('category')) {
            $query->where('category', $request->string('category'));
        }

        if ($request->filled('effect')) {
            $query->where('effect', $request->string('effect'));
        }

        if ($request->filled('quality')) {
            $query->where('quality', $request->integer('quality'));
        }

        $perPage = (int) $request->input('per_page', 30);

        return DevilFruitResource::collection(
            $query->paginate($perPage)->withQueryString()
        );
    }

    public function show(DevilFruit $devilFruit): DevilFruitResource
    {
        return DevilFruitResource::make($devilFruit);
    }
}
