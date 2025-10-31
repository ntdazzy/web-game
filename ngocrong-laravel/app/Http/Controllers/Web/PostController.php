<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\View\View;

class PostController extends Controller
{
    public function index(): View
    {
        $posts = Post::query()
            ->latest('published_at')
            ->paginate(9);

        return view('pages.news.index', compact('posts'));
    }

    public function show(Post $post): View
    {
        return view('pages.news.show', compact('post'));
    }
}
