<?php
// Front Controller
require_once 'core/Core.php';

$app = Core::getInstance();
$app->init();

// Security headers (non-breaking)
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: strict-origin-when-cross-origin');

// Determine route from URI or query param
$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);
$path = trim($path, '/');

// Allow fallback to ?r=
$route = $_GET['r'] ?? ($path === '' ? 'home' : $path);

// Auth guards
$loggedIn = isset($GLOBALS['_login']) && $GLOBALS['_login'] === 'on';

// Redirect authenticated users away from login/register
if ($loggedIn && in_array($route, ['login', 'register'])) {
    Response::redirect('/');
}

// Protect routes that require authentication
$protectedRoutes = ['naptien', 'change-password'];
if (!$loggedIn && in_array($route, $protectedRoutes)) {
    Response::sweetAlert('warning', 'Thông Báo', 'Vui lòng đăng nhập để tiếp tục', '/login');
}

// Handle routes that must run before any output (e.g., logout)
if ($route === 'logout') {
    require 'views/pages/logout.php';
    exit;
}

// Global layout header (after guards to allow redirects before output)
require('views/layout/header.php');

switch ($route) {
    case 'login':
        require 'views/pages/login.php';
        break;
    case 'register':
        require 'views/pages/register.php';
        break;
    case 'naptien':
        require 'views/pages/naptien.php';
        break;
    case 'huongdan':
        require 'views/pages/huongdan.php';
        break;
    case 'leaderboard':
        require 'views/pages/leaderboard.php';
        break;
    case 'change-password':
        require 'views/pages/change-password.php';
        break;
    default:
        require 'views/pages/home.php';
        break;
}

require('views/layout/foot.php');
