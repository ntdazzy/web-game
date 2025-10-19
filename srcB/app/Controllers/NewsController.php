<?php
namespace App\Controllers;

use App\Models\NewsModel;

class NewsController extends Controller
{
    private function resolveDataset(string $type): string
    {
        return match (strtolower($type)) {
            'event', 'events', 'su-kien' => 'event',
            'update', 'updates' => 'update',
            default => 'news',
        };
    }

    private function datasetViewMap(): array
    {
        return [
            'news' => [
                'list' => 'pages/tin-tuc',
                'detail' => 'pages/news/detail',
                'title' => 'Tin tức | Hải Tặc Mạnh Nhất',
                'script_page' => 'tin-tuc.html',
                'nav' => 'news',
                'base_path' => '/tin-tuc',
            ],
            'event' => [
                'list' => 'pages/su-kien',
                'detail' => 'pages/events/detail',
                'title' => 'Sự kiện | Hải Tặc Mạnh Nhất',
                'script_page' => 'su-kien.html',
                'nav' => 'news',
                'base_path' => '/su-kien',
            ],
            'update' => [
                'list' => 'pages/update',
                'detail' => 'pages/updates/detail',
                'title' => 'Update | Hải Tặc Mạnh Nhất',
                'script_page' => 'update.html',
                'nav' => 'news',
                'base_path' => '/update',
            ],
        ];
    }

    public function index(string $type = 'news'): void
    {
        $dataset = $this->resolveDataset($type);
        $map = $this->datasetViewMap()[$dataset];
        $page = (int)($_GET['page'] ?? 1);
        $pagination = NewsModel::paginateDataset($page, 10, $dataset);

        $this->render($map['list'], [
            'pagination' => $pagination,
            'dataset' => $dataset,
            'activeNav' => $map['nav'],
            'pageTitle' => $map['title'],
            'meta' => [
                'og:title' => $map['title'],
            ],
            'bodyAttributes' => 'class="wrapper-subpage overflow-y-auto"',
            'loginScriptPage' => $map['script_page'],
            'basePath' => $map['base_path'],
        ]);
    }

    public function detail(string $slug, string $type = 'news'): void
    {
        $dataset = $this->resolveDataset($type);
        $map = $this->datasetViewMap()[$dataset];
        $item = NewsModel::findBySlug($slug, $dataset);
        if (!$item) {
            http_response_code(404);
            echo 'Bài viết không tồn tại';
            return;
        }

        $pageTitle = ($item['title'] ?? 'Nội dung') . ' | Hải Tặc Mạnh Nhất';
        $primaryImage = $item['images'][0] ?? ($item['thumbnail'] ?? '/st-ms/imgs/600x315.jpg');
        if ($primaryImage && !str_starts_with($primaryImage, '/')) {
            $primaryImage = '/' . ltrim($primaryImage, '/');
        }

        $this->render($map['detail'], [
            'article' => $item,
            'dataset' => $dataset,
            'activeNav' => $map['nav'],
            'pageTitle' => $pageTitle,
            'meta' => [
                'og:title' => $pageTitle,
                'description' => $item['summary'] ?? null,
                'og:image' => $primaryImage,
            ],
            'bodyAttributes' => 'class="wrapper-subpage overflow-y-auto"',
            'loginScriptPage' => $slug . '.html',
            'hotNews' => NewsModel::latest($dataset, 5, $slug),
            'basePath' => $map['base_path'],
        ]);
    }

    public function apiList(): void
    {
        $page = (int)($_GET['page'] ?? 1);
        $limit = (int)($_GET['limit'] ?? 10);
        $type = $_GET['type'] ?? 'news';
        $dataset = $this->resolveDataset($type);
        $payload = NewsModel::paginateDataset($page, $limit, $dataset);
        header('Content-Type: application/json');
        echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    }

    public function apiDetail(string $slug): void
    {
        $type = $_GET['type'] ?? 'news';
        $dataset = $this->resolveDataset($type);
        $item = NewsModel::findBySlug($slug, $dataset);
        header('Content-Type: application/json');
        echo json_encode($item, JSON_UNESCAPED_UNICODE);
    }
}
