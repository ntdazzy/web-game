<?php
namespace App\Controllers;

class CharacterController extends Controller
{
    public function index()
    {
        return $this->render('pages.danh-sach-tuong');
    }

    public function detail($slug)
    {
        $dataFile = __DIR__ . '/../data/characters.json';
        $list = json_decode(file_get_contents($dataFile), true);
        if (isset($list[$slug])) {
            $content = $list[$slug];
            return $this->render('characters.detail', ['content' => $content]);
        }
        http_response_code(404);
        echo 'Not found';
    }
}
