<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perPage = (int) max(1, min(50, $request->integer('per_page', 9)));

        $posts = Post::query()
            ->with('author:id,name')
            ->latest('published_at')
            ->paginate($perPage);

        return PostResource::collection($posts);
    }

    public function store(Request $request)
    {
        abort(405);
    }

    public function show(Post $post)
    {
        $post->load('author:id,name');

        return PostResource::make($post);
    }

    public function update(Request $request, Post $post)
    {
        abort(405);
    }

    public function destroy(Post $post)
    {
        abort(405);
    }
}
