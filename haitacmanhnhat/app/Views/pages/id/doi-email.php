<!-- Start Meta Chung -->
<?php
$pageTitle = 'Đổi email | Hải Tặc Mạnh Nhất';
$meta = [
    'viewport' => 'width=device-width, initial-scale=1.0',
    'og:title' => 'Đổi email | Hải Tặc Mạnh Nhất',
    'description' => 'Hải Tặc Mạnh Nhất – Game nhập vai chiến thuật chủ đề One Piece. Hóa thân biến hình - Mega Mall – đấu liên server cực gắt. Sẵn sàng chinh phục?',
    'og:image' => '../assets/imgs/600x315.jpg',
    'og:image:width' => '600',
    'og:image:height' => '315',
    'facebook-domain-verification' => '6bko4jl76it4vql0pwhs6bmeudp8bo',
    'link:shortcut_icon' => '../assets/imgs/32x32.png'
];
$bodyAttributes = 'class="wrapper-subpage overflow-y-auto"';
?>
<!-- End Meta Chung -->

<!-- Start Header Chung -->
<?php include __DIR__ . '/../../partials/top-nav-mobile.php'; ?>
<div class="d-flex flex-column align-items-center w-100 position-relative" id="root">
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
    <div class="subpage-container wrapper-id">
        <div class="container h-100 position-relative">
            <div class="d-flex flex-column align-items-center">
                <h1 class="page-title">Tài khoản</h1>
                <div class="row content">
                    <div class="col-3 wrap-left-side">
                        <ul class="left-side">
                            <li><a href="/id">Thông tin tài khoản</a></li>
                            <li><a href="/id/doi-mat-khau">Đổi mật khẩu</a></li>
                            <li class="active"><a href="/id/doi-email">Đổi email</a></li>
                        </ul>
                    </div>
                    <!-- End Tab Menu Chung -->
                    <div class="col-9 user-box">
                        <div class="breadcrumb d-flex flex-column">
                            <h4 class="text-blue">Đổi email</h4>
                        </div>
                        <div class="col-sm-8 col-12">
                            <form class="form-change-email" method="POST">
                                <?= csrf_field('id_change_email') ?>
                                <input name="stepChangeEmail" type="hidden" />
                                <div class="mb-3 old-email">
                                    <label class="form-label">Email cũ</label>
                                    <input autocomplete="on" class="form-control" name="oldemail" placeholder="Nhập email cũ" type="email" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Email mới</label>
                                    <input autocomplete="on" class="form-control" name="email" placeholder="Nhập email mới" type="email" />
                                </div>
                                <div class="mb-3 code-confirm d-none">
                                    <label class="form-label">Mã xác thực</label>
                                    <input autocomplete="off" class="form-control" name="code" placeholder="Nhập mã xác thực" type="text" />
                                </div>
                                <button class="btn btn-secondary" type="submit"><i class="fa-light fa-paper-plane"></i> Nhận mã xác thực qua email mới</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
