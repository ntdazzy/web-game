<?php
?><!DOCTYPE html>
<html lang="vi">
<head>
    <?php include __DIR__ . '/../partials/head.php'; ?>
    <!-- Bundled CSS -->
    <link rel="stylesheet" href="/assets/css/vendor.css">
    <link rel="stylesheet" href="/assets/css/app.css">
</head>
<body>
    <?php include __DIR__ . '/../partials/header.php'; ?>
    <main class="main-content">
        <?= $content ?? '' ?>
    </main>
    <?php include __DIR__ . '/../partials/footer.php'; ?>
    <!-- Bundled JS -->
    <script src="/assets/js/vendor.js"></script>
    <script src="/assets/js/app.js"></script>
</body>
</html>
