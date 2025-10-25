<?php

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
        'default-src' => ["'self'"],
        'script-src' => [
            "'self'",
            "'unsafe-inline'",
            "'unsafe-eval'",
            'http://127.0.0.1:5173',
            'ws://127.0.0.1:5173',
        ],
        'style-src' => [
            "'self'",
            "'unsafe-inline'",
            'http://127.0.0.1:5173',
        ],
        'img-src' => ["'self'", 'data:'],
        'font-src' => ["'self'"],
        'connect-src' => ["'self'", 'ws://127.0.0.1:5173', 'http://127.0.0.1:5173'],
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
