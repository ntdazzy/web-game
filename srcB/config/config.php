<?php
return [
    'app' => [
        'name' => 'Hải Tặc Mạnh Nhất',
        'env' => env('APP_ENV', 'production'),
        'debug' => env('APP_DEBUG', false),
        'url' => env('APP_ORIGIN', 'http://haitacmanhnhat'),
    ],
    'database' => [
        'default' => env('DB_CONNECTION', 'mysql'),
        'connections' => [
            'mysql' => [
                'host' => env('DB_HOST', '127.0.0.1'),
                'port' => env('DB_PORT', 3306),
                'database' => env('DB_DATABASE', 'nro'),
                'username' => env('DB_USERNAME', 'root'),
                'password' => env('DB_PASSWORD', ''),
                'charset' => 'utf8mb4',
            ],
        ],
    ],
];
