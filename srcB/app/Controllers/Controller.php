<?php
namespace App\Controllers;

abstract class Controller
{
    protected function render(string $view, array $data = []): void
    {
        extract($data);
        $viewFile = __DIR__ . '/../Views/' . str_replace('.', '/', $view) . '.php';
        if (!is_file($viewFile)) {
            http_response_code(404);
            echo 'View not found: ' . htmlspecialchars($view);
            return;
        }
        ob_start();
        include $viewFile;
        $content = ob_get_clean();
        include __DIR__ . '/../Views/layouts/main.php';
    }
}
