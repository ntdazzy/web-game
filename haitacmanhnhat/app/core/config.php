<?php
declare(strict_types=1);

if (!defined('APP_ROOT')) {
    $root = dirname(__DIR__, 2);

    define('APP_ROOT', $root . '/app');
    define('PUBLIC_ROOT', $root . '/public');
    define('ASSETS_ROOT', $root . '/public/assets');

    $baseUrl = getenv('APP_BASE_URL') ?: '/';
    $baseUrl = rtrim($baseUrl, '/');
    if ($baseUrl === '') {
        $baseUrl = '/';
    }
    define('BASE_URL', $baseUrl);

    define('PATHS', [
        'root' => $root,
        'app' => APP_ROOT,
        'core' => APP_ROOT . '/core',
        'partials' => APP_ROOT . '/partials',
        'views' => APP_ROOT . '/views',
        'content' => APP_ROOT . '/content',
        'data' => APP_ROOT . '/data',
        'assets' => ASSETS_ROOT,
        'public' => PUBLIC_ROOT,
    ]);
    $canonicalBase = getenv('APP_CANONICAL_BASE') ?: 'https://haitacmanhnhat';
    define('CANONICAL_BASE', rtrim($canonicalBase, '/'));
}
