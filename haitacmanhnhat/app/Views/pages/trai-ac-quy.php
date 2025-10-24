<!-- Start Meta Chung -->
<?php
$pageTitle = 'Trái ác quỷ | Hải Tặc Mạnh Nhất';
$meta = [
    'viewport' => 'width=device-width, initial-scale=1.0',
    'og:title' => 'Trái ác quỷ | Hải Tặc Mạnh Nhất',
    'description' => 'Hải Tặc Mạnh Nhất – Game nhập vai chiến thuật chủ đề One Piece. Hóa thân biến hình - Mega Mall – đấu liên server cực gắt. Sẵn sàng chinh phục?',
    'og:image' => '/assets/imgs/600x315.jpg',
    'og:image:width' => '600',
    'og:image:height' => '315',
    'facebook-domain-verification' => '6bko4jl76it4vql0pwhs6bmeudp8bo',
    'link:shortcut_icon' => '/assets/imgs/32x32.png'
];
$bodyAttributes = 'class="wrapper-subpage overflow-y-auto"';
$pageHeadScripts[] = '/assets/js/data/devil-fruits-base-data.js';
$pageScripts[] = '/assets/js/pages/devil-fruits.js';
?>
<!-- End Meta Chung -->

<!-- Start Header Chung -->
<?php include __DIR__ . '/../partials/top-nav-mobile.php'; ?>
<div class="d-flex flex-column align-items-center w-100 position-relative" id="root"
    data-devil-fruit-source="base" data-devil-fruit-json="/assets/data/trai-ac-quy.json">
    <img alt="" class="logo-warning position-absolute" src="/assets/imgs/logo-warning.png" />
    <div class="wrap-login-mobile wrap-login position-absolute h-100">
        <div class="user-info h-100 d-flex align-items-center d-none">
            <div class="btn-group">
                <button aria-expanded="false" class="btn dropdown-toggle" data-bs-toggle="dropdown" type="button">
                    <i class="fa-solid fa-user"></i>
                    <span class="display-name"></span>
                </button>
                <ul class="dropdown-menu">
                    <li class="dropdown-item d-flex align-items-center"><a href="/id"><i class="fa-solid fa-user"></i>Quản lý tài khoản</a></li>
                    <li class="dropdown-item d-flex align-items-center">
                        <a class="d-flex justify-content-between" href="/qua-nap-web">
                            <i><span>GEM</span><span>0</span></i> <button>Nạp</button></a>
                    </li>
                    <li class="dropdown-item d-flex align-items-center"><a href="/lich-su-nap"><i class="fa-solid fa-clock-rotate-left"></i>Lịch sử nạp</a></li>
                    <li class="dropdown-item d-flex align-items-center"><a href="/id/doi-mat-khau"><i class="fa-solid fa-lock-keyhole-open"></i>Đổi mật khẩu</a></li>
                    <li class="dropdown-item d-flex align-items-center"><a href="/"><i class="fa-light fa-right-from-bracket"></i>Đăng xuất</a></li>
                </ul>
            </div>
        </div>
        <a class="btn-login login-required" data-open-auth="login" data-redirect="/qua-nap-web" href="#"></a>
    </div>
    <!-- End Header Chung -->

    <!-- Start Tab Menu Chung -->
    <div class="subpage-container wrapper-id devil-fruit">
        <div class="container h-100 position-relative">
            <div class="d-flex flex-column align-items-center">
                <h1 class="page-title">TRÁI ÁC QUỶ</h1>
                <div class="row wrapper-content w-100">
                    <div class="content p-0">
                        <div class="filter-box d-flex justify-content-center align-items-center">
                            <div class="filter-type-name d-flex align-items-center">
                                <h3 class="fw-bold mb-0 me-3">TÌM TRÁI</h3>
                                <div class="position-relative search-fruit">
                                    <input autocomplete="off" class="fst-italic text-search" placeholder="Tên Trái" type="text" />
                                    <i class="fa-light fa-magnifying-glass search-icon-fa"></i>
                                </div>
                            </div>
                            <div class="filter-type-attack d-flex align-items-center">
                                <h3 class="fw-bold mb-0 me-md-4">LOẠI</h3>
                                <ul class="d-flex flex-wrap">
                                    <li class="btn-search-devil">
                                        <a class="d-block w-100 h-100 btn-filter tat-ca active" data-effect="tat-ca" href="#"></a>
                                    </li>
                                    <li class="btn-search-devil">
                                        <a class="d-block w-100 h-100 btn-filter khong-che" data-effect="khong-che" href="#"></a>
                                    </li>
                                    <li class="btn-search-devil">
                                        <a class="d-block w-100 h-100 btn-filter giam-sat-thuong" data-effect="giam-sat-thuong" href="#"></a>
                                    </li>
                                    <li class="btn-search-devil">
                                        <a class="d-block w-100 h-100 btn-filter no-ban-dau" data-effect="no-ban-dau" href="#"></a>
                                    </li>
                                    <li class="btn-search-devil">
                                        <a class="d-block w-100 h-100 btn-filter sat-thuong" data-effect="sat-thuong" href="#"></a>
                                    </li>
                                    <li class="btn-search-devil">
                                        <a class="d-block w-100 h-100 btn-filter mien-dich" data-effect="mien-dich" href="#"></a>
                                    </li>
                                    <li class="btn-search-devil">
                                        <a class="d-block w-100 h-100 btn-filter tang-cuong" data-effect="tang-cuong" href="#"></a>
                                    </li>
                                    <li class="btn-search-devil">
                                        <a class="d-block w-100 h-100 btn-filter tra-lai" data-effect="tra-lai" href="#"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="wrapper-devil-fruit d-flex">
                            <div class="list-fruit">
                                <div class="wrapper-bg">
                                    <ul class="d-flex flex-wrap" id="fruit-list">
                                    </ul>
                                    <div id="pagination"></div>
                                </div>
                            </div>
                            <!-- End Tab Menu Chung -->
                            <div class="fruit-detail">
                                <div class="wrap-content position-relative">
                                    <div class="title position-absolute start-50">Trái ác quỷ</div>
                                    <div class="content">
                                        <div class="name"></div>
                                        <div class="thumb"></div>
                                        <div class="text-group d-flex">
                                            <span>Phẩm chất: </span>
                                            <div class="text-content quality"></div>
                                        </div>
                                        <div class="text-group d-flex">
                                            <span>Loại: </span>
                                            <div class="text-content effect"></div>
                                        </div>
                                        <div class="text-group">
                                            <span>Thuộc tính: </span>
                                            <div class="text-content property"></div>
                                        </div>
                                        <div class="text-group">
                                            <div class="text-content info"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
