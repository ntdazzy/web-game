<?php
namespace App\Core\View;

class ViewRenderer
{
    private const BASE_VIEW_PATH = __DIR__ . '/../../Views/';
    private const MODULE_PATH = __DIR__ . '/../../Modules/';

    public static function resolve(string $view): ?string
    {
        $view = trim($view, '/');
        if ($view === '') {
            return null;
        }

        if (str_contains($view, '::')) {
            [$module, $relative] = explode('::', $view, 2);
            $module = trim($module);
            $relative = trim($relative, '/');
            if ($module === '' || $relative === '') {
                return null;
            }
            $path = self::MODULE_PATH . self::normalizeModule($module) . '/Views/' . self::normalizePath($relative);
            if (is_file($path)) {
                return $path;
            }
        }

        $fallback = self::BASE_VIEW_PATH . self::normalizePath($view);
        if (is_file($fallback)) {
            return $fallback;
        }

        return null;
    }

    public static function render(string $view, array $data = []): string
    {
        $path = self::resolve($view);
        if ($path === null) {
            throw new \RuntimeException('View not found: ' . $view);
        }

        extract($data, EXTR_OVERWRITE);
        ob_start();
        include $path;
        return (string) ob_get_clean();
    }

    private static function normalizeModule(string $module): string
    {
        $module = str_replace(['\\', '..'], '/', $module);
        return trim(preg_replace('#/+#', '/', $module), '/');
    }

    private static function normalizePath(string $path): string
    {
        $path = str_replace('\\', '/', $path);
        $path = preg_replace('#/+#', '/', $path);
        $segments = [];
        foreach (explode('/', trim($path, '/')) as $segment) {
            if ($segment === '..') {
                array_pop($segments);
                continue;
            }
            if ($segment === '.' || $segment === '') {
                continue;
            }
            $segments[] = $segment;
        }
        $normalized = implode('/', $segments);
        if ($normalized === '') {
            return 'index.php';
        }
        if (!str_ends_with($normalized, '.php')) {
            $normalized .= '.php';
        }
        return $normalized;
    }
}
