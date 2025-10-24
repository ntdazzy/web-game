<!-- Start Meta Chung -->
<?php
$pageTitle = 'Quà nạp web | Hải Tặc Mạnh Nhất';
$meta = [
    'viewport' => 'width=device-width, initial-scale=1.0',
    'og:title' => 'Quà nạp web | Hải Tặc Mạnh Nhất',
    'description' => 'Hải Tặc Mạnh Nhất – Game nhập vai chiến thuật chủ đề One Piece. Hóa thân biến hình - Mega Mall – đấu liên server cực gắt. Sẵn sàng chinh phục?',
    'og:image' => '/assets/imgs/600x315.jpg',
    'og:image:width' => '600',
    'og:image:height' => '315',
    'facebook-domain-verification' => '6bko4jl76it4vql0pwhs6bmeudp8bo',
    'link:shortcut_icon' => '/assets/imgs/32x32.png'
];
$bodyAttributes = 'class="wrapper-subpage overflow-y-auto"';
?>
<!-- End Meta Chung -->

<!-- Start Header Chung -->
<?php include __DIR__ . '/../partials/top-nav-mobile.php'; ?>
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
    <div class="subpage-container wrapper-id wrapper-payment">
        <div class="container h-100 position-relative">
            <div class="d-flex flex-column align-items-center">
                <h1 class="page-title">Quà nạp web</h1>
                <div class="payment w-100">
                    <ul class="payment-tab w-100">
                        <li class="link-to-payment"><a href="/nap-tien-vao-vi">Nạp tiền vào ví</a></li>
                        <li class="link-to-package active"><a href="/qua-nap-web">Quà nạp web</a></li>
                        <li class="link-to-convert"><a href="/nap-tu-vi-vao-game">Nạp từ ví vào game</a></li>
                    </ul>
                    <!-- End Tab Menu Chung -->
                    <div class="payment-userinfo w-100">
                        <ul>
                            <li><span class="uname-label">Tài khoản: </span><b class="display-name">Guess</b></li>
                            <li><span class="gem-label color-blue">GEM</span>: <b class="display-balance">0</b></li>
                        </ul>
                    </div>
                    <div class="link-to-history w-100 text-center"><a class="login-required" data-open-auth="login" data-redirect="/qua-nap-web" href="/lich-su-nap">Lịch sử nạp</a></div>
                    <div class="server-list w-100 position-relative">
                        <select class="form-control payment-server" id="server-package" name="fserver">
                            <option value=""></option>
                            <option value="s33">S33</option>
                            <option value="s32">S32</option>
                            <option value="s31">S31</option>
                            <option value="s30">S30</option>
                            <option value="s29">S29</option>
                            <option value="s28">S28</option>
                            <option value="s27">S27</option>
                            <option value="s26">S26</option>
                            <option value="s25">S25</option>
                            <option value="s24">S24</option>
                            <option value="s23">S23</option>
                            <option value="s22">S22</option>
                            <option value="s21">S21</option>
                            <option value="s20">S20</option>
                            <option value="s19">S19</option>
                            <option value="s18">S18</option>
                            <option value="s17">S17</option>
                            <option value="s16">S16</option>
                            <option value="s15">S15</option>
                            <option value="s14">S14</option>
                            <option value="s13">S13</option>
                            <option value="s12">S12</option>
                            <option value="s11">S11</option>
                            <option value="s10">S10</option>
                            <option value="s9">S9</option>
                            <option value="s8">S8</option>
                            <option value="s7">S7</option>
                            <option value="s6">S6</option>
                            <option value="s5">S5</option>
                            <option value="s4">S4</option>
                            <option value="s3">S3</option>
                            <option value="s2">S2</option>
                            <option value="s1">S1</option>
                        </select>
                    </div>
                    <div class="package-list w-100">
                        <label for="">Chọn gói <a class="package-rule" href="javascript: void(0)" target="_blank">[ <u>Thể lệ</u> ]</a></label>
                        <div class="package-container">
                            <div class="package-item package-item-limit-1" id="package-item-2">
                                <div class="left">
                                    <input name="fpackage" type="hidden" value="2" />
                                    <a class="view" href="#">Chi tiết</a>
                                    <img alt="Gói nạp ngày" class="img" src="/assets/imgs/payment/item/package-1-ngay-nami.png" title="Gói nạp ngày" />
                                    <ul class="item-list-1">
                                        <li><img alt="500 đá năng lượng" src="/assets/imgs/payment/item/item-500-da-nang-luong.png" title="500 đá năng lượng" /><span>2</span></li>
                                        <li><img alt="Bình Rượu Nort Blue" src="/assets/imgs/payment/item/item-binh-ruou-nort-blue.png" title="Bình Rượu Nort Blue" /><span>5</span></li>
                                        <li><img alt="Túi N.Liệu bá khí thường" src="/assets/imgs/payment/item/item-nguyen-lieu-ba-khi-thuong.png" title="Túi N.Liệu bá khí thường" /><span>2</span></li>
                                        <li><img alt="100 Tử hồn" src="/assets/imgs/payment/item/item-tu-hon.png" title="100 Tử hồn" /><span>2</span></li>
                                        <li><img alt="Túi K.cương cổ đại" src="/assets/imgs/payment/item/item-tui-kim-cuong-co-dai.png" title="Túi K.cương cổ đại" /><span>2</span></li>
                                    </ul>
                                    <h3 class="name">Gói nạp ngày</h3>
                                    <div class="cost">
                                        GEM <b>200</b>
                                    </div>
                                </div>
                                <div class="right">
                                    <a class="close" href="#">Đóng</a>
                                    <div class="scroll-package-item" id="scroll-package-item-2">
                                        <div class="item">
                                            <p><img alt="500 đá năng lượng" src="/assets/imgs/payment/item/item-500-da-nang-luong.png" title="500 đá năng lượng" /><span>2</span></p>
                                            <h6>500 đá năng lượng</h6>
                                        </div>
                                        <div class="item">
                                            <p><img alt="Bình Rượu Nort Blue" src="/assets/imgs/payment/item/item-binh-ruou-nort-blue.png" title="Bình Rượu Nort Blue" /><span>5</span></p>
                                            <h6>Bình Rượu Nort Blue</h6>
                                        </div>
                                        <div class="item">
                                            <p><img alt="Túi N.Liệu bá khí thường" src="/assets/imgs/payment/item/item-nguyen-lieu-ba-khi-thuong.png" title="Túi N.Liệu bá khí thường" /><span>2</span></p>
                                            <h6>Túi N.Liệu bá khí thường</h6>
                                        </div>
                                        <div class="item">
                                            <p><img alt="100 Tử hồn" src="/assets/imgs/payment/item/item-tu-hon.png" title="100 Tử hồn" /><span>2</span></p>
                                            <h6>100 Tử hồn</h6>
                                        </div>
                                        <div class="item">
                                            <p><img alt="Túi K.cương cổ đại" src="/assets/imgs/payment/item/item-tui-kim-cuong-co-dai.png" title="Túi K.cương cổ đại" /><span>2</span></p>
                                            <h6>Túi K.cương cổ đại</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="package-item package-item-limit-1" id="package-item-3">
                                <div class="left">
                                    <input name="fpackage" type="hidden" value="3" />
                                    <a class="view" href="#">Chi tiết</a>
                                    <img alt="Gói nạp ngày (loại 2)" class="img" src="/assets/imgs/payment/item/package-1-ngay-boa.png" title="Gói nạp ngày (loại 2)" />
                                    <ul class="item-list-1">
                                        <li><img alt="Mũi Tên TY" src="/assets/imgs/payment/item/item-mui-ten-ty.png" title="Mũi Tên TY" /><span>2</span></li>
                                        <li><img alt="Túi nuôi cá AllBlue random" src="/assets/imgs/payment/item/item-tui-nuoi-ca-allblue.png" title="Túi nuôi cá AllBlue random" /><span>10</span></li>
                                        <li><img alt="300 Đá N.tố" src="/assets/imgs/payment/item/item-300-da-nguyen-to.png" title="300 Đá N.tố" /><span>5</span></li>
                                        <li><img alt="125 đá khắc ấn" src="/assets/imgs/payment/item/item-da-khac-an.png" title="125 đá khắc ấn" /><span>2</span></li>
                                        <li><img alt="Mảnh Phiến Poneglyph" src="/assets/imgs/payment/item/item-manh-phien-poneglyph.png" title="Mảnh Phiến Poneglyph" /><span>25</span></li>
                                    </ul>
                                    <h3 class="name">Gói nạp ngày (loại 2)</h3>
                                    <div class="cost">
                                        GEM <b>200</b>
                                    </div>
                                </div>
                                <div class="right">
                                    <a class="close" href="#">Đóng</a>
                                    <div class="scroll-package-item" id="scroll-package-item-3">
                                        <div class="item">
                                            <p><img alt="Mũi Tên TY" src="/assets/imgs/payment/item/item-mui-ten-ty.png" title="Mũi Tên TY" /><span>2</span></p>
                                            <h6>Mũi Tên TY</h6>
                                        </div>
                                        <div class="item">
                                            <p><img alt="Túi nuôi cá AllBlue random" src="/assets/imgs/payment/item/item-tui-nuoi-ca-allblue.png" title="Túi nuôi cá AllBlue random" /><span>10</span></p>
                                            <h6>Túi nuôi cá AllBlue random</h6>
                                        </div>
                                        <div class="item">
                                            <p><img alt="300 Đá N.tố" src="/assets/imgs/payment/item/item-300-da-nguyen-to.png" title="300 Đá N.tố" /><span>5</span></p>
                                            <h6>300 Đá N.tố</h6>
                                        </div>
                                        <div class="item">
                                            <p><img alt="125 đá khắc ấn" src="/assets/imgs/payment/item/item-da-khac-an.png" title="125 đá khắc ấn" /><span>2</span></p>
                                            <h6>125 đá khắc ấn</h6>
                                        </div>
                                        <div class="item">
                                            <p><img alt="Mảnh Phiến Poneglyph" src="/assets/imgs/payment/item/item-manh-phien-poneglyph.png" title="Mảnh Phiến Poneglyph" /><span>25</span></p>
                                            <h6>Mảnh Phiến Poneglyph</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="package-item package-item-limit-7" id="package-item-1">
                                <div class="left">
                                    <input name="fpackage" type="hidden" value="1" />
                                    <a class="view" href="#">Chi tiết</a>
                                    <img alt="Gói nạp 7 ngày-Râu Trắng" class="img" src="/assets/imgs/payment/item/package-7-ngay-rau-trang.png" title="Gói nạp 7 ngày-Râu Trắng" />
                                    <ul class="item-list-1">
                                        <li><img alt="Mảnh Lệnh Treo Thưởng Râu Trắng" src="/assets/imgs/payment/item/item-manh-lenh-treo-thuong-rau-trang.png" title="Mảnh Lệnh Treo Thưởng Râu Trắng" /><span>5</span></li>
                                        <li><img alt="Thẻ Nâng Cấp Hóa Thân" src="/assets/imgs/payment/item/item-the-nang-cap-hoa-than.png" title="Thẻ Nâng Cấp Hóa Thân" /><span>1</span></li>
                                        <li><img alt="Thủy tinh trong rừng" src="/assets/imgs/payment/item/item-thuy-tinh-trong-rung.png" title="Thủy tinh trong rừng" /><span>5</span></li>
                                        <li><img alt="Tinh linh thạch lớn" src="/assets/imgs/payment/item/item-tin-linh-thach-lon.png" title="Tinh linh thạch lớn" /><span>5</span></li>
                                        <li><img alt="200 vạn beri" src="/assets/imgs/payment/item/item-200-van-beri.png" title="200 vạn beri" /><span>5</span></li>
                                        <li><img alt="Dấu Đỏ" src="/assets/imgs/payment/item/item-dau-do.png" title="Dấu Đỏ" /><span>5</span></li>
                                    </ul>
                                    <h3 class="name">Gói nạp 7 ngày-Râu Trắng</h3>
                                    <div class="cost">
                                        GEM <b>1.500</b>
                                    </div>
                                </div>
                                <div class="right">
                                    <a class="close" href="#">Đóng</a>
                                    <div class="scroll-package-item" id="scroll-package-item-1">
                                        <div class="item">
                                            <p><img alt="Mảnh Lệnh Treo Thưởng Râu Trắng" src="/assets/imgs/payment/item/item-manh-lenh-treo-thuong-rau-trang.png" title="Mảnh Lệnh Treo Thưởng Râu Trắng" /><span>5</span></p>
                                            <h6>Mảnh Lệnh Treo Thưởng Râu Trắng</h6>
                                        </div>
                                        <div class="item">
                                            <p><img alt="Thẻ Nâng Cấp Hóa Thân" src="/assets/imgs/payment/item/item-the-nang-cap-hoa-than.png" title="Thẻ Nâng Cấp Hóa Thân" /><span>1</span></p>
                                            <h6>Thẻ Nâng Cấp Hóa Thân</h6>
                                        </div>
                                        <div class="item">
                                            <p><img alt="Thủy tinh trong rừng" src="/assets/imgs/payment/item/item-thuy-tinh-trong-rung.png" title="Thủy tinh trong rừng" /><span>5</span></p>
                                            <h6>Thủy tinh trong rừng</h6>
                                        </div>
                                        <div class="item">
                                            <p><img alt="Tinh linh thạch lớn" src="/assets/imgs/payment/item/item-tin-linh-thach-lon.png" title="Tinh linh thạch lớn" /><span>5</span></p>
                                            <h6>Tinh linh thạch lớn</h6>
                                        </div>
                                        <div class="item">
                                            <p><img alt="200 vạn beri" src="/assets/imgs/payment/item/item-200-van-beri.png" title="200 vạn beri" /><span>5</span></p>
                                            <h6>200 vạn beri</h6>
                                        </div>
                                        <div class="item">
                                            <p><img alt="Dấu Đỏ" src="/assets/imgs/payment/item/item-dau-do.png" title="Dấu Đỏ" /><span>5</span></p>
                                            <h6>Dấu Đỏ</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="package-item package-item-limit-30" id="package-item-5">
                                <div class="left">
                                    <input name="fpackage" type="hidden" value="5" />
                                    <a class="view" href="#">Chi tiết</a>
                                    <img alt="Gói nạp 30 ngày-Aramaki" class="img" src="/assets/imgs/payment/item/package-30-ngay-Aramaki.png" title="Gói nạp 30 ngày-Aramaki" />
                                    <ul class="item-list-1">
                                        <li><img alt="Mảnh Rương Đô Đốc Hải Quân" src="/assets/imgs/payment/item/item-manh-ruong-do-doc-hai-quan.png" title="Mảnh Rương Đô Đốc Hải Quân" /><span>10</span></li>
                                        <li><img alt="Mảnh L.Bài thú cưỡi Chopper" src="/assets/imgs/payment/item/item-manh-lenh-bai-chopper.png" title="Mảnh L.Bài thú cưỡi Chopper" /><span>1</span></li>
                                        <li><img alt="125 đá khắc ấn" src="/assets/imgs/payment/item/item-da-khac-an.png" title="125 đá khắc ấn" /><span>5</span></li>
                                        <li><img alt="500 vạn beri" src="/assets/imgs/payment/item/item-500-van-beri.png" title="500 vạn beri" /><span>3</span></li>
                                        <li><img alt="500 đá năng lượng" src="/assets/imgs/payment/item/item-500-da-nang-luong.png" title="500 đá năng lượng" /><span>5</span></li>
                                        <li><img alt="Ốc Sên Truyền Tin" src="/assets/imgs/payment/item/item-oc-sen-truyen-tin.png" title="Ốc Sên Truyền Tin" /><span>1</span></li>
                                    </ul>
                                    <h3 class="name">Gói nạp 30 ngày-Aramaki</h3>
                                    <div class="cost">
                                        GEM <b>6.000</b>
                                    </div>
                                </div>
                                <div class="right">
                                    <a class="close" href="#">Đóng</a>
                                    <div class="scroll-package-item" id="scroll-package-item-5">
                                        <div class="item">
                                            <p><img alt="Mảnh Rương Đô Đốc Hải Quân" src="/assets/imgs/payment/item/item-manh-ruong-do-doc-hai-quan.png" title="Mảnh Rương Đô Đốc Hải Quân" /><span>10</span></p>
                                            <h6>Mảnh Rương Đô Đốc Hải Quân</h6>
                                        </div>
                                        <div class="item">
                                            <p><img alt="Mảnh L.Bài thú cưỡi Chopper" src="/assets/imgs/payment/item/item-manh-lenh-bai-chopper.png" title="Mảnh L.Bài thú cưỡi Chopper" /><span>1</span></p>
                                            <h6>Mảnh L.Bài thú cưỡi Chopper</h6>
                                        </div>
                                        <div class="item">
                                            <p><img alt="125 đá khắc ấn" src="/assets/imgs/payment/item/item-da-khac-an.png" title="125 đá khắc ấn" /><span>5</span></p>
                                            <h6>125 đá khắc ấn</h6>
                                        </div>
                                        <div class="item">
                                            <p><img alt="500 vạn beri" src="/assets/imgs/payment/item/item-500-van-beri.png" title="500 vạn beri" /><span>3</span></p>
                                            <h6>500 vạn beri</h6>
                                        </div>
                                        <div class="item">
                                            <p><img alt="500 đá năng lượng" src="/assets/imgs/payment/item/item-500-da-nang-luong.png" title="500 đá năng lượng" /><span>5</span></p>
                                            <h6>500 đá năng lượng</h6>
                                        </div>
                                        <div class="item">
                                            <p><img alt="Ốc Sên Truyền Tin" src="/assets/imgs/payment/item/item-oc-sen-truyen-tin.png" title="Ốc Sên Truyền Tin" /><span>1</span></p>
                                            <h6>Ốc Sên Truyền Tin</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="submit form-control" name="fpackage" type="button">Xác nhận</button>
                </div>
            </div>
        </div>
    </div>
</div>
