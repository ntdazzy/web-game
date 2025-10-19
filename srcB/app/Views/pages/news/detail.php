<?php
$article = $article ?? [];
$hotNews = $hotNews ?? [];
$basePath = $basePath ?? '/tin-tuc';
$activeNav = $activeNav ?? 'news';
$articleTitle = $article['title'] ?? '';
$articleDate = $article['created_at'] ?? '';
$articleContent = $article['content_html'] ?? '';
$dataset = $dataset ?? 'news';
$labelConfig = [
    'news' => ['breadcrumb' => 'Tin tức', 'heading' => 'Tin tức sự kiện'],
    'event' => ['breadcrumb' => 'Sự kiện', 'heading' => 'Tin tức sự kiện'],
    'update' => ['breadcrumb' => 'Update', 'heading' => 'Tin tức sự kiện'],
];
$labels = $labelConfig[$dataset] ?? $labelConfig['news'];
$breadcrumbs = [
    ['url' => '/', 'label' => 'Trang chủ'],
    ['url' => $basePath . '.html', 'label' => $labels['breadcrumb']],
    ['url' => null, 'label' => $articleTitle],
];
?>
<?php include __DIR__ . '/../../partials/top-nav-mobile.php'; ?>
<div id="root" class="d-flex flex-column align-items-center w-100 position-relative">
    <img src="/assets/stms/imgs/logo-warning.png" alt="" class="logo-warning position-absolute">
    <div class="wrap-login-mobile wrap-login position-absolute h-100">
        <div class="user-info h-100 d-flex align-items-center d-none">
            <div class="btn-group">
                <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-user"></i>
                    <span class="display-name"></span>
                </button>
                <ul class="dropdown-menu">
                    <li class="dropdown-item d-flex align-items-center"><a href="/id.html"><i class="fa-solid fa-user"></i>Quản lý tài khoản</a></li>
                    <li class="dropdown-item d-flex align-items-center">
                        <a href="/qua-nap-web.html" class="d-flex justify-content-between">
                            <i><span>GEM</span><span>0</span></i> <button>Nạp</button>
                        </a>
                    </li>
                    <li class="dropdown-item d-flex align-items-center"><a href="/lich-su-nap.html"><i class="fa-solid fa-clock-rotate-left"></i>Lịch sử nạp</a></li>
                    <li class="dropdown-item d-flex align-items-center"><a href="/id/doi-mat-khau.html"><i class="fa-solid fa-lock-keyhole-open"></i>Đổi mật khẩu</a></li>
                    <li class="dropdown-item d-flex align-items-center"><a href="/"><i class="fa-light fa-right-from-bracket"></i>Đăng xuất</a></li>
                </ul>
            </div>
        </div>
        <a href="javascript:void(0)" class="btn-login login-required" data-redirect="qua-nap-web.html"></a>
    </div>

    <div class="subpage-container wrapper-id post-detail">
        <div class="container wrapper-post-detail">
            <div class="d-flex flex-column align-items-center">
                <h1 class="page-title"><?= htmlspecialchars($labels['heading'], ENT_QUOTES) ?></h1>
                <div class="content d-flex flex-wrap aos-init aos-animate">
                    <div class="col-8 post-data">
                        <div class="breadcrums">
                            <dl>
                                <?php foreach ($breadcrumbs as $crumb): ?>
                                    <dt>
                                        <?php if (!empty($crumb['url'])): ?>
                                            <a href="<?= htmlspecialchars($crumb['url'], ENT_QUOTES) ?>"><?= htmlspecialchars($crumb['label'], ENT_QUOTES) ?></a>
                                        <?php else: ?>
                                            <?= htmlspecialchars($crumb['label'], ENT_QUOTES) ?>
                                        <?php endif; ?>
                                    </dt>
                                    <?php if ($crumb !== end($breadcrumbs)): ?>
                                        <dt> / </dt>
                                    <?php endif; ?>
                                <?php endforeach; ?>
                            </dl>
                        </div>
                        <div class="post-title d-flex flex-column align-items-center mb-4">
                            <h1 class="mb-1"><?= htmlspecialchars($articleTitle, ENT_QUOTES) ?></h1>
                            <?php if ($articleDate): ?>
                                <span class="time">Tin tức - <?= htmlspecialchars($articleDate, ENT_QUOTES) ?></span>
                            <?php endif; ?>
                        </div>
                        <div class="post-content">
                            <?= $articleContent ?>
                        </div>
                    </div>
                    <div class="col-4 d-flex flex-column gap-2 hot-news-wrapper align-items-center" data-aos="fade-up">
                        <h1 class="hot-news-heading mb-2"></h1>
                        <?php foreach ($hotNews as $hotItem): ?>
                            <?php
                            $hotUrl = $basePath . '/' . ($hotItem['slug'] ?? '') . '.html';
                            $hotThumb = $hotItem['thumbnail'] ?? '';
                            if ($hotThumb && !str_starts_with($hotThumb, '/')) {
                                $hotThumb = '/' . ltrim($hotThumb, '/');
                            }
                            ?>
                            <div class="hot-news-box d-flex flex-column mb-2">
                                <a class="d-flex align-items-center justify-content-center wrap-img"
                                   href="<?= htmlspecialchars($hotUrl, ENT_QUOTES) ?>"
                                   target="_self"
                                   title="<?= htmlspecialchars($hotItem['title'] ?? '', ENT_QUOTES) ?>">
                                    <img src="<?= htmlspecialchars($hotThumb, ENT_QUOTES) ?>"
                                         alt="<?= htmlspecialchars($hotItem['title'] ?? '', ENT_QUOTES) ?>"
                                         data-fallback-src="/assets/stms/imgs/post-item-example.png">
                                </a>
                                <div class="d-flex flex-column justify-content-center h-100 title">
                                    <a class="text-white"
                                       href="<?= htmlspecialchars($hotUrl, ENT_QUOTES) ?>"
                                       target="_self"
                                       title="<?= htmlspecialchars($hotItem['title'] ?? '', ENT_QUOTES) ?>">
                                        <?= htmlspecialchars($hotItem['title'] ?? '', ENT_QUOTES) ?>
                                    </a>
                                    <?php if (!empty($hotItem['created_at'])): ?>
                                        <div class="datetime text-white"><?= htmlspecialchars($hotItem['created_at'], ENT_QUOTES) ?></div>
                                    <?php endif; ?>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
