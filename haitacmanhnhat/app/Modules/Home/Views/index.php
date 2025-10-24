<!-- Start Header Chung -->
<?php include __DIR__ . '/../../../Views/partials/top-nav-mobile.php'; ?>
<div class="d-flex flex-column align-items-center w-100 position-relative" id="root">
    <img alt="" class="logo-warning position-absolute" src="/assets/stms/imgs/logo-warning.png" />
    <div class="wrap-login-mobile wrap-login position-absolute h-100">
        <div class="user-info h-100 d-flex align-items-center d-none">
            <div class="btn-group">
                <button aria-expanded="false" class="btn dropdown-toggle" data-bs-toggle="dropdown" type="button">
                    <i class="fa-solid fa-user"></i>
                    <span class="display-name"></span>
                </button>
                <ul class="dropdown-menu">
                    <li class="dropdown-item d-flex align-items-center"><a href="/id"><i
                                class="fa-solid fa-user"></i>Quản lý tài khoản</a></li>
                    <li class="dropdown-item d-flex align-items-center">
                        <a class="d-flex justify-content-between" href="/qua-nap-web">
                            <i><span>GEM</span><span>0</span></i> <button>Nạp</button></a>
                    </li>
                    <li class="dropdown-item d-flex align-items-center"><a href="/lich-su-nap"><i
                                class="fa-solid fa-clock-rotate-left"></i>Lịch sử nạp</a></li>
                    <li class="dropdown-item d-flex align-items-center"><a href="/id/doi-mat-khau"><i
                                class="fa-solid fa-lock-keyhole-open"></i>Đổi mật khẩu</a></li>
                    <li class="dropdown-item d-flex align-items-center"><a href="/"><i
                                class="fa-light fa-right-from-bracket"></i>Đăng xuất</a></li>
                </ul>
            </div>
        </div>
        <a class="btn-login login-required" data-open-auth="login" data-redirect="/qua-nap-web" href="#"></a>
    </div>
    <!-- End Header Chung -->
    <div class="wrapper-page w-100 position-relative landing-hero">
        <div class="page page-1 position-relative">
            <?php if (!empty($heroVideo['src'])): ?>
                <video class="bg-video w-100 h-100 position-absolute landing-hero__background"
                    autoplay
                    muted
                    loop
                    playsinline
                    preload="auto"
                    poster="<?= htmlspecialchars($heroVideo['poster'] ?? ($heroBackground['src'] ?? '/assets/images/background.webp'), ENT_QUOTES) ?>">
                    <source src="<?= htmlspecialchars($heroVideo['src'], ENT_QUOTES) ?>"
                        type="<?= htmlspecialchars($heroVideo['type'] ?? 'video/mp4', ENT_QUOTES) ?>">
                    <img src="<?= htmlspecialchars($heroBackground['src'] ?? '/assets/images/background.webp', ENT_QUOTES) ?>"
                        alt="<?= htmlspecialchars($heroBackground['alt'] ?? 'Hải Tặc Mạnh Nhất background', ENT_QUOTES) ?>"
                        loading="eager">
                </video>
            <?php else: ?>
                <img src="<?= htmlspecialchars($heroBackground['src'] ?? '/assets/images/background.webp', ENT_QUOTES) ?>"
                    alt="<?= htmlspecialchars($heroBackground['alt'] ?? 'Hải Tặc Mạnh Nhất background', ENT_QUOTES) ?>"
                    class="bg-image w-100 h-100 position-absolute landing-hero__background"
                    data-fallback-src="<?= htmlspecialchars($heroBackground['fallback'] ?? '/assets/images/background.png', ENT_QUOTES) ?>"
                    data-lazy-exclude="true">
            <?php endif; ?>
            <div class="btn-group position-absolute d-flex landing-hero__cta-group">
                <a class="btn-download link-download-client landing-hero__cta-button" href="#" title="Tải game"></a>
                <div class="btn-action-group d-flex flex-column landing-hero__support-links">
                    <a class="support-dowload" href="/tin-tuc/huong-dan-tai-va-cai-dat-game"
                        title="Hướng dẫn tải">Hướng dẫn tải</a>
                    <a class="code" href="/giftcode" title="Nhận code">Nhận code</a>
                </div>
                <a class="btn-pay landing-hero__cta-button" href="/qua-nap-web" title="Nạp thẻ"></a>
            </div>
        </div>
        <div class="page page-2 d-flex align-items-center flex-column">
            <div class="title container d-flex flex-column align-items-center aos-init aos-animate" data-aos="fade-down"
                data-aos-anchor-placement="top-bottom" data-aos-duration="900" data-aos-offset="0"
                data-aos-once="false">
                <img alt="" src="/assets/stms/imgs/page2/title-2.png" />
            </div>
            <div class="content d-flex aos-init aos-animate" data-aos="fade-down" data-aos-anchor-placement="top-bottom"
                data-aos-duration="900" data-aos-offset="0" data-aos-once="false">
                <div class="slide carousel" id="slideHome">
                    <div class="carousel h-100" data-bs-ride="carousel" id="slideHome">
                        <div class="carousel-indicators slide-pc">
                            <button aria-current="true" aria-label="S32" class="" data-bs-slide-to="0"
                                data-bs-target="#slideHome" type="button"></button>
                            <button aria-current="true" aria-label="EV2" class="active" data-bs-slide-to="1"
                                data-bs-target="#slideHome" type="button"></button>
                            <button aria-current="true" aria-label="VGC" class="" data-bs-slide-to="2"
                                data-bs-target="#slideHome" type="button"></button>
                        </div>
                        <div class="carousel-inner h-100 slide-pc">
                            <div class="carousel-item">
                                <a href="/tin-tuc/10h-11-10-khai-mo-may-chu-s32-177" target="_self" title="S32">
                                    <img alt="S32" class="d-block w-100 h-100"
                                        data-fallback-src="/assets/stms/imgs/page2/slides/slide.png"
                                        src="/assets/stms/files/uploads/images/Banner/Mainsite%20PC%20527x465/527x465(71).jpg" />
                                </a>
                            </div>
                            <div class="carousel-item active">
                                <a href="/tin-tuc/su-kien-tuan-2-thang-10-2025-195" target="_self" title="EV2">
                                    <img alt="EV2" class="d-block w-100 h-100"
                                        data-fallback-src="/assets/stms/imgs/page2/slides/slide.png"
                                        src="/assets/stms/files/uploads/images/Banner/Mainsite%20PC%20527x465/527x465(73).jpg" />
                                </a>
                            </div>
                            <div class="carousel-item">
                                <a href="/tin-tuc/vuong-gia-chien-lan-2-197" target="_self" title="VGC">
                                    <img alt="VGC" class="d-block w-100 h-100"
                                        data-fallback-src="/assets/stms/imgs/page2/slides/slide.png"
                                        src="/assets/stms/files/uploads/images/Banner/Mainsite%20PC%20527x465/527x465(74).jpg" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slide carousel" id="slideHomeMobile">
                    <div class="carousel h-100" data-bs-ride="carousel" id="slideHomeMobile">
                        <div class="carousel-indicators slide-mobile">
                            <button aria-current="true" aria-label="S32" class="" data-bs-slide-to="0"
                                data-bs-target="#slideHomeMobile" type="button"></button>
                            <button aria-current="true" aria-label="EV2" class="active" data-bs-slide-to="1"
                                data-bs-target="#slideHomeMobile" type="button"></button>
                            <button aria-current="true" aria-label="VGC" class="" data-bs-slide-to="2"
                                data-bs-target="#slideHomeMobile" type="button"></button>
                        </div>
                        <div class="carousel-inner h-100 slide-mobile">
                            <div class="carousel-item">
                                <a href="/tin-tuc/10h-11-10-khai-mo-may-chu-s32-177" target="_self" title="S32">
                                    <img alt="S32" class="d-block w-100 h-100"
                                        data-fallback-src="/assets/stms/imgs/page2/slides/slide-mobile.png"
                                        src="/assets/stms/files/uploads/images/Banner/Mainsite%20Tablet%20521x387/521x387(15).jpg" />
                                </a>
                            </div>
                            <div class="carousel-item active">
                                <a href="/tin-tuc/su-kien-tuan-2-thang-10-2025-195" target="_self" title="EV2">
                                    <img alt="EV2" class="d-block w-100 h-100"
                                        data-fallback-src="/assets/stms/imgs/page2/slides/slide-mobile.png"
                                        src="/assets/stms/files/uploads/images/Banner/Mainsite%20Tablet%20521x387/521x387(16).jpg" />
                                </a>
                            </div>
                            <div class="carousel-item">
                                <a href="/tin-tuc/vuong-gia-chien-lan-2-197" target="_self" title="VGC">
                                    <img alt="VGC" class="d-block w-100 h-100"
                                        data-fallback-src="/assets/stms/imgs/page2/slides/slide-mobile.png"
                                        src="/assets/stms/files/uploads/images/Banner/Mainsite%20Tablet%20521x387/521x387(17).jpg" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tabs-post">
                    <nav>
                        <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                            <button aria-controls="nav-1&lt;/a&gt;" aria-selected="true"
                                class="nav-link btn-tin-tuc active" data-bs-target="#nav-1" data-bs-toggle="tab"
                                id="nav-tin-tuc" role="tab" type="button"></button>
                            <!-- <button class="nav-link" id="nav-promotion-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-promotion" type="button" role="tab" aria-controls="nav-promotion"
                            aria-selected="false"></button>
                        <button class="nav-link" id="nav-update-tab" data-bs-toggle="tab" data-bs-target="#nav-update"
                            type="button" role="tab" aria-controls="nav-update" aria-selected="false"></button> -->
                            <button aria-controls="nav-2&lt;/a&gt;" aria-selected="true" class="nav-link btn-su-kien"
                                data-bs-target="#nav-2" data-bs-toggle="tab" id="nav-su-kien" role="tab"
                                type="button"></button>
                            <!-- <button class="nav-link" id="nav-promotion-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-promotion" type="button" role="tab" aria-controls="nav-promotion"
                            aria-selected="false"></button>
                        <button class="nav-link" id="nav-update-tab" data-bs-toggle="tab" data-bs-target="#nav-update"
                            type="button" role="tab" aria-controls="nav-update" aria-selected="false"></button> -->
                            <button aria-controls="nav-3&lt;/a&gt;" aria-selected="true" class="nav-link btn-update"
                                data-bs-target="#nav-3" data-bs-toggle="tab" id="nav-update" role="tab"
                                type="button"></button>
                            <!-- <button class="nav-link" id="nav-promotion-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-promotion" type="button" role="tab" aria-controls="nav-promotion"
                            aria-selected="false"></button>
                        <button class="nav-link" id="nav-update-tab" data-bs-toggle="tab" data-bs-target="#nav-update"
                            type="button" role="tab" aria-controls="nav-update" aria-selected="false"></button> -->
                        </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                        <div aria-labelledby="nav-tin-tuc" class="tab-pane fade active show" id="nav-1" role="tabpanel">
                            <ul>
                                <li class="tab-item">
                                    <a class="d-flex align-items-center h-100 justify-content-between"
                                        href="/tin-tuc/10h-18-10-khai-mo-may-chu-s33-179" rel="nofollow"
                                        target="_self" title="10H 18/10 - Khai mở máy chủ S33">
                                        <h6>10H 18/10 - Khai mở máy chủ S33</h6><span>17-10-2025</span>
                                    </a>
                                </li>
                                <div class="line-container d-flex justify-content-center align-items-center">
                                    <div class="line"></div>
                                    <div class="dot"></div>
                                    <div class="line"></div>
                                </div>
                                <li class="tab-item">
                                    <a class="d-flex align-items-center h-100 justify-content-between"
                                        href="/tin-tuc/vuong-gia-chien-lan-2-197" rel="nofollow" target="_self"
                                        title="Vương Giả Chiến Lần 2">
                                        <h6>Vương Giả Chiến Lần 2</h6><span>14-10-2025</span>
                                    </a>
                                </li>
                                <div class="line-container d-flex justify-content-center align-items-center">
                                    <div class="line"></div>
                                    <div class="dot"></div>
                                    <div class="line"></div>
                                </div>
                                <li class="tab-item">
                                    <a class="d-flex align-items-center h-100 justify-content-between"
                                        href="/tin-tuc/su-kien-tuan-2-thang-10-2025-195" rel="nofollow"
                                        target="_self" title="Sự kiện Tuần 2 Tháng 10.2025">
                                        <h6>Sự kiện Tuần 2 Tháng 10.2025</h6><span>13-10-2025</span>
                                    </a>
                                </li>
                                <div class="line-container d-flex justify-content-center align-items-center">
                                    <div class="line"></div>
                                    <div class="dot"></div>
                                    <div class="line"></div>
                                </div>
                                <li class="tab-item">
                                    <a class="d-flex align-items-center h-100 justify-content-between"
                                        href="/tin-tuc/cap-nhat-dieu-chinh-tuong-thang-10-199" rel="nofollow"
                                        target="_self" title="Cập Nhật Điều Chỉnh Tướng Tháng 10">
                                        <h6>Cập Nhật Điều Chỉnh Tướng Tháng 10</h6><span>10-10-2025</span>
                                    </a>
                                </li>
                                <div class="line-container d-flex justify-content-center align-items-center">
                                    <div class="line"></div>
                                    <div class="dot"></div>
                                    <div class="line"></div>
                                </div>
                                <li class="tab-item">
                                    <a class="d-flex align-items-center h-100 justify-content-between"
                                        href="/tin-tuc/10h-11-10-khai-mo-may-chu-s32-177" rel="nofollow"
                                        target="_self" title="10H 11/10 - Khai mở máy chủ S32">
                                        <h6>10H 11/10 - Khai mở máy chủ S32</h6><span>10-10-2025</span>
                                    </a>
                                </li>
                                <div class="line-container d-flex justify-content-center align-items-center">
                                    <div class="line"></div>
                                    <div class="dot"></div>
                                    <div class="line"></div>
                                </div>
                                <li class="tab-item">
                                    <a class="d-flex align-items-center h-100 justify-content-between"
                                        href="/tin-tuc/su-kien-tuan-1-thang-10-2025-193" rel="nofollow"
                                        target="_self" title="Sự kiện Tuần 1 Tháng 10.2025">
                                        <h6>Sự kiện Tuần 1 Tháng 10.2025</h6><span>06-10-2025</span>
                                    </a>
                                </li>
                                <div class="line-container d-flex justify-content-center align-items-center">
                                    <div class="line"></div>
                                    <div class="dot"></div>
                                    <div class="line"></div>
                                </div>
                            </ul>
                            <div class="action-group d-flex">
                                <form action="#" class="search-lite search position-relative post">
                                    <input autocomplete="off" name="search" placeholder="Tìm kiếm"
                                        type="text" />
                                    <button class="position-absolute" type="submit"><i
                                            class="fa-light fa-magnifying-glass"></i></button>
                                </form>
                                <a class="more" href="/tin-tuc" title="Xem thêm"></a>
                            </div>
                        </div>
                        <div aria-labelledby="nav-su-kien" class="tab-pane fade" id="nav-2" role="tabpanel">
                            <ul>
                                <li class="tab-item">
                                    <a class="d-flex align-items-center h-100 justify-content-between"
                                        href="/su-kien/vuong-gia-chien-lan-2-197" rel="nofollow" target="_self"
                                        title="Vương Giả Chiến Lần 2">
                                        <h6>Vương Giả Chiến Lần 2</h6><span>14-10-2025</span>
                                    </a>
                                </li>
                                <div class="line-container d-flex justify-content-center align-items-center">
                                    <div class="line"></div>
                                    <div class="dot"></div>
                                    <div class="line"></div>
                                </div>
                                <li class="tab-item">
                                    <a class="d-flex align-items-center h-100 justify-content-between"
                                        href="/su-kien/su-kien-tuan-2-thang-10-2025-195" rel="nofollow"
                                        target="_self" title="Sự kiện Tuần 2 Tháng 10.2025">
                                        <h6>Sự kiện Tuần 2 Tháng 10.2025</h6><span>13-10-2025</span>
                                    </a>
                                </li>
                                <div class="line-container d-flex justify-content-center align-items-center">
                                    <div class="line"></div>
                                    <div class="dot"></div>
                                    <div class="line"></div>
                                </div>
                                <li class="tab-item">
                                    <a class="d-flex align-items-center h-100 justify-content-between"
                                        href="/su-kien/su-kien-tuan-1-thang-10-2025-193" rel="nofollow"
                                        target="_self" title="Sự kiện Tuần 1 Tháng 10.2025">
                                        <h6>Sự kiện Tuần 1 Tháng 10.2025</h6><span>06-10-2025</span>
                                    </a>
                                </li>
                                <div class="line-container d-flex justify-content-center align-items-center">
                                    <div class="line"></div>
                                    <div class="dot"></div>
                                    <div class="line"></div>
                                </div>
                                <li class="tab-item">
                                    <a class="d-flex align-items-center h-100 justify-content-between"
                                        href="/su-kien/to-doi-chien-hai-tac-chien-dau-lan-2-191" rel="nofollow"
                                        target="_self" title="Tổ Đội Chiến - Hải Tặc Chiến Đấu Lần 2">
                                        <h6>Tổ Đội Chiến - Hải Tặc Chiến Đấu Lần 2</h6><span>05-10-2025</span>
                                    </a>
                                </li>
                                <div class="line-container d-flex justify-content-center align-items-center">
                                    <div class="line"></div>
                                    <div class="dot"></div>
                                    <div class="line"></div>
                                </div>
                                <li class="tab-item">
                                    <a class="d-flex align-items-center h-100 justify-content-between"
                                        href="/su-kien/qua-mung-le-trung-thu-2025-189" rel="nofollow"
                                        target="_self" title="Quà Mừng Lễ Trung Thu 2025">
                                        <h6>Quà Mừng Lễ Trung Thu 2025</h6><span>02-10-2025</span>
                                    </a>
                                </li>
                                <div class="line-container d-flex justify-content-center align-items-center">
                                    <div class="line"></div>
                                    <div class="dot"></div>
                                    <div class="line"></div>
                                </div>
                                <li class="tab-item">
                                    <a class="d-flex align-items-center h-100 justify-content-between"
                                        href="/su-kien/san-dau-gia-lien-sever-lan-2-185" rel="nofollow"
                                        target="_self" title="Sàn Đấu Giá Liên Sever Lần 2">
                                        <h6>Sàn Đấu Giá Liên Sever Lần 2</h6><span>29-09-2025</span>
                                    </a>
                                </li>
                                <div class="line-container d-flex justify-content-center align-items-center">
                                    <div class="line"></div>
                                    <div class="dot"></div>
                                    <div class="line"></div>
                                </div>
                            </ul>
                            <div class="action-group d-flex">
                                <form action="#" class="search-lite search position-relative post">
                                    <input autocomplete="off" name="search" placeholder="Tìm kiếm"
                                        type="text" />
                                    <button class="position-absolute" type="submit"><i
                                            class="fa-light fa-magnifying-glass"></i></button>
                                </form>
                                <a class="more" href="/su-kien" title="Xem thêm"></a>
                            </div>
                        </div>
                        <div aria-labelledby="nav-update" class="tab-pane fade" id="nav-3" role="tabpanel">
                            <ul>
                                <li class="tab-item">
                                    <a class="d-flex align-items-center h-100 justify-content-between"
                                        href="/update/cap-nhat-dieu-chinh-tuong-thang-10-199" rel="nofollow"
                                        target="_self" title="Cập Nhật Điều Chỉnh Tướng Tháng 10">
                                        <h6>Cập Nhật Điều Chỉnh Tướng Tháng 10</h6><span>10-10-2025</span>
                                    </a>
                                </li>
                                <div class="line-container d-flex justify-content-center align-items-center">
                                    <div class="line"></div>
                                    <div class="dot"></div>
                                    <div class="line"></div>
                                </div>
                                <li class="tab-item">
                                    <a class="d-flex align-items-center h-100 justify-content-between"
                                        href="/update/cap-nhat-tinh-nang-phien-ban-thang-9-151" rel="nofollow"
                                        target="_self" title="Cập Nhật Tính Năng Phiên Bản Tháng 9">
                                        <h6>Cập Nhật Tính Năng Phiên Bản Tháng 9</h6><span>03-09-2025</span>
                                    </a>
                                </li>
                                <div class="line-container d-flex justify-content-center align-items-center">
                                    <div class="line"></div>
                                    <div class="dot"></div>
                                    <div class="line"></div>
                                </div>
                                <li class="tab-item">
                                    <a class="d-flex align-items-center h-100 justify-content-between"
                                        href="/update/thong-ba-o-ca-p-nha-t-die-u-chi-nh-tuo-ng-thang-8-133"
                                        rel="nofollow" target="_self"
                                        title="Thông Báo Cập Nhật Điều Chỉnh Tướng Tháng 8">
                                        <h6>Thông Báo Cập Nhật Điều Chỉnh Tướng Tháng 8</h6>
                                        <span>13-08-2025</span>
                                    </a>
                                </li>
                                <div class="line-container d-flex justify-content-center align-items-center">
                                    <div class="line"></div>
                                    <div class="dot"></div>
                                    <div class="line"></div>
                                </div>
                                <li class="tab-item">
                                    <a class="d-flex align-items-center h-100 justify-content-between"
                                        href="/update/tinh-nang-tinh-ban-va-chi-so-thien-phu-123" rel="nofollow"
                                        target="_self" title="Tính Năng Tinh Bàn và Chỉ số Thiên Phú">
                                        <h6>Tính Năng Tinh Bàn và Chỉ số Thiên Phú</h6><span>01-08-2025</span>
                                    </a>
                                </li>
                                <div class="line-container d-flex justify-content-center align-items-center">
                                    <div class="line"></div>
                                    <div class="dot"></div>
                                    <div class="line"></div>
                                </div>
                                <li class="tab-item">
                                    <a class="d-flex align-items-center h-100 justify-content-between"
                                        href="/update/thong-tin-va-chi-so-thoi-trang-121" rel="nofollow"
                                        target="_self" title="Thông tin và chỉ số thời trang">
                                        <h6>Thông tin và chỉ số thời trang</h6><span>30-07-2025</span>
                                    </a>
                                </li>
                                <div class="line-container d-flex justify-content-center align-items-center">
                                    <div class="line"></div>
                                    <div class="dot"></div>
                                    <div class="line"></div>
                                </div>
                                <li class="tab-item">
                                    <a class="d-flex align-items-center h-100 justify-content-between"
                                        href="/update/cap-nhat-toi-uu-he-thong-va-lo-trinh-dieu-chinh-tuong-dot-2-lan-2-119"
                                        rel="nofollow" target="_self"
                                        title="Cập nhật tối ưu hệ thống và lộ trình điều chỉnh tướng Đợt 2_Lần 2">
                                        <h6>Cập nhật tối ưu hệ thống và lộ trình điều chỉnh tướng Đợt 2_Lần 2</h6>
                                        <span>29-07-2025</span>
                                    </a>
                                </li>
                                <div class="line-container d-flex justify-content-center align-items-center">
                                    <div class="line"></div>
                                    <div class="dot"></div>
                                    <div class="line"></div>
                                </div>
                            </ul>
                            <div class="action-group d-flex">
                                <form action="#" class="search-lite search position-relative post">
                                    <input autocomplete="off" name="search" placeholder="Tìm kiếm"
                                        type="text" />
                                    <button class="position-absolute" type="submit"><i
                                            class="fa-light fa-magnifying-glass"></i></button>
                                </form>
                                <a class="more" href="/update" title="Xem thêm"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page page-3 d-flex align-items-center flex-column position-relative">
            <div class="title container d-flex flex-column align-items-center" data-aos="fade-down"
                data-aos-anchor-placement="top-bottom" data-aos-duration="900" data-aos-offset="-170"
                data-aos-once="false">
                <img alt="" src="/assets/stms/imgs/page3/title.png" />
            </div>
            <div class="background position-absolute"></div>
            <div class="content d-flex" data-aos="fade-down" data-aos-anchor-placement="top-bottom"
                data-aos-duration="900" data-aos-offset="-250" data-aos-once="false">
                <table>
                    <thead>
                        <tr>
                            <th class="rank"></th>
                            <th class="user"></th>
                            <th class="power"></th>
                            <th class="server"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img alt="" src="/assets/stms/imgs/page3/top-1.png" />
                            </td>
                            <td>彡A‿Du‿Ke彡</td>
                            <td>46,394,585</td>
                            <td class="text-uppercase">s5</td>
                        </tr>
                        <tr>
                            <td>
                                <img alt="" src="/assets/stms/imgs/page3/top-2.png" />
                            </td>
                            <td>Logan</td>
                            <td>42,433,431</td>
                            <td class="text-uppercase">s1</td>
                        </tr>
                        <tr>
                            <td>
                                <img alt="" src="/assets/stms/imgs/page3/top-3.png" />
                            </td>
                            <td>Hào_Béo_Sún_Răn</td>
                            <td>37,519,354</td>
                            <td class="text-uppercase">s8</td>
                        </tr>
                        <tr>
                            <td>
                                4 </td>
                            <td>GinS</td>
                            <td>33,828,246</td>
                            <td class="text-uppercase">s4</td>
                        </tr>
                        <tr>
                            <td>
                                5 </td>
                            <td>min</td>
                            <td>32,456,824</td>
                            <td class="text-uppercase">s6</td>
                        </tr>
                        <tr>
                            <td>
                                6 </td>
                            <td>MrGolden</td>
                            <td>28,813,535</td>
                            <td class="text-uppercase">s6</td>
                        </tr>
                        <tr>
                            <td>
                                7 </td>
                            <td>00001</td>
                            <td>27,772,457</td>
                            <td class="text-uppercase">s9</td>
                        </tr>
                        <tr>
                            <td>
                                8 </td>
                            <td>Boa_Hammock</td>
                            <td>27,387,577</td>
                            <td class="text-uppercase">s7</td>
                        </tr>
                        <tr>
                            <td>
                                9 </td>
                            <td>Mon</td>
                            <td>26,931,368</td>
                            <td class="text-uppercase">s2</td>
                        </tr>
                        <tr>
                            <td>
                                10 </td>
                            <td>Kuzu</td>
                            <td>26,874,146</td>
                            <td class="text-uppercase">s11</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
