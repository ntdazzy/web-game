<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Character;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CharacterApiController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $characters = Character::query()
            ->when($request->filled('q'), function ($query) use ($request): void {
                $query->where('name', 'like', '%' . $request->string('q')->trim() . '%');
            })
            ->orderBy('name')
            ->paginate($request->integer('per_page', 12))
            ->appends($request->query());

        return response()->json($characters);
    }
}
