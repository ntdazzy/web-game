<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Services\HomePageService;
use App\Services\PageContextService;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class PostController extends Controller
{
    private array $tabConfig = [
        'tin-tuc' => ['dataset' => 'news', 'label' => 'Tin tức', 'href' => '/tin-tuc'],
        'su-kien' => ['dataset' => 'event', 'label' => 'Sự kiện', 'href' => '/su-kien'],
        'update' => ['dataset' => 'update', 'label' => 'Update', 'href' => '/update'],
    ];

    public function __construct(
        private HomePageService $homePageService,
        private PageContextService $pageContextService
    )
    {
    }

    public function home(): View
    {
        $context = $this->homePageService->context();

        $newsPosts = Post::query()
            ->categorySlug('tin-tuc')
            ->orderByDesc('ghimbai')
            ->orderByDesc('created_at')
            ->limit(5)
            ->get();

        $eventPosts = Post::query()
            ->categorySlug('su-kien')
            ->orderByDesc('ghimbai')
            ->orderByDesc('created_at')
            ->limit(5)
            ->get();

        $updatePosts = Post::query()
            ->categorySlug('update')
            ->orderByDesc('ghimbai')
            ->orderByDesc('created_at')
            ->limit(5)
            ->get();

        return view('home', array_merge($context, [
            'newsPosts' => $newsPosts,
            'eventPosts' => $eventPosts,
            'updatePosts' => $updatePosts,
        ]));
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

        $context = $this->pageContextService->base($title . ' | Hải Tặc Mạnh Nhất');

        $tab = $this->tabConfig[$category] ?? $this->tabConfig['tin-tuc'];
        $dataset = $tab['dataset'];

        return view('tintuc.index', array_merge($context, [
            'posts' => $posts,
            'categorySlug' => $category,
            'dataset' => $dataset,
            'tabConfig' => array_map(fn ($config) => [
                'label' => $config['label'],
                'href' => $config['href'],
                'dataset' => $config['dataset'],
            ], $this->tabConfig),
            'basePath' => $tab['href'],
            'bodyAttributes' => 'class="wrapper-subpage overflow-y-auto"',
            'showLeftMenu' => false,
            'paginationData' => [
                'page' => $posts->currentPage(),
                'total_pages' => $posts->lastPage(),
            ],
        ]));
    }
}
