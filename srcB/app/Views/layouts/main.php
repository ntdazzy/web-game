<?php
?><!DOCTYPE html>
<html lang="vi">
<head>
    <?php include __DIR__ . '/../partials/head.php'; ?>
    <link rel="stylesheet" href="/assets/css/vendor.css">
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
    <script src="/assets/js/vendor.js"></script>
</body>
</html>
