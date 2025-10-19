<?php
$pageTitle = 'Đổi email | Hải Tặc Mạnh Nhất';
$meta = [
    'viewport' => 'width=device-width, initial-scale=1.0',
    'og:title' => 'Đổi email | Hải Tặc Mạnh Nhất',
    'description' => 'Hải Tặc Mạnh Nhất – Game nhập vai chiến thuật chủ đề One Piece. Hóa thân biến hình - Mega Mall – đấu liên server cực gắt. Sẵn sàng chinh phục?',
    'og:image' => '../assets/stms/imgs/600x315.jpg',
    'og:image:width' => '600',
    'og:image:height' => '315',
    'facebook-domain-verification' => '6bko4jl76it4vql0pwhs6bmeudp8bo',
    'link:shortcut_icon' => '../assets/stms/imgs/32x32.png'
];
$bodyAttributes = 'class="wrapper-subpage overflow-y-auto"';
?>

<?php include __DIR__ . '/../../partials/top-nav-mobile.php'; ?>
<div class="d-flex flex-column align-items-center w-100 position-relative" id="root">
<img alt="" class="logo-warning position-absolute" src="/assets/stms/imgs/logo-warning.png"/>
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
<a class="btn-login login-required" data-redirect="../qua-nap-web.html" href="javascript:void(0)"></a>
</div>
<div class="subpage-container wrapper-id">
<div class="container h-100 position-relative">
<div class="d-flex flex-column align-items-center">
<h1 class="page-title">Tài khoản</h1>
<div class="row content">
<div class="col-3 wrap-left-side">
<ul class="left-side">
<li><a href="/id.html">Thông tin tài khoản</a></li>
<li><a href="/id/doi-mat-khau.html">Đổi mật khẩu</a></li>
<li class="active"><a href="/id/doi-email.html">Đổi email</a></li>
</ul>
</div> <div class="col-9 user-box">
<div class="breadcrumb d-flex flex-column">
<h4 class="text-blue">Đổi email</h4>
</div>
<div class="col-sm-8 col-12">
<form class="form-change-email" method="POST">
<input name="stepChangeEmail" type="hidden"/>
<div class="mb-3 old-email">
<label class="form-label">Email cũ</label>
<input autocomplete="on" class="form-control" name="oldemail" placeholder="Nhập email cũ" type="email"/>
</div>
<div class="mb-3">
<label class="form-label">Email mới</label>
<input autocomplete="on" class="form-control" name="email" placeholder="Nhập email mới" type="email"/>
</div>
<div class="mb-3 code-confirm d-none">
<label class="form-label">Mã xác thực</label>
<input autocomplete="off" class="form-control" name="code" placeholder="Nhập mã xác thực" type="text"/>
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
</div>
</div>

</div>


