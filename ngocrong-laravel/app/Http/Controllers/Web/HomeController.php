<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Event;
use App\Models\Post;
use App\Models\Player;
use Illuminate\View\View;

class HomeController extends Controller
{
    public function __invoke(): View
    {
        $headlinePosts = Post::query()
            ->published()
            ->ofType('news')
            ->latest('created_at')
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
            ->latest('created_at')
            ->limit(6)
            ->get();

        if ($updatePosts->isEmpty()) {
            $updatePosts = Post::query()
                ->published()
                ->latest('created_at')
                ->limit(6)
                ->get();
        }

        $leaderboard = Player::query()
            ->select('player.*', 'account.server_login', 'account.username')
            ->join('account', 'account.id', '=', 'player.account_id')
            ->where('account.is_admin', 0)
            ->where('account.active', 1)
            ->where('account.ban', 0)
            ->orderByDesc('player.power')
            ->limit(10)
            ->get();

        return view('pages.home', [
            'headlinePosts' => $headlinePosts,
            'headlineEvents' => $headlineEvents,
            'updatePosts' => $updatePosts,
            'leaderboard' => $leaderboard,
        ]);
    }

    public function landing(): View
    {
        $updates = Post::query()
            ->published()
            ->ofType('update')
            ->latest('created_at')
            ->paginate(9);

        if ($updates->total() === 0) {
            $updates = Post::query()
                ->published()
                ->latest('created_at')
                ->paginate(9);
        }

        return view('pages.landing', [
            'updates' => $updates,
        ]);
    }
}
