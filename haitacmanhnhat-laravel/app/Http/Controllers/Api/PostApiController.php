<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PostApiController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $posts = Post::query()
            ->when($request->filled('category'), function ($query) use ($request): void {
                $query->categorySlug($request->string('category'));
            })
            ->when($request->filled('q'), function ($query) use ($request): void {
                $query->where('tieude', 'like', '%' . $request->string('q')->trim() . '%');
            })
            ->orderByDesc('ghimbai')
            ->orderByDesc('created_at')
            ->paginate($request->integer('per_page', 12))
            ->appends($request->query());

        return response()->json($posts);
    }
}
