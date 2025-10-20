<?php
$activeNav = $activeNav ?? 'home';
?>
<div class="top-nav w-100 position-fixed">
    <div class="container d-flex w-100 h-100">
        <div class="logo position-relative h-100">
            <div class="wrap-logo position-absolute d-flex flex-column align-items-center">
                <a href="/"><img src="/assets/stms/imgs/logo.png" alt="" class="logo-img"></a>
            </div>
        </div>
        <div class="nav-bar position-relative">
            <img src="/assets/stms/imgs/menu/bg-menu-nav.png" alt="" class="position-absolute top-0">
            <ul class="main-nav d-flex h-100">
                <li class="d-flex justify-content-center align-items-center homepage<?= $activeNav === 'home' ? ' active' : '' ?>">
                    <a class="nav-item h-100<?= $activeNav === 'home' ? ' active' : '' ?>" href="/" target="_self" title="Trang chủ"> </a>
                </li>
                <li class="d-flex justify-content-center align-items-center news<?= $activeNav === 'news' ? ' active' : '' ?>">
                    <a class="nav-item h-100<?= $activeNav === 'news' ? ' active' : '' ?>" href="/tin-tuc" target="_self" title="Tin tức"> </a>
                </li>
                <li class="d-flex justify-content-center align-items-center hero-item<?= $activeNav === 'characters' ? ' active' : '' ?>">
                    <a class="nav-item h-100<?= $activeNav === 'characters' ? ' active' : '' ?>" href="/danh-sach-tuong" target="_self" title="Tướng"> </a>
                </li>
                <li class="d-flex justify-content-center align-items-center fruit">
                    <a class="nav-item h-100 d-flex align-items-center" href="#" target="_self" title="Trái Ác Quỷ" data-bs-toggle="dropdown">
                        <i class="dropdown-icon position-absolute"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><a href="/trai-ac-quy" target="_self" class="dropdown-item">Trái Ác Quỷ</a></li>
                        <li><a href="/trai-dung-hop" target="_self" class="dropdown-item">Trái Dung Hợp</a></li>
                    </ul>
                </li>
                <li class="d-flex justify-content-center align-items-center support">
                    <a class="nav-item h-100 d-flex align-items-center" href="#" target="_self" title="Hỗ trợ" data-bs-toggle="dropdown">
                        <i class="dropdown-icon position-absolute"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><a href="https://www.facebook.com/haitacmanhnhat" target="_blank" class="dropdown-item">Facebook</a></li>
                        <li><a href="https://discord.com/invite/pRQaVmUj78" target="_blank" class="dropdown-item">Discord</a></li>
                        <li><a href="https://zalo.me/g/snnzqo202" target="_blank" class="dropdown-item">Zalo</a></li>
                    </ul>
                </li>
                <li class="d-flex justify-content-center align-items-center community">
                    <a class="nav-item h-100 d-flex align-items-center" href="#" target="_self" title="Cộng Đồng" data-bs-toggle="dropdown">
                        <i class="dropdown-icon position-absolute"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li class="youtube"><a href="https://www.youtube.com/@haitacmanhnhat" target="_blank" class="dropdown-item">Youtube</a></li>
                        <li class="group"><a href="https://www.facebook.com/groups/dechehaitac" target="_blank" class="dropdown-item">Group cộng đồng</a></li>
                        <li class="tiktok"><a href="https://www.tiktok.com/@haitacmanhnhat" target="_blank" class="dropdown-item">Tiktok</a></li>
                        <li class="discord"><a href="https://discord.com/invite/pRQaVmUj78" target="_blank" class="dropdown-item">Discord</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="login">
            <div class="wrap-login position-absolute h-100">
                <div class="user-info h-100 d-flex align-items-center d-none">
                    <div class="btn-group">
                        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-user"></i>
                            <span class="display-name"></span>
                        </button>
                        <ul class="dropdown-menu">
                            <li class="dropdown-item d-flex align-items-center"><a href="/id"><i class="fa-solid fa-user"></i>Quản lý tài khoản</a></li>
                            <li class="dropdown-item d-flex align-items-center">
                                <a href="/qua-nap-web" class="d-flex justify-content-between">
                                    <i><span class="payment-unit">GEM</span><span class="display-balance">0</span></i>
                                    <button>Nạp</button>
                                </a>
                            </li>
                            <li class="dropdown-item d-flex align-items-center"><a href="/lich-su-nap"><i class="fa-solid fa-clock-rotate-left"></i>Lịch sử nạp</a></li>
                            <li class="dropdown-item d-flex align-items-center"><a href="/id/doi-mat-khau"><i class="fa-solid fa-lock-keyhole-open"></i>Đổi mật khẩu</a></li>
                            <li class="dropdown-item d-flex align-items-center"><a href="/"><i class="fa-light fa-right-from-bracket"></i>Đăng xuất</a></li>
                        </ul>
                    </div>
                </div>
                <a href="#" class="btn-login login-required" data-open-auth="login" data-redirect="/qua-nap-web"></a>
            </div>
        </div>
    </div>
</div>
