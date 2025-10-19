<?php

if (!function_exists('env')) {
    function env(string $key, $default = null)
    {
        $value = getenv($key);
        if ($value === false) {
            return $default;
        }
        return $value;
    }
}

if (!function_exists('app_origin')) {
    function app_origin(): string
    {
        $host = $_SERVER['HTTP_HOST'] ?? '';
        $scheme = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') ? 'https' : 'http';
        $fallback = $host ? ($scheme . '://' . $host) : '';

        $origin = env('APP_ORIGIN');
        if (!is_string($origin) || $origin === '') {
            $origin = $fallback;
        }

        return rtrim($origin, '/');
    }
}
