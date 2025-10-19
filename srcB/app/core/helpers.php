<?php
declare(strict_types=1);

/**
 * Escape a string for safe HTML attribute output.
 */
function ht_attr(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

/**
 * Determine whether the provided path should bypass prefix handling.
 */
function ht_is_external(string $path): bool
{
    if ($path === '' || $path[0] === '#') {
        return true;
    }

    $lower = strtolower($path);
    return str_starts_with($lower, 'http://')
        || str_starts_with($lower, 'https://')
        || str_starts_with($lower, '//')
        || str_starts_with($lower, 'mailto:')
        || str_starts_with($lower, 'tel:')
        || str_starts_with($lower, 'javascript:')
        || str_starts_with($lower, 'data:');
}

/**
 * Build an absolute URL for assets based on BASE_URL.
 */
function asset_url(string $path): string
{
    if ($path === '' || ht_is_external($path)) {
        return $path;
    }

    $path = '/' . ltrim($path, '/');
    if (BASE_URL === '/') {
        return $path;
    }

    return rtrim(BASE_URL, '/') . $path;
}

/**
 * Helper to emit class attributes with optional active flag.
 */
function ht_nav_class(string $base, bool $isActive): string
{
    return $isActive ? $base . ' active' : $base;
}

/**
 * Build an internal URL from a slug.
 */
function url_for(string $slug = ''): string
{
    $slug = trim($slug, '/');
    if ($slug === '') {
        return BASE_URL === '/' ? '/' : rtrim(BASE_URL, '/');
    }

    return asset_url($slug);
}

/**
 * Safely include a PHP/HTML fragment and capture its output.
 */
function capture_include(string $path, array $vars = []): string
{
    if (!is_file($path)) {
        throw new RuntimeException(sprintf('Content template not found: %s', $path));
    }

    if ($vars) {
        extract($vars, EXTR_SKIP);
    }

    ob_start();
    include $path;
    return (string) ob_get_clean();
}
