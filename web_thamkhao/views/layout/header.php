<!DOCTYPE html>
<html lang="vi">

<head>
    <?php
    $title = $defaultTitle;
    $desc = $description;
    $keys = $keywords;
    $icon = $favicon;

    $scheme = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
    $host = $_SERVER['HTTP_HOST'] ?? 'localhost';
    $uri  = $_SERVER['REQUEST_URI'] ?? '/';
    $currentUrl = $scheme . '://' . $host . $uri;
    $canonical = htmlspecialchars($currentUrl);

    // App logo as share image (fallback)
    $shareImage = $app->config->get('APP_FAVICON');

    // Download links
    $pcDownload = $app->config->get('PC_DOWNLOAD');
    $androidDownload = $app->config->get('ANDROID_DOWNLOAD');
    $iosDownload = $app->config->get('IOS_DOWNLOAD');
    $javaDownload = $app->config->get('JAVA_DOWNLOAD');

    // Get home page data
    $isLoggedIn = $app->auth->isLoggedIn();
    $playerInfo = null;
    $avatarPath = null;

    if ($isLoggedIn) {
        $playerInfo = $app->auth->getPlayerInfo();
        if ($playerInfo) {
            switch ($playerInfo['gender']) {
                case 0:
                    $avatarPath = "/assets/images/char/traidat.png";
                    break;
                case 1:
                    $avatarPath = "/assets/images/char/namec.png";
                    break;
                case 2:
                    $avatarPath = "/assets/images/char/xayda.png";
                    break;
                default:
                    $avatarPath = "/assets/images/char/default.png";
                    break;
            }
        }
    }
    ?>
    <title><?php echo htmlspecialchars($title); ?></title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Canonical -->
    <link rel="canonical" href="<?php echo $canonical; ?>">

    <!-- Primary Meta Tags -->
    <meta name="title" content="<?php echo htmlspecialchars($title); ?>">
    <meta name="description" content="<?php echo htmlspecialchars($desc); ?>">
    <meta name="keywords" content="<?php echo htmlspecialchars($keys); ?>">
    <meta name="robots" content="index, follow">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="vi_VN" />
    <meta property="og:title" content="<?php echo htmlspecialchars($title); ?>" />
    <meta property="og:description" content="<?php echo htmlspecialchars($desc); ?>" />
    <meta property="og:url" content="<?php echo $canonical; ?>" />
    <meta property="og:site_name" content="<?php echo htmlspecialchars($title); ?>" />
    <meta property="og:image" content="<?php echo htmlspecialchars($shareImage); ?>" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php echo htmlspecialchars($title); ?>">
    <meta name="twitter:description" content="<?php echo htmlspecialchars($desc); ?>">
    <meta name="twitter:image" content="<?php echo htmlspecialchars($shareImage); ?>">

    <link rel="shortcut icon" href="<?php echo htmlspecialchars($icon); ?>" type="image/x-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="/assets/css/style.css">
</head>

<body>
    <div id="snow"><canvas class="particles-js-canvas-el"></canvas></div>
    <div class="container">
        <header>
            <div class="logo__header">
                <a href="/">
                    <img src="/assets/images/logo_light_XQE-removebg-preview.png" alt="Logo">
                </a>
            </div>
            <div class="group__header">
                <?php if (isset($GLOBALS['_login']) && $GLOBALS['_login'] === 'on'): ?>
                    <div class="player">
                        <div class="player__image">
                            <img src="<?php echo $avatarPath; ?>" alt="Avatar">
                        </div>
                        <h2 class="player__name">
                            <?php echo $playerInfo['name']; ?>
                        </h2>
                        <h4 class="player__money">
                            Số dư: <?php echo number_format($playerInfo['cash']); ?>đ
                        </h4>
                    </div>
                    <a href="/naptien" class="btn__header">
                        <i class="fa fa-money"></i>
                        <span>Nạp tiền</span>
                    </a>
					<?php if (isset($GLOBALS['_is_admin']) && $GLOBALS['_is_admin']): ?>
<a href="/admin" class="btn__header" style="background: linear-gradient(45deg, #dc3545, #c82333);">
    <i class="fa fa-crown"></i>
    <span>Admin</span>
</a>
<?php endif; ?>
                    <a href="/change-password" class="btn__header">
                        <i class="fa fa-money"></i>
                        <span>Đổi mật khẩu</span>
                    </a>
                    <a href="/logout" class="btn__header">
                        <i class="fa fa-sign-out"></i>
                        <span>Đăng xuất</span>
                    </a>
                <?php else: ?>
                    <a href="/login" class="btn__header">
                        <i class="fa fa-sign-in"></i>
                        <span>Đăng Nhập</span>
                    </a>
                    <a href="/register" class="btn__header">
                        <i class="fa fa-user-plus"></i>
                        <span>Đăng Ký</span>
                    </a>
                <?php endif; ?>
            </div>
            <p class="recommend__header">
                <img src="/assets/images/age.png" alt="Age">
                <span>Dành cho người chơi trên 12 tuổi. Chơi quá 180 phút mỗi ngày sẽ có hại sức khỏe.</span>
            </p>
        </header>
        <nav>
            <div class="group_nav">
                <a href="<?php echo htmlspecialchars($pcDownload); ?>" class="btn__nav" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/images/window.png" alt="Window">
                </a>
                <a href="<?php echo htmlspecialchars($androidDownload); ?>" class="btn__nav" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/images/android.png" alt="Android">
                </a>
                <a href="<?php echo htmlspecialchars($iosDownload); ?>" class="btn__nav" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/images/iphone.png" alt="Iphone">
                </a>
                <a href="<?php echo htmlspecialchars($javaDownload); ?>" class="btn__nav" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/images/java.png" alt="Java">
                </a>
            </div>
            <p class="recommend__nav">
                Tải Game phù hợp với phiên bản của bạn để trải nghiệm nhé.
            </p>
        </nav>