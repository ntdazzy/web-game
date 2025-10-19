<?php
declare(strict_types=1);

require_once dirname(__DIR__) . '/app/core/config.php';
require_once PATHS['core'] . '/router.php';
require_once PATHS['core'] . '/view.php';

$slug = $_GET['slug'] ?? '';
$route = match_route($slug);

if (!empty($route['data']['code']) && is_numeric($route['data']['code'])) {
    http_response_code((int) $route['data']['code']);
}

render($route['view'], $route['data']);

