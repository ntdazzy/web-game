<?php
?><!DOCTYPE html>
<html lang="vi">
<head>
    <?php include __DIR__ . '/../partials/head.php'; ?>
    <link rel="stylesheet" href="/assets/css/vendor.css">
</head>
<body <?= $bodyAttributes ?? '' ?>>
    <?php include __DIR__ . '/../partials/header.php'; ?>
    <main class="main-content">
        <?= $content ?? '' ?>
    </main>
    <?php include __DIR__ . '/../partials/footer.php'; ?>
    <script src="/assets/js/vendor.js"></script>
</body>
</html>
