<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['login'])) {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';
    $captchaResponse = $_POST['cf-turnstile-response'] ?? '';

    $result = $app->auth->login($username, $password, $captchaResponse);

    // Show alert and redirect appropriately
    if ($result['success']) {
        Response::sweetAlert('success', 'Thông Báo', $result['message'], '/', false);
    } else {
        Response::sweetAlert('error', 'Thông Báo', $result['message'], null, false);
    }
}
?>

<main><form class="form__login" method="POST"><h1 class="title__login">Đăng nhập</h1><input type="text" class="form__input" name="username" placeholder="Tài khoản" required><input type="password" class="form__input" name="password" placeholder="Mật khẩu" required><div class="cf-turnstile" data-sitekey="<?php echo $app->config->get('CF_SITE_KEY'); ?>"></div><button class="btn__login" type="submit" name="login">Đăng nhập</button></form></main>