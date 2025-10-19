#!/usr/bin/env php
<?php

$GLOBALS['__HTML_EXTENSION_REWRITES__'] = [];

require __DIR__ . '/../srcB/app/helpers.php';

$routes = [
    '/' => [
        'checks' => [
            'window.__APP_CONFIG__',
            'window.__ENDPOINTS__',
        ],
    ],
    '/tin-tuc' => [
        'checks' => [
            'window.__APP_CONFIG__',
            'window.__ENDPOINTS__',
        ],
    ],
    '/tin-tuc/10h-18-10-khai-mo-may-chu-s33-179' => [
        'checks' => [
            'window.__APP_CONFIG__',
            'window.__ENDPOINTS__',
        ],
    ],
    '/trai-ac-quy' => [
        'checks' => [
            'window.__APP_CONFIG__',
            'window.__ENDPOINTS__',
            'window.fruits =',
        ],
    ],
    '/giftcode' => [
        'checks' => [
            'window.__APP_CONFIG__',
            'window.__ENDPOINTS__',
        ],
    ],
];

$results = [];

foreach ($routes as $uri => $spec) {
    $_SERVER['REQUEST_URI'] = $uri;
    $_SERVER['HTTP_HOST'] = 'haitacmanhnhat.vn';
    $_SERVER['HTTPS'] = 'on';
    $_GET = [];

    ob_start();
    include __DIR__ . '/../srcB/public/index.php';
    $html = ob_get_clean();

    $routeResult = [
        'uri' => $uri === '' ? '/' : $uri,
        'checks' => [],
    ];

    foreach ($spec['checks'] as $needle) {
        $routeResult['checks'][] = [
            'target' => $needle,
            'found' => strpos($html, $needle) !== false,
        ];
    }
    $results[] = $routeResult;
}

echo json_encode($results, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . PHP_EOL;

$rewriteReport = $GLOBALS['__HTML_EXTENSION_REWRITES__'] ?? [];
if (!empty($rewriteReport)) {
    ksort($rewriteReport);
    $payload = [];
    foreach ($rewriteReport as $from => $to) {
        $payload[] = [
            'from' => $from,
            'to' => $to,
        ];
    }
    file_put_contents(
        __DIR__ . '/../__reports__/html-extensions-rewrites.json',
        json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE)
    );
}
