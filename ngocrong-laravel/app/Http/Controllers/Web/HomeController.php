<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Event;
use App\Models\Post;
use Illuminate\View\View;

class HomeController extends Controller
{
    public function __invoke(): View
    {
        $headlinePosts = Post::query()
            ->published()
            ->ofType('news')
            ->latest('published_at')
            ->limit(6)
            ->get();

        $headlineEvents = Event::query()
            ->latest('starts_at')
            ->latest('published_at')
            ->limit(6)
            ->get();

        $updatePosts = Post::query()
            ->published()
            ->ofType('update')
            ->latest('published_at')
            ->limit(6)
            ->get();

        if ($updatePosts->isEmpty()) {
            $updatePosts = Post::query()
                ->published()
                ->latest('published_at')
                ->limit(6)
                ->get();
        }

        return view('pages.home', [
            'headlinePosts' => $headlinePosts,
            'headlineEvents' => $headlineEvents,
            'updatePosts' => $updatePosts,
        ]);
    }

    public function landing(): View
    {
        $updates = Post::query()
            ->published()
            ->ofType('update')
            ->latest('published_at')
            ->paginate(9);

        if ($updates->total() === 0) {
            $updates = Post::query()
                ->published()
                ->latest('published_at')
                ->paginate(9);
        }

        return view('pages.landing', [
            'updates' => $updates,
        ]);
    }
}
