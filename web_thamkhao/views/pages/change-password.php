<?php
// Kiểm tra trạng thái đăng nhập (Core đã init ở index.php)
if (!isset($_SESSION['account'])) {
    Response::sweetAlert('error', 'Lỗi', 'Bạn cần đăng nhập để thay đổi mật khẩu!', 'login.php');
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['change_password'])) {
    $user = $_SESSION['account'];
    $old_pass = trim($_POST['old_password']);
    $new_pass = trim($_POST['new_password']);

    // Use core function to change password
    $result = $app->auth->changePassword($user, $old_pass, $new_pass);

    if ($result['success']) {
        Response::sweetAlert('success', 'Thông Báo', $result['message'], 'index.php');
    } else {
        Response::sweetAlert('error', 'Thông Báo', $result['message'], 'change-password');
    }
}
?>
<main><form class="form__change-password" method="POST"><h1 class="title__change-password">Đổi mật khẩu</h1><input type="password" name="old_password" class="form__input" placeholder="Mật khẩu cũ..." required><input type="password" name="new_password" class="form__input" placeholder="Mật khẩu mới..." required><button class="btn__change-password" type="submit" name="change_password">Đổi mật khẩu</button></form></main>