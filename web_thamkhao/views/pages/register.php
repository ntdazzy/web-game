<?php
// Handle register request (Core is already initialized in index.php)
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['register'])) {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';
    $captchaResponse = $_POST['cf-turnstile-response'] ?? '';

    $result = $app->auth->register($username, $password, $captchaResponse);

    if ($result['success']) {
        Response::sweetAlert('success', 'Thông Báo', $result['message'], 'login.php');
    } else {
        Response::sweetAlert('error', 'Thông Báo', $result['message']);
    }
}
?>

<main><form class="form__register" method="POST"><h1 class="title__register">Đăng ký</h1><input type="text" class="form__input" name="username" placeholder="Tài khoản" required><input type="password" class="form__input" name="password" placeholder="Mật khẩu" required><div class="cf-turnstile" data-sitekey="<?php echo $app->config->get('CF_SITE_KEY'); ?>"></div><button class="btn__register" type="submit" name="register">Đăng ký</button></form></main>