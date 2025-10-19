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

    public function index(): void
    {
        $news = NewsModel::paginateDataset((int)($_GET['page'] ?? 1), 10, 'news');
        $this->render('pages/tin-tuc', ['newsPagination' => $news]);
    }

    public function detail(string $slug, string $type = 'news'): void
    {
        $dataset = $this->resolveDataset($type);
        $item = NewsModel::findBySlug($slug, $dataset);
        if (!$item) {
            http_response_code(404);
            echo 'Bài viết không tồn tại';
            return;
        }
        $viewPrefix = [
            'news' => 'tin-tuc',
            'event' => 'su-kien',
            'update' => 'update',
        ][$dataset] ?? 'tin-tuc';
        $this->render('pages/' . $viewPrefix . '/' . $slug, ['article' => $item]);
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
