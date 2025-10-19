<?php
declare(strict_types=1);

$leftMenu = [
    ['label' => 'Trang chủ', 'class' => 'menu-page-1'],
    ['label' => 'Tin tức', 'class' => 'menu-page-2'],
    ['label' => 'BXH', 'class' => 'menu-page-3'],
];

$socialLinks = [
    ['class' => 'facebook', 'label' => 'Facebook', 'href' => 'https://www.facebook.com/haitacmanhnhat'],
    ['class' => 'tiktok', 'label' => 'Tiktok', 'href' => 'https://www.tiktok.com/@haitacmanhnhat'],
    ['class' => 'youtube', 'label' => 'Youtube', 'href' => 'https://www.youtube.com/@haitacmanhnhat'],
    ['class' => 'group', 'label' => 'Group cộng đồng', 'href' => 'https://www.facebook.com/groups/dechehaitac'],
    ['class' => 'discord', 'label' => 'Discord', 'href' => 'https://discord.com/invite/pRQaVmUj78'],
    ['class' => 'zalo', 'label' => 'Zalo', 'href' => 'https://zalo.me/g/snnzqo202'],
];
?>
<div class="menu-fixed left position-fixed">
    <div class="left-menu position-absolute">
        <ul class="d-flex flex-column">
<?php foreach ($leftMenu as $index => $item): ?>
            <li class="<?= ht_attr($item['class'] . ($index === 0 ? ' active' : '')); ?>">
                <button type="button"><?= $index + 1; ?></button>
                <span><?= ht_attr($item['label']); ?></span>
            </li>
<?php endforeach; ?>
        </ul>
    </div>
</div>

<div class="menu-fixed right position-fixed">
    <div class="right-menu position-relative">
        <ul class="menu-group list-unstyled m-0 p-0">
            <li class="menu-item">
                <a href="#" class="link-download-client" title="Tải game">Tải game</a>
            </li>
            <li class="menu-item">
                <a href="/qua-nap-web" title="Nạp thẻ">Nạp thẻ</a>
            </li>
            <li class="menu-item">
                <a href="/tin-tuc/huong-dan-tai-va-cai-dat-game" title="Hướng dẫn tải">Hướng dẫn tải</a>
            </li>
            <li class="menu-item">
                <a href="/giftcode" title="Nhận code">Nhận code</a>
            </li>
            <li class="menu-item social">
                <div class="col-12 d-flex flex-wrap justify-content-center">
<?php foreach ($socialLinks as $link): ?>
                    <a href="<?= ht_attr($link['href']); ?>" target="_blank" rel="nofollow" class="<?= ht_attr($link['class']); ?>" title="<?= ht_attr($link['label']); ?>"><?= ht_attr($link['label']); ?></a>
<?php endforeach; ?>
                </div>
            </li>
        </ul>
        <button type="button" class="turn-in" aria-label="Thu gọn menu"></button>
        <button type="button" class="turn-out" aria-label="Mở menu"></button>
        <button type="button" class="turn-top" aria-label="Lên đầu trang"></button>
    </div>
</div>
