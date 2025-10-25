<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function home(): View
    {
        $latestPosts = Post::query()
            ->orderByDesc('ghimbai')
            ->orderByDesc('created_at')
            ->limit(5)
            ->get();

        return view('home', [
            'latestPosts' => $latestPosts,
            'showLeftMenu' => true,
        ]);
    }

    public function indexTinTuc(Request $request): View
    {
        return $this->indexByCategory($request, 'tin-tuc', 'Tin tức');
    }

    public function indexSuKien(Request $request): View
    {
        return $this->indexByCategory($request, 'su-kien', 'Sự kiện');
    }

    public function indexUpdate(Request $request): View
    {
        return $this->indexByCategory($request, 'update', 'Cập nhật');
    }

    public function show(Post $post, ?string $slug = null): View
    {
        if ($slug !== null && $slug !== $post->slug) {
            return redirect()->route('post.show', ['post' => $post->getKey(), 'slug' => $post->slug], 301);
        }

        return view('tintuc.show', [
            'post' => $post,
        ]);
    }

    private function indexByCategory(Request $request, string $category, string $title): View
    {
        $posts = Post::query()
            ->categorySlug($category)
            ->when($request->filled('q'), function (Builder $query) use ($request): void {
                $query->where('tieude', 'like', '%' . $request->string('q')->trim() . '%');
            })
            ->orderByDesc('ghimbai')
            ->orderByDesc('created_at')
            ->paginate(12)
            ->withQueryString();

        $view = match ($category) {
            'su-kien' => 'sukien.index',
            'update' => 'update.index',
            default => 'tintuc.index',
        };

        return view($view, [
            'posts' => $posts,
            'categoryTitle' => $title,
        ]);
    }
}
