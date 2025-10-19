<?php
$uri = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');
switch ($uri) {
    case '':
    case 'index.php':
    case 'index.html':
        require __DIR__ . '/pages/home.php';
        break;
    case 'tin-tuc.html':
        require __DIR__ . '/pages/tin-tuc.php';
        break;
    case 'trai-ac-quy.html':
        require __DIR__ . '/pages/trai-ac-quy.php';
        break;
    default:
        http_response_code(404);
        echo '404 Not Found';
        break;
}
