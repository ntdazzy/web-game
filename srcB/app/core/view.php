<?php
declare(strict_types=1);

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/helpers.php';

/**
 * Render a view with the provided data envelope.
 *
 * @param string $view Name of the view file relative to app/views (without extension).
 * @param array<string,mixed> $data Additional data variables exposed to the view.
 */
function render(string $view, array $data = []): void
{
    $paths = PATHS;
    $view = trim($view, '/');
    $viewFile = $paths['views'] . '/' . $view . '.php';

    if (!is_file($viewFile)) {
        http_response_code(500);
        throw new RuntimeException(sprintf('View not found: %s', $view));
    }

    $page = [];
    $content = null;
    $sections = [];
    $viewName = $view;

    if ($data) {
        extract($data, EXTR_SKIP);
    }

    require $viewFile;

    if (!isset($page) || !is_array($page)) {
        $page = [];
    }

    $page['view'] = $page['view'] ?? $viewName;

    $lang = $page['lang'] ?? 'vi';
    $bodyClass = $page['body_class'] ?? '';
    $title = $page['title'] ?? '';
    $meta = $page['meta'] ?? [];
    $description = $page['description'] ?? ($meta['description'] ?? null);
    $canonical = $page['canonical'] ?? ($meta['canonical'] ?? null);
    $og = $page['og'] ?? ($meta['og'] ?? []);

    $styles = $page['styles'] ?? [];
    $scriptsHead = $page['scripts_head'] ?? [];
    $scriptsFooter = $page['scripts_footer'] ?? [];

    $contentHtml = null;
    if (is_string($content) && $content !== '') {
        $contentPath = $content;
        if (!str_starts_with($contentPath, $paths['content'])) {
            $contentPath = $paths['content'] . '/' . ltrim($contentPath, '/');
        }
        $contentHtml = capture_include($contentPath, [
            'page' => $page,
            'data' => $data,
        ]);
    } elseif ($content instanceof \Closure) {
        $contentHtml = (function (\Closure $callback, array $scope): string {
            if ($scope) {
                extract($scope, EXTR_SKIP);
            }
            ob_start();
            $callback();
            return (string) ob_get_clean();
        })($content, [
            'page' => $page,
            'data' => $data,
        ]);
    } elseif (is_string($content)) {
        $contentHtml = $content;
    }

    $sections = $sections ?? [];

    $layoutData = [
        'lang' => $lang,
        'bodyClass' => $bodyClass,
        'title' => $title,
        'description' => $description,
        'canonical' => $canonical,
        'og' => $og,
        'page' => $page,
        'view' => $viewName,
        'styles' => $styles,
        'scriptsHead' => $scriptsHead,
        'scriptsFooter' => $scriptsFooter,
        'content' => $contentHtml,
        'sections' => $sections,
        'data' => $data,
    ];

    extract($layoutData, EXTR_SKIP);

    echo "<!DOCTYPE html>\n";
    echo '<html lang="' . ht_attr($lang) . "\">\n";
    include $paths['partials'] . '/head.php';
    echo '<body class="' . ht_attr($bodyClass) . "\">\n";
    include $paths['partials'] . '/header.php';
    include $paths['partials'] . '/menu-fixed.php';

    if ($sections) {
        foreach ($sections as $section) {
            if (is_string($section)) {
                $sectionPath = str_starts_with($section, $paths['content'])
                    ? $section
                    : $paths['content'] . '/' . ltrim($section, '/');
                echo capture_include($sectionPath, [
                    'page' => $page,
                    'data' => $data,
                ]);
            } elseif ($section instanceof \Closure) {
                echo (function (\Closure $callback, array $scope): string {
                    if ($scope) {
                        extract($scope, EXTR_SKIP);
                    }
                    ob_start();
                    $callback();
                    return (string) ob_get_clean();
                })($section, [
                    'page' => $page,
                    'data' => $data,
                ]);
            }
        }
    }

    if ($contentHtml !== null) {
        include $paths['partials'] . '/content.php';
    }

    include $paths['partials'] . '/footer.php';
    include $paths['partials'] . '/scripts.php';
    echo "</body>\n</html>";
}
