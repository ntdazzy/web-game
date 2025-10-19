<?php
$activeNav = $activeNav ?? '';
$navClass = static function (string $key, string $base = '') use ($activeNav): string {
    $classes = trim($base . ' ' . ($activeNav === $key ? 'active' : ''));
    return $classes !== '' ? $classes : '';
};
?>
<div class="top-nav-mobile w-100 position-fixed d-none">
    <div class="wrap-logo position-relative">
        <a class="logo position-absolute" href="/"></a>
    </div>
    <ul class="btn-group d-flex align-items-center position-relative">
        <li>
            <a class="btn-pay" href="/qua-nap-web.html" target="_self" title="Nạp Thẻ"></a>
        </li>
        <li>
            <a class="btn-download link-download-client" href="#" target="_self" title="Tải game"></a>
        </li>
        <li class="position-relative">
            <button class="btn swap-menu-id"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mobileMenu"
                    aria-expanded="false"
                    aria-controls="mobileMenu"></button>

            <ul class="collapse menu-mobile position-absolute" id="mobileMenu">
                <li class="nav-item">
                    <a class="nav-link homepage<?= $activeNav === 'home' ? ' active' : '' ?>"
                       href="/"
                       title="Trang chủ"
                       data-bs-target="#1"
                       aria-expanded="false"
                       aria-controls="1">Trang chủ </a>
                </li>
                <li class="nav-item<?= $activeNav === 'news' ? ' active' : '' ?>">
                    <a class="nav-link news<?= $activeNav === 'news' ? ' active' : '' ?>"
                       href="/tin-tuc.html"
                       title="Tin tức"
                       data-bs-target="#2"
                       aria-expanded="false"
                       aria-controls="2">Tin tức </a>
                </li>
                <li class="nav-item<?= $activeNav === 'characters' ? ' active' : '' ?>">
                    <a class="nav-link hero-item<?= $activeNav === 'characters' ? ' active' : '' ?>"
                       href="/danh-sach-tuong.html"
                       title="Tướng"
                       data-bs-target="#3"
                       aria-expanded="false"
                       aria-controls="3">Tướng </a>
                </li>
                <li class="menu-mobile-bottom">
                    <a class="btn btn-link position-relative fruit"
                       href="#"
                       title="Trái Ác Quỷ"
                       data-bs-toggle="collapse"
                       data-bs-target="#10"
                       aria-expanded="false"
                       aria-controls="10">
                        Trái Ác Quỷ<i class="dropdown-icon position-absolute"></i>
                    </a>
                    <ul class="collapse social row show collapse-normal" id="10">
                        <li class="d-flex justify-content-center col-4">
                            <a class="dropdown-item" href="/trai-ac-quy.html" target="_self">Trái Ác Quỷ</a>
                        </li>
                        <li class="d-flex justify-content-center col-4">
                            <a class="dropdown-item" href="/trai-dung-hop.html" target="_self">Trái Dung Hợp</a>
                        </li>
                    </ul>
                </li>
                <li class="menu-mobile-bottom">
                    <a class="btn btn-link position-relative collapsed support"
                       href="#"
                       title="Hỗ trợ"
                       data-bs-toggle="collapse"
                       data-bs-target="#20"
                       aria-expanded="false"
                       aria-controls="20">
                        Hỗ trợ<i class="dropdown-icon position-absolute"></i>
                    </a>
                    <ul class="collapse social row collapse-normal" id="20">
                        <li class="d-flex justify-content-center col-4">
                            <a class="dropdown-item" href="https://www.facebook.com/haitacmanhnhat" target="_blank">Facebook</a>
                        </li>
                        <li class="d-flex justify-content-center col-4">
                            <a class="dropdown-item" href="https://discord.com/invite/pRQaVmUj78" target="_blank">Discord</a>
                        </li>
                        <li class="d-flex justify-content-center col-4">
                            <a class="dropdown-item" href="https://zalo.me/g/snnzqo202" target="_blank">Zalo</a>
                        </li>
                    </ul>
                </li>
                <li class="menu-mobile-bottom">
                    <a class="btn btn-link position-relative community"
                       href="#"
                       title="Cộng Đồng">
                        Cộng Đồng<i class="dropdown-icon position-absolute"></i>
                    </a>
                    <ul class="collapse social row show collapse-normal collapse-community" id="30">
                        <li class="d-flex justify-content-center col-4 youtube">
                            <a class="dropdown-item" href="https://www.youtube.com/@haitacmanhnhat" target="_blank">Youtube</a>
                        </li>
                        <li class="d-flex justify-content-center col-4 group">
                            <a class="dropdown-item" href="https://www.facebook.com/groups/dechehaitac" target="_blank">Group cộng đồng</a>
                        </li>
                        <li class="d-flex justify-content-center col-4 tiktok">
                            <a class="dropdown-item" href="https://www.tiktok.com/@haitacmanhnhat" target="_blank">Tiktok</a>
                        </li>
                        <li class="d-flex justify-content-center col-4 discord">
                            <a class="dropdown-item" href="https://discord.com/invite/pRQaVmUj78" target="_blank">Discord</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</div>
