<?php
namespace App\Controllers;

class Controller
{
    protected function render($view, $data = [])
    {
        extract($data);
        $viewFile = __DIR__ . '/../Views/' . str_replace('.', '/', $view) . '.php';
        ob_start();
        include $viewFile;
        $content = ob_get_clean();
        include __DIR__ . '/../Views/layouts/main.php';
    }
}
