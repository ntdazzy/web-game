<?php
namespace App\Core;

use App\Core\Http\Request;
use App\Core\Http\Response;
use App\Core\View\ViewRenderer;

abstract class Controller
{
    protected ?string $layout = 'layouts/main';

    protected function render(string $view, array $data = [], ?string $layout = null): void
    {
        $layout = $layout ?? $this->layout;

        try {
            $content = ViewRenderer::render($view, $data);
        } catch (\Throwable $exception) {
            http_response_code(500);
            echo 'View rendering error: ' . htmlspecialchars($exception->getMessage(), ENT_QUOTES, 'UTF-8');
            return;
        }

        if ($layout === null) {
            echo rewrite_internal_html_links($content);
            return;
        }

        $layoutData = array_merge($data, ['content' => $content]);

        try {
            $layoutMarkup = ViewRenderer::render($layout, $layoutData);
        } catch (\Throwable $exception) {
            http_response_code(500);
            echo 'Layout rendering error: ' . htmlspecialchars($exception->getMessage(), ENT_QUOTES, 'UTF-8');
            return;
        }

        echo rewrite_internal_html_links($layoutMarkup);
    }

    protected function renderJson(mixed $data, int $status = 200, array $headers = []): void
    {
        Response::json($data, $status, $headers);
    }

    protected function request(): Request
    {
        return Request::capture();
    }
}
