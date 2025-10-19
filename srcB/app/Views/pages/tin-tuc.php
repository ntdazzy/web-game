<?php
$dataset = $dataset ?? 'news';
$activeNav = $activeNav ?? 'news';
$pagination = $pagination ?? ['data' => []];
$items = $pagination['data'] ?? [];
$pageTitle = $pageTitle ?? 'Tin tức | Hải Tặc Mạnh Nhất';
$meta = $meta ?? ['og:title' => $pageTitle];
$bodyAttributes = $bodyAttributes ?? 'class="wrapper-subpage overflow-y-auto"';
$loginScriptPage = $loginScriptPage ?? 'tin-tuc.html';
$basePath = $basePath ?? '/tin-tuc';
$tabConfig = [
    'news' => ['label' => 'Tin tức', 'href' => '/tin-tuc.html'],
    'event' => ['label' => 'Sự kiện', 'href' => '/su-kien.html'],
    'update' => ['label' => 'Update', 'href' => '/update.html'],
];
?>
<?php include __DIR__ . '/../partials/top-nav-mobile.php'; ?>
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
    <div class="subpage-container wrapper-id post">
        <div class="container h-100 position-relative">
            <div class="d-flex flex-column align-items-center">
                <h1 class="page-title">Tin tức sự kiện</h1>
                <div class="listNews w-100">
                    <div class="tabs-post">
                        <div class="action d-flex">
                            <div class="btn-group d-flex gap-3">
                                <?php foreach ($tabConfig as $key => $tab): ?>
                                    <a class="<?= $key === $dataset ? 'active ' : '' ?><?= $key ?>"
                                       href="<?= htmlspecialchars($tab['href'], ENT_QUOTES) ?>">
                                        <?= htmlspecialchars($tab['label'], ENT_QUOTES) ?>
                                    </a>
                                <?php endforeach; ?>
                            </div>
                            <form class="search-lite search position-relative post" action="javascript:void(0);">
                                <input type="text" placeholder="Tìm kiếm" id="search" name="search" autocomplete="off">
                                <button type="submit" class="search-icon position-absolute"></button>
                            </form>
                        </div>
                        <ul class="posts-content d-flex flex-column gap-3">
                            <?php foreach ($items as $item): ?>
                                <?php
                                $itemSlug = $item['slug'] ?? '';
                                $itemUrl = $basePath . '/' . $itemSlug . '.html';
                                $thumbnail = $item['thumbnail'] ?? '';
                                if ($thumbnail && !str_starts_with($thumbnail, '/')) {
                                    $thumbnail = '/' . ltrim($thumbnail, '/');
                                }
                                ?>
                                <li>
                                    <a target="_self"
                                       href="<?= htmlspecialchars($itemUrl, ENT_QUOTES) ?>"
                                       rel=""
                                       class="title d-flex">
                                        <div class="thumbnail">
                                            <img src="<?= htmlspecialchars($thumbnail, ENT_QUOTES) ?>"
                                                 data-fallback-src="/assets/stms/imgs/post-item-example.png"
                                                 alt="<?= htmlspecialchars($item['title'] ?? '', ENT_QUOTES) ?>"
                                                 width="100%" height="100%">
                                        </div>
                                        <div class="post-item-content">
                                            <h3 class="d-flex justify-content-between mb-2">
                                                <div class="post-item-title d-flex align-items-center">
                                                    <span class="cat-name"><?= htmlspecialchars($tabConfig[$dataset]['label'], ENT_QUOTES) ?></span>
                                                    <p><?= htmlspecialchars($item['title'] ?? '', ENT_QUOTES) ?></p>
                                                </div>
                                                <?php if (!empty($item['created_at'])): ?>
                                                    <span class="time"><?= htmlspecialchars($item['created_at'], ENT_QUOTES) ?></span>
                                                <?php endif; ?>
                                            </h3>
                                            <?php if (!empty($item['summary'])): ?>
                                                <p class="text-content">
                                                    <?= htmlspecialchars($item['summary'], ENT_QUOTES) ?>
                                                </p>
                                            <?php endif; ?>
                                        </div>
                                    </a>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                        <?php if (($pagination['total_pages'] ?? 1) > 1): ?>
                            <div class="pagination d-flex justify-content-center mt-4">
                                <?php for ($i = 1; $i <= (int)$pagination['total_pages']; $i++): ?>
                                    <a href="<?= htmlspecialchars($tabConfig[$dataset]['href'], ENT_QUOTES) ?>?page=<?= $i ?>"
                                       class="<?= $i === (int)($pagination['page'] ?? 1) ? 'active' : '' ?>">
                                        <?= $i ?>
                                    </a>
                                <?php endfor; ?>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
