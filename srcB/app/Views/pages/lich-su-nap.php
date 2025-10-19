<?php
$pageTitle = 'Lịch sử nạp | Hải Tặc Mạnh Nhất';
$meta = [
    'viewport' => 'width=device-width, initial-scale=1.0',
    'og:title' => 'Lịch sử nạp | Hải Tặc Mạnh Nhất',
    'description' => 'Hải Tặc Mạnh Nhất – Game nhập vai chiến thuật chủ đề One Piece. Hóa thân biến hình - Mega Mall – đấu liên server cực gắt. Sẵn sàng chinh phục?',
    'og:image' => '/assets/stms/imgs/600x315.jpg',
    'og:image:width' => '600',
    'og:image:height' => '315',
    'facebook-domain-verification' => '6bko4jl76it4vql0pwhs6bmeudp8bo',
    'link:shortcut_icon' => '/assets/stms/imgs/32x32.png'
];
$bodyAttributes = 'class="wrapper-subpage overflow-y-auto"';
?>

<?php include __DIR__ . '/../partials/top-nav-mobile.php'; ?>
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
<a class="btn-login login-required" data-redirect="qua-nap-web.html" href="javascript:void(0)"></a>
</div>
<div class="subpage-container wrapper-id wrapper-history">
<div class="container h-100 position-relative">
<div class="d-flex flex-column align-items-center">
<h1 class="page-title">Lịch sử nạp</h1>
<div class="history w-100">
<div class="form-history w-100">
<div class="row">
<div class="form-item col-xxl-6 col-xl-6 col-lg-6 col-md-12">
<input class="daterange-picker form-control" name="fdatetime" placeholder="Thời gian" type="text"/>
</div>
<div class="form-item col-xxl-3 col-xl-3 col-lg-3 col-md-6 position-relative" id="select2-type-parent">
<select class="form-control select2 type" name="ftype">
<option value="pay">Nạp tiền vào ví</option>
<option value="package">Quà nạp web</option>
<option value="convert">Nạp từ ví vào game</option>
</select>
</div>
<div class="form-item col-xxl-3 col-xl-3 col-lg-3 col-md-6">
<button class="form-control" name="fhistory" type="button">Tìm kiếm</button>
</div>
</div>
</div>
<div class="table-responsive">
<table class="table table-borderless" id="table-history">
<tbody>
<tr class="text-center">
<td>Vui lòng nhập dữ liệu cần tìm kiếm</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
<script type="text/javascript">
        var packages = {"package-2":{"name":"G\u00f3i n\u1ea1p ng\u00e0y","price":200},"package-3":{"name":"G\u00f3i n\u1ea1p ng\u00e0y (lo\u1ea1i 2)","price":200},"package-1":{"name":"G\u00f3i n\u1ea1p 7 ng\u00e0y-R\u00e2u Tr\u1eafng","price":1500},"package-5":{"name":"G\u00f3i n\u1ea1p 30 ng\u00e0y-Aramaki","price":6000}}</script>
</div>
</div>
</div>

</div>


