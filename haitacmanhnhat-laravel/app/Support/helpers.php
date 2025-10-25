<?php

declare(strict_types=1);

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;

if (! function_exists('app_origin')) {
    function app_origin(): string
    {
        $configured = rtrim((string) config('app.origin', ''), '/');
        if ($configured !== '') {
            return $configured;
        }

        /** @var Request $request */
        $request = request();
        $scheme = $request->getScheme() ?: 'http';
        $host = $request->getHttpHost();

        return rtrim($scheme . '://' . $host, '/');
    }
}

if (! function_exists('current_request_path')) {
    function current_request_path(): string
    {
        /** @var Request $request */
        $request = request();

        $path = $request->getPathInfo() ?: '/';
        return $path === '' ? '/' : $path;
    }
}

if (! function_exists('canonical_url')) {
    function canonical_url(): string
    {
        $path = current_request_path();

        if ($path === '/' || $path === '') {
            return app_origin() . '/';
        }

        return rtrim(app_origin() . $path, '/');
    }
}

if (! function_exists('absolute_url')) {
    function absolute_url(string $path): string
    {
        if ($path === '') {
            return app_origin() . '/';
        }

        if (Str::startsWith($path, ['http://', 'https://'])) {
            return $path;
        }

        return app_origin() . '/' . ltrim($path, '/');
    }
}

if (! function_exists('should_enable_analytics')) {
    function should_enable_analytics(): bool
    {
        $env = config('app.env', 'production');
        $debug = (bool) config('app.debug', false);

        return $env === 'production' && ! $debug;
    }
}

if (! function_exists('format_lastmod_for_sitemap')) {
    function format_lastmod_for_sitemap(?string $value): ?string
    {
        if (! $value) {
            return null;
        }

        $timestamp = strtotime($value);

        return $timestamp !== false
            ? gmdate('Y-m-d\TH:i:s\Z', $timestamp)
            : null;
    }
}

if (! function_exists('build_sitemap_entries')) {
    /**
     * Helper to build sitemap entries for the legacy structure.
     *
     * @return array<int, array<string, mixed>>
     */
    function build_sitemap_entries(): array
    {
        $entries = [];

        $append = static function (string $path, ?string $lastmod = null, string $changefreq = 'weekly', string $priority = '0.5') use (&$entries): void {
            $entries[] = [
                'loc' => absolute_url($path),
                'lastmod' => $lastmod,
                'changefreq' => $changefreq,
                'priority' => $priority,
            ];
        };

        $append('/', date('Y-m-d'), 'daily', '1.0');

        foreach ([
            '/tin-tuc',
            '/su-kien',
            '/update',
            '/danh-sach-tuong',
            '/giftcode',
            '/qua-nap-web',
            '/nap-tien-vao-vi',
            '/nap-tu-vi-vao-game',
        ] as $staticPath) {
            $append($staticPath);
        }

        return $entries;
    }
}

if (! function_exists('legacy_html')) {
    function legacy_html(?string $html): string
    {
        if ($html === null || $html === '') {
            return '';
        }

        $nonce = csp_nonce();

        return preg_replace_callback(
            '/<script\b(?![^>]*\bnonce=)([^>]*)>/i',
            static fn(array $matches) => '<script' . $matches[1] . ' nonce="' . e($nonce) . '">',
            $html
        ) ?? $html;
    }
}

if (! function_exists('csp_nonce')) {
    function csp_nonce(): string
    {
        if (App::has('csp.nonce')) {
            return App::make('csp.nonce');
        }

        $nonce = base64_encode(random_bytes(16));
        App::instance('csp.nonce', $nonce);

        return $nonce;
    }
}

if (! function_exists('legacy_csrf_token')) {
    function legacy_csrf_token(string $form = 'default'): string
    {
        $tokens = session()->get('_legacy_csrf_tokens', []);

        if (! isset($tokens[$form])) {
            $tokens[$form] = bin2hex(random_bytes(16));
            session()->put('_legacy_csrf_tokens', $tokens);
        }

        return $tokens[$form];
    }
}

if (! function_exists('legacy_csrf_field')) {
    function legacy_csrf_field(string $form = 'default'): string
    {
        $token = legacy_csrf_token($form);

        return '<input type="hidden" name="_token" value="' . e($token) . '">' . PHP_EOL
            . '<input type="hidden" name="_token_name" value="' . e($form) . '">' . PHP_EOL;
    }
}
