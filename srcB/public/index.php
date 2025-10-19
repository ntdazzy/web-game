<?php
declare(strict_types=1);

require_once __DIR__ . '/../app/helpers.php';

spl_autoload_register(function (string $class): void {
    $prefix = 'App\\';
    if (str_starts_with($class, $prefix)) {
        $path = __DIR__ . '/../app/' . str_replace('App\\', '', $class) . '.php';
        $path = str_replace('\\', '/', $path);
        if (is_file($path)) {
            require_once $path;
        }
    }
});

use App\Controllers\HomeController;
use App\Controllers\NewsController;
use App\Controllers\CharacterController;
use App\Controllers\PagesController;

$uri = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) ?? '', '/');

if ($uri === '' || $uri === 'index.html') {
    (new HomeController())->index();
    return;
}

if (preg_match('~^tin-tuc(?:/)?$~', $uri)) {
    (new NewsController())->index('news');
    return;
}

if (preg_match('~^su-kien(?:/)?$~', $uri)) {
    (new NewsController())->index('event');
    return;
}

if (preg_match('~^update(?:/)?$~', $uri)) {
    (new NewsController())->index('update');
    return;
}

if (preg_match('~^tin-tuc/(?P<slug>[^/]+)(?:\.html)?$~', $uri, $matches)) {
    $slug = preg_replace('/\.html$/', '', $matches['slug']);
    (new NewsController())->detail($slug, 'news');
    return;
}

if (preg_match('~^su-kien/(?P<slug>[^/]+)(?:\.html)?$~', $uri, $matches)) {
    $slug = preg_replace('/\.html$/', '', $matches['slug']);
    (new NewsController())->detail($slug, 'event');
    return;
}

if (preg_match('~^update/(?P<slug>[^/]+)(?:\.html)?$~', $uri, $matches)) {
    $slug = preg_replace('/\.html$/', '', $matches['slug']);
    (new NewsController())->detail($slug, 'update');
    return;
}

if ($uri === 'danh-sach-tuong.html' || $uri === 'danh-sach-tuong') {
    (new CharacterController())->index();
    return;
}

if (preg_match('~^danh-sach-tuong/(?P<slug>[^/]+)(?:\.html)?$~', $uri, $matches)) {
    $slug = preg_replace('/\.html$/', '', $matches['slug']);
    (new CharacterController())->detail($slug);
    return;
}

if (preg_match('~^api/news(?:/)?$~', $uri)) {
    (new NewsController())->apiList();
    return;
}

if (preg_match('~^api/news/(?P<slug>[^/]+)$~', $uri, $matches)) {
    (new NewsController())->apiDetail($matches['slug']);
    return;
}

if (preg_match('~^api/characters(?:/)?$~', $uri)) {
    (new CharacterController())->apiList();
    return;
}

if (preg_match('~^api/characters/(?P<slug>[^/]+)$~', $uri, $matches)) {
    (new CharacterController())->apiDetail($matches['slug']);
    return;
}

if ($uri === 'get-hero-detail' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    (new CharacterController())->legacyDetail();
    return;
}

(new PagesController())->show($uri);
