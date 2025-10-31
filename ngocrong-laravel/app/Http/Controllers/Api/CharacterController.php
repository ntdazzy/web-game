<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CharacterResource;
use App\Models\Character;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class CharacterController extends Controller
{
    public function index(Request $request): AnonymousResourceCollection
    {
        $query = Character::query()
            ->orderBy('sort_order')
            ->orderBy('name');

        if ($request->filled('damage_type')) {
            $query->where('damage_type', $request->string('damage_type'));
        }

        $perPage = (int) $request->input('per_page', 24);

        return CharacterResource::collection(
            $query->paginate($perPage)->withQueryString()
        );
    }

    public function show(Character $character): CharacterResource
    {
        return CharacterResource::make($character);
    }
}
