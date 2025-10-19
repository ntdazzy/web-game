<?php
namespace App\Modules\Characters\Controllers;

use App\Core\Controller;
use App\Core\Http\Request;
use App\Modules\Characters\Services\CharacterService;

class CharacterController extends Controller
{
    public function __construct(private ?CharacterService $characterService = null)
    {
        $this->characterService = $characterService ?? new CharacterService();
    }

    public function index(Request $request): void
    {
        $context = $this->characterService->listPageContext();
        $this->render('characters::list', $context);
    }

    public function detail(Request $request, string $slug): void
    {
        $character = $this->characterService->findBySlug($slug);
        if (!$character) {
            http_response_code(404);
            echo 'Không tìm thấy tướng';
            return;
        }
        $this->render('characters::detail', ['character' => $character]);
    }

    public function apiList(Request $request): void
    {
        $page = (int)$request->query('page', 1);
        $limit = (int)$request->query('limit', 20);
        $limit = max(1, min($limit, 50));
        $rank = $request->query('rank');
        $payload = $this->characterService->paginate($page, $limit, $rank);
        $etag = '"' . md5(json_encode([$page, $limit, $rank, $payload['total'] ?? null])) . '"';

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
        $character = $this->characterService->findBySlug($slug);
        $etag = '"' . md5(json_encode($character)) . '"';

        header('Content-Type: application/json');
        header('Cache-Control: public, max-age=300');
        header('ETag: ' . $etag);

        $ifNoneMatch = $request->header('If-None-Match');
        if (is_string($ifNoneMatch) && trim($ifNoneMatch) === $etag) {
            http_response_code(304);
            return;
        }

        echo json_encode($character, JSON_UNESCAPED_UNICODE);
    }

    public function legacyDetail(Request $request): void
    {
        $payload = $request->json() ?? [];
        $slug = $payload['heroSlug'] ?? null;
        if (!$slug) {
            http_response_code(400);
            echo json_encode(['error' => 'Missing heroSlug'], JSON_UNESCAPED_UNICODE);
            return;
        }
        $character = $this->characterService->findBySlug($slug);
        header('Content-Type: application/json');
        echo json_encode($character['remote'] ?? [], JSON_UNESCAPED_UNICODE);
    }
}
