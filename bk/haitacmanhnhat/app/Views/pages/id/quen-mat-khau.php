<!-- Start Meta Chung -->
<?php
$pageTitle = 'Quên mật khẩu | Hải Tặc Mạnh Nhất';
$meta = [
    'viewport' => 'width=device-width, initial-scale=1.0',
    'og:title' => 'Quên mật khẩu | Hải Tặc Mạnh Nhất',
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
                    <div class="col-3">
                        <ul class="left-side">
                            <li><a href="/id/dang-nhap">Đăng nhập</a></li>
                            <li><a href="/id/dang-ky">Đăng ký</a></li>
                            <li class="active"><a href="/id/quen-mat-khau">Quên mật khẩu</a></li>
                        </ul>
                    </div>
                    <!-- End Tab Menu Chung -->

                    <div class="col-9 user-box">
                        <div class="breadcrumb d-flex flex-column">
                            <h4 class="text-blue">Quên mật khẩu</h4>
                        </div>
                        <div class="col-12 col-sm-6 wrap-form">
                            <form class="form-forget-password" method="POST">
                                <?= csrf_field('id_forgot_password') ?>
                                <div class="mb-3">
                                    <label class="form-label" for="formFile">Tên tài khoản</label>
                                    <input autocomplete="on" class="form-control" name="username" placeholder="Nhập tên tài khoản" type="text" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="formFile">Email đã đăng ký</label>
                                    <input autocomplete="on" class="form-control" name="email" placeholder="Nhập email đã đăng ký" type="email" />
                                </div>
                                <button class="btn btn-secondary mb-3" type="submit">Xác nhận</button>
                                <div class="mb-2">
                                    <a class="text-primary" href="/id/dat-lai-mat-khau">Tôi đã nhận được mã Đặt lại mật khẩu</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
