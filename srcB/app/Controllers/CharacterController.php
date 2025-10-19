<?php
namespace App\Controllers;

use App\Models\CharacterModel;

class CharacterController extends Controller
{
    public function index(): void
    {
        $characters = CharacterModel::all();
        $this->render('pages/danh-sach-tuong', ['characters' => $characters]);
    }

    public function detail(string $slug): void
    {
        $character = CharacterModel::findBySlug($slug);
        if (!$character) {
            http_response_code(404);
            echo 'Không tìm thấy tướng';
            return;
        }
        $this->render('characters/detail', ['character' => $character]);
    }

    public function apiList(): void
    {
        $page = (int)($_GET['page'] ?? 1);
        $limit = (int)($_GET['limit'] ?? 20);
        $rank = $_GET['rank'] ?? null;
        $payload = CharacterModel::paginate($page, $limit, $rank);
        header('Content-Type: application/json');
        echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    }

    public function apiDetail(string $slug): void
    {
        $character = CharacterModel::findBySlug($slug);
        header('Content-Type: application/json');
        echo json_encode($character, JSON_UNESCAPED_UNICODE);
    }

    public function legacyDetail(): void
    {
        $payload = json_decode(file_get_contents('php://input'), true) ?? [];
        $slug = $payload['heroSlug'] ?? null;
        if (!$slug) {
            http_response_code(400);
            echo json_encode(['error' => 'Missing heroSlug'], JSON_UNESCAPED_UNICODE);
            return;
        }
        $character = CharacterModel::findBySlug($slug);
        header('Content-Type: application/json');
        echo json_encode($character['remote'] ?? [], JSON_UNESCAPED_UNICODE);
    }
}
