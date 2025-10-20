<?php
return [
    'app' => [
        'name' => 'Hải Tặc Mạnh Nhất',
        'env' => env('APP_ENV', 'production'),
        'debug' => env('APP_DEBUG', false),
        'url' => env('APP_ORIGIN', 'http://haitacmanhnhat'),
        'domain' => (static function (): ?string {
            $explicit = env('APP_PRIMARY_DOMAIN');
            if (is_string($explicit) && $explicit !== '') {
                return $explicit;
            }
            $originHost = parse_url(env('APP_ORIGIN', ''), PHP_URL_HOST);
            if (is_string($originHost) && $originHost !== '') {
                return $originHost;
            }
            return null;
        })(),
        'cookie_domain' => env('APP_COOKIE_DOMAIN'),
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
