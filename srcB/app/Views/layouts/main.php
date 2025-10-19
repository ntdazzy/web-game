<?php
?><!DOCTYPE html>
<html lang="vi">
<head>
    <?php include __DIR__ . '/../partials/head.php'; ?>
    <link rel="stylesheet" href="/assets/css/vendor.css">
    <link rel="stylesheet" href="/assets/css/app.css">
    <?php if (!empty($pageStyles) && is_array($pageStyles)): ?>
        <?php foreach ($pageStyles as $style): ?>
            <link rel="stylesheet" href="<?= htmlspecialchars($style, ENT_QUOTES) ?>">
        <?php endforeach; ?>
    <?php endif; ?>
    <?php if (!empty($pageHeadScripts) && is_array($pageHeadScripts)): ?>
        <?php foreach ($pageHeadScripts as $headScript): ?>
            <script src="<?= htmlspecialchars($headScript, ENT_QUOTES) ?>" nonce="<?= csp_nonce() ?>"></script>
        <?php endforeach; ?>
    <?php endif; ?>
    <?php
        $origin = app_origin();
        $host = parse_url($origin, PHP_URL_HOST) ?: ($_SERVER['HTTP_HOST'] ?? '');
        $cookieDomain = $host ? ('.' . ltrim($host, '.')) : null;
    ?>
    <script id="app-config-data" type="application/json" nonce="<?= csp_nonce() ?>">
        <?= json_encode([
            'origin' => $origin,
            'cookieDomain' => $cookieDomain,
        ], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) ?>
    </script>
    <script src="/assets/js/runtime/app-config.js"></script>
</head>
<body <?= $bodyAttributes ?? '' ?>>
    <?php include __DIR__ . '/../partials/gtm-noscript.php'; ?>
    <?php include __DIR__ . '/../partials/header.php'; ?>
    <main class="main-content">
        <?= $content ?? '' ?>
    </main>
    <?php include __DIR__ . '/../partials/page-slider.php'; ?>
    <?php include __DIR__ . '/../partials/footer.php'; ?>
    <?php include __DIR__ . '/../partials/menu-fixed.php'; ?>
    <?php include __DIR__ . '/../partials/analytics-inline.php'; ?>
    <?php include __DIR__ . '/../partials/global-config-script.php'; ?>
    <div id="authModal" class="auth-modal hidden" role="dialog" aria-modal="true" aria-labelledby="authModalTitle">
        <div class="backdrop absolute inset-0"></div>
        <div class="panel relative">
            <button class="close" type="button" aria-label="Đóng">&times;</button>
            <div class="tabs">
                <button class="tab-btn active" data-tab="login" type="button">Đăng Nhập</button>
                <button class="tab-btn" data-tab="register" type="button">Đăng Ký</button>
            </div>
            <form id="loginForm" class="tab-pane" data-tab="login" method="post" novalidate>
                <?= csrf_field('auth_login') ?>
                <div class="title" id="authModalTitle">Đăng Nhập</div>
                <label class="field">
                    <span class="sr-only">Tên đăng nhập</span>
                    <input name="username" type="text" class="ipt" placeholder="Tên đăng nhập" autocomplete="username" required>
                </label>
                <label class="field">
                    <span class="sr-only">Mật khẩu</span>
                    <input name="password" type="password" class="ipt" placeholder="Mật khẩu" autocomplete="current-password" required>
                </label>
                <label class="field checkbox">
                    <input type="checkbox" name="remember">
                    <span>Lưu thông tin đăng nhập</span>
                </label>
                <button class="btn w-full" type="submit">ĐĂNG NHẬP</button>
                <p class="helper">
                    Chưa có tài khoản?
                    <a href="#" class="switch" data-tab="register">Đăng kí ngay</a>
                    • <a href="/id/quen-mat-khau" class="switch-link">Quên mật khẩu?</a>
                </p>
            </form>
            <form id="registerForm" class="tab-pane hidden" data-tab="register" method="post" novalidate>
                <?= csrf_field('auth_register') ?>
                <div class="title">Đăng Ký</div>
                <label class="field">
                    <span class="sr-only">Tên đăng nhập</span>
                    <input name="username" type="text" class="ipt" placeholder="Tên đăng nhập" autocomplete="username" required>
                </label>
                <label class="field">
                    <span class="sr-only">Mật khẩu</span>
                    <input name="password" type="password" class="ipt" placeholder="Mật khẩu" autocomplete="new-password" required>
                </label>
                <label class="field">
                    <span class="sr-only">Nhập lại mật khẩu</span>
                    <input name="password_confirm" type="password" class="ipt" placeholder="Nhập lại mật khẩu" required>
                </label>
                <label class="field checkbox">
                    <input type="checkbox" name="terms" required>
                    <span>Tôi đồng ý <a href="/tin-tuc/dieu-khoan-dich-vu" class="switch-link">Điều khoản &amp; Chính sách sử dụng</a></span>
                </label>
                <button class="btn w-full" type="submit">ĐĂNG KÝ</button>
                <p class="helper">
                    Đã có tài khoản?
                    <a href="#" class="switch" data-tab="login">Đăng nhập</a>
                </p>
            </form>
        </div>
    </div>
    <script src="/assets/js/vendor.js"></script>
    <script src="/assets/js/app.js" defer></script>
    <script src="/assets/js/app-auth.js" defer></script>
    <script src="/assets/js/runtime/init-daterangepicker.js" defer></script>
    <?php if (!empty($pageScripts) && is_array($pageScripts)): ?>
        <?php foreach ($pageScripts as $script): ?>
            <script src="<?= htmlspecialchars($script, ENT_QUOTES) ?>" defer></script>
        <?php endforeach; ?>
    <?php endif; ?>
</body>
</html>
