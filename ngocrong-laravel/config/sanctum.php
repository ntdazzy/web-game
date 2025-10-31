<?php

return [
    'stateful' => explode(',', (string) env('SANCTUM_STATEFUL_DOMAINS', implode(',', [
        'localhost',
        'localhost:3000',
        '127.0.0.1',
        '127.0.0.1:8000',
        '::1',
        parse_url((string) env('APP_URL', 'http://localhost'), PHP_URL_HOST),
    ]))),

    'guard' => ['web'],

    'expiration' => env('SANCTUM_TOKEN_EXPIRATION'),

    'middleware' => [
        'verify_csrf_token' => App\Http\Middleware\VerifyCsrfToken::class,
        'encrypt_cookies' => App\Http\Middleware\EncryptCookies::class,
    ],
];
