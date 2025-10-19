<?php
namespace App\Controllers;

class NewsController extends Controller
{
    public function index()
    {
        return $this->render('pages.tin-tuc');
    }

    public function detail($slug)
    {
        $dataFile = __DIR__ . '/../data/news.json';
        $list = json_decode(file_get_contents($dataFile), true);
        if (isset($list[$slug])) {
            $content = $list[$slug];
            return $this->render('pages.news_detail', ['content' => $content]);
        }
        http_response_code(404);
        echo 'Not found';
    }
}
