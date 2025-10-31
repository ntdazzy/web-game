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
        $allowedTypes = ['news', 'update'];
        $requestedType = $request->string('type')->trim()->lower()->value();
        $activeType = in_array($requestedType, $allowedTypes, true) ? $requestedType : 'news';

        $posts = Post::query()
            ->published()
            ->ofType($activeType)
            ->when($request->filled('search'), function ($query) use ($request) {
                $term = $request->string('search')->trim()->value();
                $query->where(function ($inner) use ($term) {
                    $inner->where('title', 'like', '%' . $term . '%')
                        ->orWhere('excerpt', 'like', '%' . $term . '%');
                });
            })
            ->latest('published_at')
            ->paginate(9);

        return view('pages.news.index', [
            'posts' => $posts,
            'activeType' => $activeType,
        ]);
    }

    public function show(Post $post): View
    {
        $relatedPosts = Post::query()
            ->where('id', '!=', $post->id)
            ->published()
            ->ofType($post->type)
            ->latest('published_at')
            ->limit(3)
            ->get();

        return view('pages.news.show', compact('post', 'relatedPosts'));
    }
}
