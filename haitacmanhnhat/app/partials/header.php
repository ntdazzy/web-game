<?php
declare(strict_types=1);

$navItems = include PATHS['data'] . '/nav.php';
$navActive = $page['nav_active'] ?? null;
$logoSrc = asset_url('assets/img/logo.png');
$menuBg = asset_url('assets/img/menu/bg-menu-nav.png');
$supportLinks = [
    [
        'label' => 'Facebook',
        'url' => 'https://www.facebook.com/haitacmanhnhat',
        'class' => 'facebook',
    ],
    [
        'label' => 'Youtube',
        'url' => 'https://www.youtube.com/@haitacmanhnhat',
        'class' => 'youtube',
    ],
    [
        'label' => 'Group cộng đồng',
        'url' => 'https://www.facebook.com/groups/dechehaitac',
        'class' => 'group',
    ],
    [
        'label' => 'Tiktok',
        'url' => 'https://www.tiktok.com/@haitacmanhnhat',
        'class' => 'tiktok',
    ],
    [
        'label' => 'Discord',
        'url' => 'https://discord.com/invite/pRQaVmUj78',
        'class' => 'discord',
    ],
    [
        'label' => 'Zalo',
        'url' => 'https://zalo.me/g/snnzqo202',
        'class' => 'zalo',
    ],
];
?>
<div class="top-nav w-100 position-fixed">
    <div class="container d-flex w-100 h-100">
        <div class="logo position-relative h-100">
            <div class="wrap-logo position-absolute d-flex flex-column align-items-center">
                <a href="<?= ht_attr(url_for()); ?>">
                    <img src="<?= ht_attr($logoSrc); ?>" alt="Hải Tặc Mạnh Nhất" class="logo-img">
                </a>
            </div>
        </div>
        <div class="nav-bar position-relative">
            <img src="<?= ht_attr($menuBg); ?>" alt="" class="position-absolute top-0">
            <ul class="main-nav d-flex h-100">
<?php foreach ($navItems as $item):
    $itemActive = $navActive === ($item['key'] ?? null);
    $baseClass = 'd-flex justify-content-center align-items-center ' . ($item['class'] ?? '');
    $linkClass = 'nav-item h-100';
    if ($itemActive) {
        $linkClass .= ' active';
    }
    $hasChildren = !empty($item['children']);
    $href = $hasChildren ? '#' : url_for($item['url'] ?? '');
    $target = !empty($item['external']) ? '_blank' : '_self';
    ?>
                <li class="<?= ht_attr(ht_nav_class(trim($baseClass), $itemActive)); ?>">
                    <a
                        class="<?= ht_attr($linkClass . ($hasChildren ? ' d-flex align-items-center' : '')); ?>"
                        href="<?= ht_attr($href); ?>"
                        target="<?= ht_attr($target); ?>"
                        title="<?= ht_attr($item['label'] ?? ''); ?>"
                        <?= $hasChildren ? 'data-bs-toggle="dropdown"' : ''; ?>
                    >
                        <?= $hasChildren ? '<i class="dropdown-icon position-absolute"></i>' : ''; ?>
                        <?= !$hasChildren ? ht_attr($item['label'] ?? '') : ''; ?>
                    </a>
<?php if ($hasChildren): ?>
                    <ul class="dropdown-menu dropdown-menu-end">
<?php foreach ($item['children'] as $child):
        $childHref = $child['url'] ?? '#';
        $childHref = !empty($child['external']) ? $childHref : url_for($childHref);
        $childTarget = !empty($child['external']) ? '_blank' : '_self';
        ?>
                        <li class="<?= ht_attr($child['class'] ?? ''); ?>">
                            <a href="<?= ht_attr($childHref); ?>" target="<?= ht_attr($childTarget); ?>" class="dropdown-item <?= ht_attr($child['class'] ?? ''); ?>">
                                <?= ht_attr($child['label'] ?? ''); ?>
                            </a>
                        </li>
<?php endforeach; ?>
                    </ul>
<?php endif; ?>
                </li>
