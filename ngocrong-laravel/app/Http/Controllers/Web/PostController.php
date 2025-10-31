<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\View\View;

class PostController extends Controller
{
    public function index(Request $request): View
    {
        $posts = Post::query()
            ->when($request->filled('search'), function ($query) use ($request) {
                $term = $request->string('search')->trim()->value();
                $query->where(function ($inner) use ($term) {
                    $inner->where('title', 'like', '%' . $term . '%')
                        ->orWhere('excerpt', 'like', '%' . $term . '%');
                });
            })
            ->latest('published_at')
            ->paginate(9);

        return view('pages.news.index', compact('posts'));
    }

    public function show(Post $post): View
    {
        $relatedPosts = Post::query()
            ->where('id', '!=', $post->id)
            ->latest('published_at')
            ->limit(3)
            ->get();

        return view('pages.news.show', compact('post', 'relatedPosts'));
    }
}
