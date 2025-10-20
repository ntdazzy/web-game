<?php
namespace App\Modules\News\Controllers;

use App\Core\Controller;
use App\Core\Http\Request;
use App\Modules\News\Services\NewsService;

class NewsController extends Controller
{
    public function __construct(private ?NewsService $newsService = null)
    {
        $this->newsService = $newsService ?? new NewsService();
    }

    public function index(Request $request, string $type = 'news'): void
    {
        $dataset = $this->newsService->resolveDataset($type);
        $config = $this->newsService->getDatasetConfig($dataset);
        $page = (int)$request->query('page', 1);
        $pagination = $this->newsService->paginate($page, 10, $dataset);

        $this->render($config['list_view'], [
            'pagination' => $pagination,
            'dataset' => $dataset,
            'activeNav' => $config['nav'],
            'pageTitle' => $config['title'],
            'meta' => [
                'og:title' => $config['title'],
            ],
            'bodyAttributes' => 'class="wrapper-subpage overflow-y-auto"',
            'loginScriptPage' => $config['script_page'],
            'basePath' => $config['base_path'],
        ]);
    }

    public function detail(Request $request, string $slug, string $type = 'news'): void
    {
        $dataset = $this->newsService->resolveDataset($type);
        $config = $this->newsService->getDatasetConfig($dataset);
        $item = $this->newsService->findBySlug($slug, $dataset);
        if (!$item) {
            http_response_code(404);
            echo 'Bài viết không tồn tại';
            return;
        }

        $pageTitle = ($item['title'] ?? 'Nội dung') . ' | Hải Tặc Mạnh Nhất';
        $primaryImage = $item['images'][0] ?? ($item['thumbnail'] ?? '/assets/stms/imgs/600x315.jpg');
        if ($primaryImage && !str_starts_with($primaryImage, '/')) {
            $primaryImage = '/' . ltrim($primaryImage, '/');
        }

        $this->render($config['detail_view'], [
            'article' => $item,
            'dataset' => $dataset,
            'activeNav' => $config['nav'],
            'pageTitle' => $pageTitle,
            'meta' => [
                'og:title' => $pageTitle,
                'description' => $item['summary'] ?? null,
                'og:image' => $primaryImage,
            ],
            'bodyAttributes' => 'class="wrapper-subpage overflow-y-auto"',
            'loginScriptPage' => $slug,
            'hotNews' => $this->newsService->latest($dataset, 5, $slug),
            'basePath' => $config['base_path'],
        ]);
    }

    public function apiList(Request $request): void
    {
        $page = (int)$request->query('page', 1);
        $limit = (int)$request->query('limit', 10);
        $limit = max(1, min($limit, 50));
        $type = (string)$request->query('type', 'news');
        $dataset = $this->newsService->resolveDataset($type);
        $payload = $this->newsService->paginate($page, $limit, $dataset);
        $etag = '"' . md5(json_encode($payload)) . '"';

        header('Content-Type: application/json');
        header('Cache-Control: public, max-age=120');
        header('ETag: ' . $etag);

        $ifNoneMatch = $request->header('If-None-Match');
        if (is_string($ifNoneMatch) && trim($ifNoneMatch) === $etag) {
            http_response_code(304);
            return;
        }

        echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    }

    public function apiDetail(Request $request, string $slug): void
    {
        $type = (string)$request->query('type', 'news');
        $dataset = $this->newsService->resolveDataset($type);
        $item = $this->newsService->findBySlug($slug, $dataset);
        $etag = '"' . md5(json_encode($item)) . '"';

        header('Content-Type: application/json');
        header('Cache-Control: public, max-age=120');
        header('ETag: ' . $etag);

        $ifNoneMatch = $request->header('If-None-Match');
        if (is_string($ifNoneMatch) && trim($ifNoneMatch) === $etag) {
            http_response_code(304);
            return;
        }

        echo json_encode($item, JSON_UNESCAPED_UNICODE);
    }
}
