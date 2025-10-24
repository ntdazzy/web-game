<?php

declare(strict_types=1);

require_once __DIR__ . '/../bootstrap/autoload.php';
require_once __DIR__ . '/../app/helpers.php';

use App\Core\Config\Config;
use App\Core\Http\Request;
use App\Core\Routing\Router;
use App\Core\Security\CsrfTokenManager;
use App\Core\Http\Response;
use App\Modules\Characters\Controllers\CharacterController;
use App\Modules\Home\Controllers\HomeController;
use App\Modules\News\Controllers\NewsController;
use App\Modules\Pages\Controllers\PagesController;

Config::load();

$secureCookie = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') || ($_SERVER['SERVER_PORT'] ?? null) === 443;
if (session_status() === PHP_SESSION_NONE) {
    session_set_cookie_params([
        'httponly' => true,
        'secure' => $secureCookie,
        'samesite' => 'Lax',
    ]);
    session_start();
}

send_security_headers();

$request = Request::capture();

$path = $request->path();

if (!CsrfTokenManager::isValidRequest($request)) {
    $accept = (string) $request->header('Accept', '');
    $wantsJson = str_contains($accept, 'application/json') || str_starts_with($path, '/api/');
    if ($wantsJson) {
        Response::json(['error' => 'CSRF token mismatch'], 419);
    } else {
        http_response_code(419);
        echo 'CSRF token mismatch';
    }
    return;
}

if ($path === '/robots.txt') {
    header('Content-Type: text/plain; charset=utf-8');
    header('Cache-Control: public, max-age=86400');
    echo "User-agent: *\n";
    echo "Allow: /\n";
    echo 'Sitemap: ' . absolute_url('/sitemap.xml') . "\n";
    return;
}

if ($path === '/sitemap.xml') {
    header('Content-Type: application/xml; charset=utf-8');
    header('Cache-Control: public, max-age=3600');
    echo render_sitemap_xml(build_sitemap_entries());
    return;
}

if ($path !== '/' && str_ends_with($path, '.html')) {
    $redirectPath = substr($path, 0, -5);
    if ($redirectPath === '/index') {
        $redirectPath = '/';
    }
    $query = $_SERVER['QUERY_STRING'] ?? '';
    if ($query !== '') {
        $redirectPath .= '?' . $query;
    }
    header('Location: ' . $redirectPath, true, 301);
    return;
}

if ($path === '/index.php') {
    header('Location: /', true, 301);
    return;
}

$router = new Router();

$router->get('/', [HomeController::class, 'index']);
$router->get('/tin-tuc', [NewsController::class, 'index']);
$router->get('/su-kien', static function (Request $request): void {
    (new NewsController())->index($request, 'event');
});
$router->get('/update', static function (Request $request): void {
    (new NewsController())->index($request, 'update');
});

$router->get('/tin-tuc/{slug}', [NewsController::class, 'detail']);
$router->get('/su-kien/{slug}', static function (Request $request, string $slug): void {
    (new NewsController())->detail($request, $slug, 'event');
});
$router->get('/update/{slug}', static function (Request $request, string $slug): void {
    (new NewsController())->detail($request, $slug, 'update');
});

$router->get('/danh-sach-tuong', [CharacterController::class, 'index']);
$router->get('/danh-sach-tuong/{slug}', [CharacterController::class, 'detail']);

$router->get('/api/news', [NewsController::class, 'apiList']);
$router->get('/api/news/{slug}', [NewsController::class, 'apiDetail']);
$router->get('/api/characters', [CharacterController::class, 'apiList']);
$router->get('/api/characters/{slug}', [CharacterController::class, 'apiDetail']);
$router->post('/get-hero-detail', [CharacterController::class, 'legacyDetail']);

if ($router->dispatch($request)) {
    return;
}

$uri = trim($path, '/');
$pagesController = new PagesController();
$pagesController->show($request, $uri);
