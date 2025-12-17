<?php
require_once '../core/Core.php';
$app = Core::getInstance();
$app->init();
if (!isset($GLOBALS['_is_admin']) || !$GLOBALS['_is_admin']) {
    header("Location: /"); exit();
}
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <title>Th?ng kê - Admin</title>
    <meta charset="utf-8">
</head>
<body>
    <?php include '../header.php'; ?>
    <div class="admin-container">
        <h1>Th?ng kê (Ðang phát tri?n)</h1>
        <a href="/admin">? Quay l?i</a>
    </div>
    <?php include '../footer.php'; ?>
</body>
</html>