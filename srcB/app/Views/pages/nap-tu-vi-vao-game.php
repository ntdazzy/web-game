<?php
$pageTitle = 'Từ ví vào game | Hải Tặc Mạnh Nhất';
$meta = [
    'viewport' => 'width=device-width, initial-scale=1.0',
    'og:title' => 'Từ ví vào game | Hải Tặc Mạnh Nhất',
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
<h1 class="page-title">Từ ví vào game</h1>
<div class="payment w-100">
<ul class="payment-tab w-100">
<li class="link-to-payment"><a href="/nap-tien-vao-vi.html">Nạp tiền vào ví</a></li>
<li class="link-to-package"><a href="/qua-nap-web.html">Quà nạp web</a></li>
<li class="link-to-convert active"><a href="/nap-tu-vi-vao-game.html">Từ ví vào game</a></li>
</ul>
<div class="payment-userinfo w-100">
<ul>
<li><span class="uname-label">Tài khoản: </span><b class="display-name">Guess</b></li>
<li><span class="gem-label color-blue">GEM</span>: <b class="display-balance">0</b></li>
</ul>
</div>
<div class="link-to-history w-100 text-center"><a class="login-required" data-redirect="qua-nap-web.html" href="/lich-su-nap.html">Lịch sử nạp</a></div>
<div class="server-list w-100" id="select2-server-parent">
<select class="form-control select2 server" name="fserver">
<option value=""></option>
<option value="s33">S33</option><option value="s32">S32</option><option value="s31">S31</option><option value="s30">S30</option><option value="s29">S29</option><option value="s28">S28</option><option value="s27">S27</option><option value="s26">S26</option><option value="s25">S25</option><option value="s24">S24</option><option value="s23">S23</option><option value="s22">S22</option><option value="s21">S21</option><option value="s20">S20</option><option value="s19">S19</option><option value="s18">S18</option><option value="s17">S17</option><option value="s16">S16</option><option value="s15">S15</option><option value="s14">S14</option><option value="s13">S13</option><option value="s12">S12</option><option value="s11">S11</option><option value="s10">S10</option><option value="s9">S9</option><option value="s8">S8</option><option value="s7">S7</option><option value="s6">S6</option><option value="s5">S5</option><option value="s4">S4</option><option value="s3">S3</option><option value="s2">S2</option><option value="s1">S1</option> </select>
</div>
<div class="item-list item-convert-list w-100">
<label for="">Chọn giá trị</label>
<div class="item-list-slick">
<div class="item">
<a href="#">
<input name="famount" type="hidden" value="200"/>
<span class="top">VÀNG <b>200</b></span>
<span class="bot">GEM <b>200</b></span>
</a>
</div><div class="item">
<a href="#">
<input name="famount" type="hidden" value="1000"/>
<span class="top">VÀNG <b>1.000</b></span>
<span class="bot">GEM <b>1.000</b></span>
</a>
</div><div class="item">
<a href="#">
<input name="famount" type="hidden" value="2000"/>
<span class="top">VÀNG <b>2.000</b></span>
<span class="bot">GEM <b>2.000</b></span>
</a>
</div><div class="item">
<a href="#">
<input name="famount" type="hidden" value="5000"/>
<span class="top">VÀNG <b>5.000</b></span>
<span class="bot">GEM <b>5.000</b></span>
</a>
</div><div class="item">
<a href="#">
<input name="famount" type="hidden" value="10000"/>
<span class="top">VÀNG <b>10.000</b></span>
<span class="bot">GEM <b>10.000</b></span>
</a>
</div><div class="item">
<a href="#">
<input name="famount" type="hidden" value="20000"/>
<span class="top">VÀNG <b>20.000</b></span>
<span class="bot">GEM <b>20.000</b></span>
</a>
</div><div class="item">
<a href="#">
<input name="famount" type="hidden" value="30000"/>
<span class="top">VÀNG <b>30.000</b></span>
<span class="bot">GEM <b>30.000</b></span>
</a>
</div><div class="item">
<a href="#">
<input name="famount" type="hidden" value="50000"/>
<span class="top">VÀNG <b>50.000</b></span>
<span class="bot">GEM <b>50.000</b></span>
</a>
</div><div class="item">
<a href="#">
<input name="famount" type="hidden" value="100000"/>
<span class="top">VÀNG <b>100.000</b></span>
<span class="bot">GEM <b>100.000</b></span>
</a>
</div> </div>
</div>
<button class="submit form-control" name="fconvert" type="button">Xác nhận</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</div>