<?php endforeach; ?>
            </ul>
        </div>
        <div class="login">
            <div class="wrap-login position-absolute h-100">
                <div class="user-info h-100 d-flex align-items-center d-none">
                    <div class="btn-group">
                        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i class="fa-solid fa-user"></i>
                            <span class="display-name"></span>
                        </button>
                        <ul class="dropdown-menu">
                            <li class="dropdown-item d-flex align-items-center"><a href="<?= ht_attr(url_for('id')); ?>"><i class="fa-solid fa-user"></i>Quản lý tài khoản</a></li>
                            <li class="dropdown-item d-flex align-items-center">
                                <a href="<?= ht_attr(url_for('qua-nap-web')); ?>" class="d-flex justify-content-between">
                                    <i><span class="payment-unit">GEM</span><span class="display-balance">0</span></i> <button>Nạp</button></a>
                            </li>
                            <li class="dropdown-item d-flex align-items-center"><a href="<?= ht_attr(url_for('lich-su-nap')); ?>"><i class="fa-solid fa-clock-rotate-left"></i>Lịch sử nạp</a></li>
                            <li class="dropdown-item d-flex align-items-center"><a href="<?= ht_attr(url_for('id/doi-mat-khau')); ?>"><i class="fa-solid fa-lock-keyhole-open"></i>Đổi mật khẩu</a></li>
                            <li class="dropdown-item d-flex align-items-center"><a href="<?= ht_attr(url_for()); ?>"><i class="fa-light fa-right-from-bracket"></i>Đăng xuất</a></li>
                        </ul>
                    </div>
                </div>
                <a href="javascript:void(0)" class="btn-login login-required" data-redirect="<?= ht_attr(url_for('qua-nap-web')); ?>"></a>
            </div>
        </div>
        <div class="support d-flex align-items-center">
            <ul class="d-flex flex-column align-items-center gap-3">
<?php foreach ($supportLinks as $link): ?>
                <li class="<?= ht_attr($link['class']); ?>">
                    <a href="<?= ht_attr($link['url']); ?>" title="<?= ht_attr($link['label']); ?>" target="_blank"><?= ht_attr($link['label']); ?></a>
                </li>
<?php endforeach; ?>
            </ul>
        </div>
        <div class="login-mobile position-relative">
            <button class="btn swap-menu-id" type="button" data-bs-toggle="collapse" data-bs-target="#mobileMenu"
                aria-expanded="false" aria-controls="mobileMenu">
            </button>
            <ul class="collapse menu-mobile position-absolute" id="mobileMenu">
<?php foreach ($navItems as $item):
    $itemActive = $navActive === ($item['key'] ?? null);
    $hasChildren = !empty($item['children']);
    $mobileLinkClass = 'nav-link ' . ($item['class'] ?? '');
    if ($itemActive) {
        $mobileLinkClass .= ' active';
    }
    ?>
                <li class="<?= ht_attr(ht_nav_class('nav-item', $itemActive)); ?>">
                    <a class="<?= ht_attr($mobileLinkClass); ?>"
                        href="<?= ht_attr($hasChildren ? '#' : url_for($item['url'] ?? '')); ?>"
                        title="<?= ht_attr($item['label'] ?? ''); ?>"
                        <?= $hasChildren ? 'data-bs-toggle="collapse" data-bs-target="#collapse-' . ht_attr($item['key']) . '" aria-expanded="false" aria-controls="collapse-' . ht_attr($item['key']) . '"' : ''; ?>
                    >
                        <?= ht_attr($item['label'] ?? ''); ?>
                    </a>
<?php if ($hasChildren): ?>
                    <ul class="collapse social row collapse-normal<?= ($item['key'] ?? '') === 'community' ? ' collapse-community show' : ' show'; ?>" id="collapse-<?= ht_attr($item['key']); ?>">
<?php foreach ($item['children'] as $child):
        $childHref = $child['url'] ?? '#';
        $childHref = !empty($child['external']) ? $childHref : url_for($childHref);
        $childTarget = !empty($child['external']) ? '_blank' : '_self';
        ?>
                        <li class="d-flex justify-content-center col-4 <?= ht_attr($child['class'] ?? ''); ?>">
                            <a href="<?= ht_attr($childHref); ?>" target="<?= ht_attr($childTarget); ?>" class="dropdown-item <?= ht_attr($child['class'] ?? ''); ?>"><?= ht_attr($child['label'] ?? ''); ?></a>
                        </li>
<?php endforeach; ?>
                    </ul>
<?php endif; ?>
                </li>
<?php endforeach; ?>
            </ul>
        </div>
    </div>
</div>
