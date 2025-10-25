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
        'script-src' => ["'self'"],
        'style-src' => ["'self'", "'unsafe-inline'"],
        'img-src' => ["'self'", 'data:'],
        'font-src' => ["'self'"],
        'connect-src' => ["'self'"],
        'frame-src' => ['https://js.stripe.com'],
        'form-action' => ["'self'"],
    ],
];
