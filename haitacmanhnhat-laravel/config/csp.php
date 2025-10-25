<?php

$devHttpHosts = array_unique(array_filter([
    env('VITE_DEV_SERVER', 'http://127.0.0.1:5173'),
    'http://127.0.0.1:5173',
    'http://localhost:5173',
]));

$devWsHosts = array_map(
    static fn (string $host) => preg_replace('/^http/', 'ws', $host),
    $devHttpHosts
);

return [
    /*
     * Bật/tắt CSP toàn cục. Đặt CSP_ENABLED=false trong .env nếu cần vô hiệu trong môi trường dev.
     */
    'enabled' => env('CSP_ENABLED', true),

    /*
     * Nếu true sẽ phát sinh header Content-Security-Policy-Report-Only thay vì chặn.
     */
    'report_only' => env('CSP_REPORT_ONLY', false),

    /*
     * Endpoint nhận báo cáo vi phạm nếu cần.
     */
    'report_uri' => env('CSP_REPORT_URI', null),

    /*
     * Các directive chính của CSP. Có thể mở rộng thêm domain tùy ý.
     */
    'directives' => [
        // NOTE: Cho phép dev server hosts (IPv4/IPv6/localhost) cho Vite.
        'default-src' => ["'self'"],
        'script-src' => array_merge(
            ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
            $devHttpHosts,
            $devWsHosts
        ),
        'style-src' => array_merge(
            ["'self'", "'unsafe-inline'"],
            $devHttpHosts
        ),
        'img-src' => array_merge(["'self'", 'data:'], $devHttpHosts),
        'font-src' => array_merge(["'self'", 'data:'], $devHttpHosts),
        'connect-src' => array_merge(["'self'"], $devHttpHosts, $devWsHosts),
        'media-src' => array_merge(["'self'"], $devHttpHosts),
        'frame-src' => ['https://js.stripe.com'],
        'form-action' => ["'self'"],
    ],

    /*
     * Bật nonce cho script/style nếu cần bảo vệ inline script nghiêm ngặt.
     */
    'nonces' => [
        'script' => env('CSP_NONCE_SCRIPT', false),
        'style' => env('CSP_NONCE_STYLE', false),
    ],
];
