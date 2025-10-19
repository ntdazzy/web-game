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

if (!function_exists('send_security_headers')) {
    function send_security_headers(): void
    {
        if (headers_sent()) {
            return;
        }

        $nonce = base64_encode(random_bytes(16));
        $GLOBALS['__CSP_NONCE__'] = $nonce;

        $csp = implode('; ', [
            "default-src 'self'",
            "base-uri 'self'",
            "font-src 'self' https://fonts.gstatic.com data:",
            "img-src 'self' data: https:",
            "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com",
            "script-src 'self' 'nonce-{$nonce}' https://www.googletagmanager.com https://www.google-analytics.com",
            "style-src 'self' 'unsafe-inline' 'nonce-{$nonce}' https://fonts.googleapis.com",
            "frame-ancestors 'self'",
            "form-action 'self'",
        ]);

        header('Content-Security-Policy: ' . $csp);
        header('X-Frame-Options: SAMEORIGIN');
        header('Referrer-Policy: strict-origin-when-cross-origin');
        header('Permissions-Policy: interest-cohort=()');
        header('X-Content-Type-Options: nosniff');
    }
}

if (!function_exists('rewrite_internal_html_links')) {
    function rewrite_internal_html_links(string $html): string
    {
        static $pattern = '/\b(href|action|data-(?:redirect|href|target|url))\s*=\s*(["\'])(?!https?:|mailto:|tel:)([^"\']+?)\.html(\?[^"\']*)?(#[^"\']*)?\2/i';
        $report =& $GLOBALS['__HTML_EXTENSION_REWRITES__'];
        if (!is_array($report)) {
            $report = [];
        }

        return preg_replace_callback($pattern, function (array $matches) use (&$report): string {
            [$full, $attr, $quote, $path, $query, $fragment] = $matches + [null, null, null, null, '', ''];

            $query = $query ?? '';
            $fragment = $fragment ?? '';

            $cleanPath = rtrim($path, '/');
            if ($cleanPath === '/index') {
                $cleanPath = '/';
            } elseif ($cleanPath === 'index') {
                $cleanPath = '';
            }
            if ($cleanPath === '') {
                $cleanPath = '/';
            }

            $replacement = sprintf('%s=%s%s%s%s%s', $attr, $quote, $cleanPath, $query, $fragment, $quote);
            $originalUrl = $path . '.html' . $query . $fragment;
            $rewrittenUrl = $cleanPath . $query . $fragment;
            $report[$originalUrl] = $rewrittenUrl;

            return $replacement;
        }, $html);
    }
}

if (!function_exists('current_request_path')) {
    function current_request_path(): string
    {
        $path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?? '/';
        return $path === '' ? '/' : $path;
    }
}

if (!function_exists('canonical_url')) {
    function canonical_url(): string
    {
        $path = current_request_path();
        if ($path === '/' || $path === '') {
            return app_origin() . '/';
        }

        return rtrim(app_origin() . $path, '/');
    }
}

if (!function_exists('absolute_url')) {
    function absolute_url(string $path): string
    {
        if ($path === '') {
            return app_origin() . '/';
        }

        if (preg_match('~^https?://~i', $path)) {
            return $path;
        }

        return app_origin() . '/' . ltrim($path, '/');
    }
}

if (!function_exists('format_lastmod_for_sitemap')) {
    function format_lastmod_for_sitemap(?string $value): ?string
    {
        if (!$value) {
            return null;
        }

        $timestamp = strtotime($value);
        if ($timestamp === false) {
            return null;
        }

        return gmdate('Y-m-d\\TH:i:s\\Z', $timestamp);
    }
}

if (!function_exists('build_sitemap_entries')) {
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

        $staticRoutes = [
            '/tin-tuc',
            '/su-kien',
            '/update',
            '/danh-sach-tuong',
            '/giftcode',
            '/qua-nap-web',
            '/nap-tien-vao-vi',
            '/nap-tu-vi-vao-game',
            '/trai-ac-quy',
            '/trai-dung-hop',
            '/lich-su-nap',
            '/id',
            '/id/dang-ky',
            '/id/dang-nhap',
            '/id/doi-mat-khau',
            '/id/doi-email',
            '/id/cap-nhat-tai-khoan',
            '/id/cap-nhat-email',
            '/id/quen-mat-khau',
        ];

        foreach ($staticRoutes as $route) {
            $append($route, null, 'monthly', '0.6');
        }

        foreach (['news' => '/tin-tuc', 'event' => '/su-kien', 'update' => '/update'] as $dataset => $basePath) {
            foreach (\App\Modules\News\Repositories\NewsRepository::all($dataset) as $item) {
                $slug = $item['slug'] ?? null;
                if (!$slug) {
                    continue;
                }
                $lastmod = format_lastmod_for_sitemap($item['updated_at'] ?? $item['created_at'] ?? null);
                $append($basePath . '/' . $slug, $lastmod, 'weekly', '0.7');
            }
        }

        foreach (\App\Modules\Characters\Repositories\CharacterRepository::all() as $character) {
            $slug = $character['slug'] ?? null;
            if (!$slug) {
                continue;
            }
            $append('/danh-sach-tuong/' . $slug, null, 'monthly', '0.6');
        }

        return $entries;
    }
}

if (!function_exists('render_sitemap_xml')) {
    function render_sitemap_xml(array $entries): string
    {
        $xml = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'];
        foreach ($entries as $entry) {
            $xml[] = '  <url>';
            $xml[] = '    <loc>' . htmlspecialchars($entry['loc'], ENT_XML1) . '</loc>';
            if (!empty($entry['lastmod'])) {
                $xml[] = '    <lastmod>' . htmlspecialchars($entry['lastmod'], ENT_XML1) . '</lastmod>';
            }
            if (!empty($entry['changefreq'])) {
                $xml[] = '    <changefreq>' . htmlspecialchars($entry['changefreq'], ENT_XML1) . '</changefreq>';
            }
            if (!empty($entry['priority'])) {
                $xml[] = '    <priority>' . htmlspecialchars($entry['priority'], ENT_XML1) . '</priority>';
            }
            $xml[] = '  </url>';
        }
        $xml[] = '</urlset>';

        return implode("\n", $xml);
    }
}

if (!function_exists('csrf_token')) {
    function csrf_token(string $form = 'default'): string
    {
        return \App\Core\Security\CsrfTokenManager::getToken($form);
    }
}

if (!function_exists('csrf_field')) {
    function csrf_field(string $form = 'default'): string
    {
        $token = htmlspecialchars(csrf_token($form), ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
        $formName = htmlspecialchars($form, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
        return '<input type="hidden" name="_token" value="' . $token . '">' . "\n"
            . '<input type="hidden" name="_token_name" value="' . $formName . '">' . "\n";
    }
}

if (!function_exists('csp_nonce')) {
    function csp_nonce(): string
    {
        return $GLOBALS['__CSP_NONCE__'] ?? '';
    }
}
