<?php
$pageTitle = 'Nạp tiền vào ví | Hải Tặc Mạnh Nhất';
$meta = [
    'viewport' => 'width=device-width, initial-scale=1.0',
    'og:title' => 'Nạp tiền vào ví | Hải Tặc Mạnh Nhất',
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
<div class="subpage-container wrapper-id wrapper-payment">
<div class="container h-100 position-relative">
<div class="d-flex flex-column align-items-center">
<h1 class="page-title">Nạp tiền vào ví</h1>
<div class="payment w-100">
<ul class="payment-tab w-100">
<li class="link-to-payment active"><a href="/nap-tien-vao-vi.html">Nạp tiền vào ví</a></li>
<li class="link-to-package"><a href="/qua-nap-web.html">Quà nạp web</a></li>
<li class="link-to-convert"><a href="/nap-tu-vi-vao-game.html">Nạp từ ví vào game</a></li>
</ul>
<div class="payment-userinfo w-100">
<ul>
<li><span class="uname-label">Tài khoản: </span><b class="display-name">Guess</b></li>
<li><span class="gem-label color-blue">GEM</span>: <b class="display-balance">0</b></li>
</ul>
</div>
<div class="link-to-history w-100 text-center"><a class="login-required" data-redirect="qua-nap-web.html" href="/lich-su-nap.html">Lịch sử nạp</a></div>
<div class="item-list w-100">
<label for="">Chọn hình thức</label>
<div class="item-list-payment-type">
<a class="item-type active" data-bonus="0.2" data-rate="50" href="javascript: void(0)">
<input name="ftype" type="hidden" value="1"/>
<div class="img img-type-1" style="background-image: url('/assets/stms/imgs/payment/icon-payment-atm-2.png');"></div>
<h6>ATM</h6>
<span class="ribbon">KM 20%</span>
</a><a class="item-type" data-bonus="0.2" data-rate="50" href="javascript: void(0)">
<input name="ftype" type="hidden" value="2"/>
<div class="img img-type-2" style="background-image: url('/assets/stms/imgs/payment/icon-payment-wallet-2.png');"></div>
<h6>Ví</h6>
<span class="ribbon">KM 20%</span>
</a><a class="item-type" data-bonus="0.1" data-rate="50" href="javascript: void(0)">
<input name="ftype" type="hidden" value="3"/>
<div class="img img-type-3" style="background-image: url('/assets/stms/imgs/payment/icon-payment-momo-2.png');"></div>
<h6>Ví MoMo</h6>
<span class="ribbon">KM 10%</span>
</a> </div>
</div>
<div class="item-list w-100">
<label for="">Chọn giá trị</label>
<div class="item-list-slick">
<div class="item">
<a href="javascript: void(0)">
<input name="famount" type="hidden" value="10000"/>
<span class="top">GEM <b>200</b></span>
<span class="middle"><b>+ 40</b> BONUS</span>
<span class="bot">10.000 <u>đ</u></span>
</a>
</div><div class="item">
<a href="javascript: void(0)">
<input name="famount" type="hidden" value="20000"/>
<span class="top">GEM <b>400</b></span>
<span class="middle"><b>+ 80</b> BONUS</span>
<span class="bot">20.000 <u>đ</u></span>
</a>
</div><div class="item">
<a href="javascript: void(0)">
<input name="famount" type="hidden" value="50000"/>
<span class="top">GEM <b>1.000</b></span>
<span class="middle"><b>+ 200</b> BONUS</span>
<span class="bot">50.000 <u>đ</u></span>
</a>
</div><div class="item">
<a href="javascript: void(0)">
<input name="famount" type="hidden" value="100000"/>
<span class="top">GEM <b>2.000</b></span>
<span class="middle"><b>+ 400</b> BONUS</span>
<span class="bot">100.000 <u>đ</u></span>
</a>
</div><div class="item">
<a href="javascript: void(0)">
<input name="famount" type="hidden" value="200000"/>
<span class="top">GEM <b>4.000</b></span>
<span class="middle"><b>+ 800</b> BONUS</span>
<span class="bot">200.000 <u>đ</u></span>
</a>
</div><div class="item">
<a href="javascript: void(0)">
<input name="famount" type="hidden" value="500000"/>
<span class="top">GEM <b>10.000</b></span>
<span class="middle"><b>+ 2.000</b> BONUS</span>
<span class="bot">500.000 <u>đ</u></span>
</a>
</div><div class="item">
<a href="javascript: void(0)">
<input name="famount" type="hidden" value="1000000"/>
<span class="top">GEM <b>20.000</b></span>
<span class="middle"><b>+ 4.000</b> BONUS</span>
<span class="bot">1.000.000 <u>đ</u></span>
</a>
</div><div class="item">
<a href="javascript: void(0)">
<input name="famount" type="hidden" value="2000000"/>
<span class="top">GEM <b>40.000</b></span>
<span class="middle"><b>+ 8.000</b> BONUS</span>
<span class="bot">2.000.000 <u>đ</u></span>
</a>
</div><div class="item">
<a href="javascript: void(0)">
<input name="famount" type="hidden" value="3000000"/>
<span class="top">GEM <b>60.000</b></span>
<span class="middle"><b>+ 12.000</b> BONUS</span>
<span class="bot">3.000.000 <u>đ</u></span>
</a>
</div><div class="item">
<a href="javascript: void(0)">
<input name="famount" type="hidden" value="5000000"/>
<span class="top">GEM <b>100.000</b></span>
<span class="middle"><b>+ 20.000</b> BONUS</span>
<span class="bot">5.000.000 <u>đ</u></span>
</a>
</div><div class="item">
<a href="javascript: void(0)">
<input name="famount" type="hidden" value="10000000"/>
<span class="top">GEM <b>200.000</b></span>
<span class="middle"><b>+ 40.000</b> BONUS</span>
<span class="bot">10.000.000 <u>đ</u></span>
</a>
</div>
</div>
</div>
<button class="submit form-control" name="fpay" type="button">Xác nhận</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</div>


