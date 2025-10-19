<?php
$pageTitle = 'Thông tin tài khoản | Hải Tặc Mạnh Nhất';
$meta = [
    'viewport' => 'width=device-width, initial-scale=1.0',
    'og:title' => 'Thông tin tài khoản | Hải Tặc Mạnh Nhất',
    'description' => 'Hải Tặc Mạnh Nhất – Game nhập vai chiến thuật chủ đề One Piece. Hóa thân biến hình - Mega Mall – đấu liên server cực gắt. Sẵn sàng chinh phục?',
    'og:image' => '/st-ms/imgs/600x315.jpg',
    'og:image:width' => '600',
    'og:image:height' => '315',
    'facebook-domain-verification' => '6bko4jl76it4vql0pwhs6bmeudp8bo',
    'link:shortcut_icon' => '/st-ms/imgs/32x32.png'
];
$bodyAttributes = 'class="wrapper-subpage overflow-y-auto"';
?>

<?php include __DIR__ . '/../partials/top-nav-mobile.php'; ?>
<div class="d-flex flex-column align-items-center w-100 position-relative" id="root">
<img alt="" class="logo-warning position-absolute" src="/st-ms/imgs/logo-warning.png"/>
<div class="wrap-login-mobile wrap-login position-absolute h-100">
<div class="user-info h-100 d-flex align-items-center d-none">
<div class="btn-group">
<button aria-expanded="false" class="btn dropdown-toggle" data-bs-toggle="dropdown" type="button">
<i class="fa-solid fa-user"></i>
<span class="display-name"></span>
</button>
<ul class="dropdown-menu">
<li class="dropdown-item d-flex align-items-center"><a href="/id.html"><i class="fa-solid fa-user"></i>Quản lý tài khoản</a></li>
<li class="dropdown-item d-flex align-items-center">
<a class="d-flex justify-content-between" href="/qua-nap-web.html">
<i><span>GEM</span><span>0</span></i> <button>Nạp</button></a>
</li>
<li class="dropdown-item d-flex align-items-center"><a href="/lich-su-nap.html"><i class="fa-solid fa-clock-rotate-left"></i>Lịch sử nạp</a></li>
<li class="dropdown-item d-flex align-items-center"><a href="/id/doi-mat-khau.html"><i class="fa-solid fa-lock-keyhole-open"></i>Đổi mật khẩu</a></li>
<li class="dropdown-item d-flex align-items-center"><a href="/"><i class="fa-light fa-right-from-bracket"></i>Đăng xuất</a></li>
</ul>
</div>
</div>
<a class="btn-login login-required" data-redirect="qua-nap-web.html" href="javascript:void(0)"></a>
</div>
<div class="subpage-container wrapper-id">
<div class="container h-100 position-relative">
<div class="d-flex flex-column align-items-center">
<h1 class="page-title">Tài khoản</h1>
<div class="row content">
<div class="col-3 wrap-left-side">
<ul class="left-side">
<li class="active"><a href="/id.html">Thông tin tài khoản</a></li>
<li><a href="/id/doi-mat-khau.html">Đổi mật khẩu</a></li>
<li><a href="/id/doi-email.html">Đổi email</a></li>
</ul>
</div> <div class="col-9 user-box">
<div class="breadcrumb d-flex flex-column">
<h4 class="text-blue">Thông tin tài khoản</h4>
<p>Bạn có thể cập nhật các thông tin công khai tại đây, hệ thống sẽ tự động kết nối với các tài
                            khoản game khác</p>
<div class="alert alert-warning mb-1 user-info-warning" role="alert">
                            Để bảo mật tài khoản của bạn, hãy sớm cập nhật đầy đủ thông tin cá nhân để đảm bảo quyền lợi cho bạn!
                        </div>
</div>
<div class="user-table">
<div class="row align-items-center info-row">
<div class="col-4 label-text">Hình đại diện</div>
<div class="col-6 value-text">
<img alt="Avatar" class="avatar-img" src="/st-ms/imgs/avatar.png"/>
</div>
<div class="col-2 text-center p-0">
<!-- <a href="#" class="action-link">Cập nhật</a> -->
</div>
</div>
<div class="row align-items-center info-row">
<div class="col-4 label-text d-flex align-items-center"><i class="fa-light fa-signature"></i>Họ tên</div>
<div class="col-6 value-text display-name">Guess</div>
<div class="col-2 text-center p-0">
<a class="action-link" href="/id/cap-nhat-tai-khoan.html">Cập nhật</a>
</div>
</div>
<div class="row align-items-center info-row">
<div class="col-4 label-text d-flex align-items-center"><i class="fa-light fa-calendar-days"></i>Sinh nhật</div>
<div class="col-6 value-text display-birthday"></div>
<div class="col-2 text-center p-0">
<a class="action-link" href="/id/cap-nhat-tai-khoan.html">Cập nhật</a>
</div>
</div>
<div class="row align-items-center info-row">
<div class="col-4 label-text d-flex align-items-center"><i class="fa-light fa-venus-mars"></i>Giới tính</div>
<div class="col-6 value-text display-sex"></div>
<div class="col-2 text-center p-0">
<a class="action-link" href="/id/cap-nhat-tai-khoan.html">Cập nhật</a>
</div>
</div>
<div class="row align-items-center info-row">
<div class="col-4 label-text d-flex align-items-center"><i class="fa-light fa-envelope"></i>Email</div>
<div class="col-6 value-text display-email">Guess</div>
<div class="col-2 text-center p-0">
<a class="action-link" href="/id/cap-nhat-email.html">Cập nhật</a>
</div>
</div>
<div class="row align-items-center info-row">
<div class="col-4 label-text d-flex align-items-center"><i class="fa-light fa-phone"></i>Số điện thoại</div>
<div class="col-6 value-text display-phone"></div>
<div class="col-2 text-center p-0">
<a class="action-link" href="/id/dang-nhap.html">Cập nhật</a>
</div>
</div>
<!-- <div class="row align-items-center info-row">
                            <div class="col-4 label-text d-flex align-items-center"><i class="fa-light fa-address-card"></i>Căn cước công dân</div>
                            <div class="col-6 value-text display-cardid">225527955</div>
                            <div class="col-2 text-center p-0">
                                <a href="#" class="action-link">Cập nhật</a>
                            </div>
                        </div> -->
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


