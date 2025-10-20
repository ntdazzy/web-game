<?php

if (!function_exists('env')) {
    function env(string $key, $default = null)
    {
        static $initialized = false;
        static $loadedValues = [];

        $value = getenv($key);
        if ($value !== false) {
            return $value;
        }

        if (!$initialized) {
            $initialized = true;
            $envPath = dirname(__DIR__) . '/.env';
            if (is_file($envPath) && is_readable($envPath)) {
                $lines = file($envPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) ?: [];
                foreach ($lines as $line) {
                    $line = trim($line);
                    if ($line === '' || str_starts_with($line, '#')) {
                        continue;
                    }
                    if (!str_contains($line, '=')) {
                        continue;
                    }

                    [$rawKey, $rawValue] = explode('=', $line, 2);
                    $envKey = trim($rawKey);
                    if ($envKey === '') {
                        continue;
                    }

                    $envValue = trim($rawValue);
                    $isQuoted = false;
                    if ($envValue !== '') {
                        $firstChar = $envValue[0];
                        $lastChar = $envValue[strlen($envValue) - 1];
                        if (($firstChar === '"' && $lastChar === '"') || ($firstChar === "'" && $lastChar === "'")) {
                            $isQuoted = true;
                            $envValue = substr($envValue, 1, -1);
                            if ($firstChar === '"') {
                                $envValue = str_replace(['\\"', '\\n', '\\r'], ['"', "\n", "\r"], $envValue);
                            }
                        }
                    }
                    if (!$isQuoted && str_contains($envValue, '#')) {
                        $commentPos = strpos($envValue, '#');
                        if ($commentPos !== false) {
                            $envValue = rtrim(substr($envValue, 0, $commentPos));
                        }
                    }

                    $loadedValues[$envKey] = $envValue;
                    if (!array_key_exists($envKey, $_ENV)) {
                        $_ENV[$envKey] = $envValue;
                    }
                    if (!array_key_exists($envKey, $_SERVER)) {
                        $_SERVER[$envKey] = $envValue;
                    }
                    if (getenv($envKey) === false) {
                        putenv($envKey . '=' . $envValue);
                    }
                }
            }
        }

        if (array_key_exists($key, $loadedValues)) {
            return $loadedValues[$key];
        }

        return $default;
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

        $analyticsEnabled = should_enable_analytics();

        $fontSrc = [
            "'self'",
            'https://fonts.gstatic.com',
            'data:',
        ];

        $imgSrc = [
            "'self'",
            'data:',
            'https:',
        ];

        $connectSrc = [
            "'self'",
        ];

        $scriptSrc = [
            "'self'",
            "'nonce-{$nonce}'",
        ];

        $styleSrc = [
            "'self'",
            "'unsafe-inline'",
            "'nonce-{$nonce}'",
            'https://fonts.googleapis.com',
        ];

        if ($analyticsEnabled) {
            $connectSrc[] = 'https://www.google-analytics.com';
            $connectSrc[] = 'https://www.googletagmanager.com';
            $scriptSrc[] = 'https://www.google-analytics.com';
            $scriptSrc[] = 'https://www.googletagmanager.com';
        }

        $csp = implode('; ', [
            "default-src 'self'",
            "base-uri 'self'",
            'font-src ' . implode(' ', $fontSrc),
            'img-src ' . implode(' ', $imgSrc),
            'connect-src ' . implode(' ', $connectSrc),
            'script-src ' . implode(' ', $scriptSrc),
            'style-src ' . implode(' ', $styleSrc),
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

if (!function_exists('should_enable_analytics')) {
    function should_enable_analytics(): bool
    {
        $env = \App\Core\Config\Config::get('app.env', 'production');
        $debug = (bool) \App\Core\Config\Config::get('app.debug', false);

        if ($env === 'production' && !$debug) {
            return true;
        }

        return false;
    }
}
