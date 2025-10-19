<?php
if (!isset($loginScriptPage)) {
    $requestPath = trim(parse_url($_SERVER['REQUEST_URI'] ?? '', PHP_URL_PATH), '/');
    if ($requestPath === '' or $requestPath === 'index.php' or $requestPath === 'index.html') {
        $loginScriptPage = 'index.html';
    } elseif (str_contains($requestPath, '/')) {
        $segments = array_values(array_filter(explode('/', $requestPath)));
        $last = end($segments) ?: 'index';
        if (!str_ends_with($last, '.html')) {
            $last .= '.html';
        }
        $loginScriptPage = $last;
    } else {
        $loginScriptPage = str_ends_with($requestPath, '.html')
            ? $requestPath
            : $requestPath . '.html';
    }
}
$loginScriptPage = ltrim($loginScriptPage, '/');
$configPayload = [
    'script' => $loginScriptPage . '//haitacmanhnhat.vn/st-ms/js/widget.login.js',
    'redirect' => 'https://haitacmanhnhat.vn/qua-nap-web',
];
$configJson = json_encode($configPayload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
?>
<script>
    var DOMAIN = window.location.hostname;
    var jsonData = JSON.parse('<?= addslashes($configJson) ?>');
    const cookieDomain = '.haitacmanhnhat.vn';
    var linkAjaxGiftcode = DOMAIN + '/giftcode/fetch-code-by-id';
    var historyGiftcode = DOMAIN + '/giftcode/fetch-history';
</script>
