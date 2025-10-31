@extends('layouts.app')

@section('title', 'Trang chủ')

@section('content')
<div id="root" class="d-flex flex-column align-items-center w-100 position-relative">
        <img src="{{ Vite::asset("resources/assets/images/logo-warning.png") }}" alt="" class="logo-warning position-absolute">
        <div class="wrap-login-mobile wrap-login position-absolute h-100">
            <div class="user-info h-100 d-flex align-items-center d-none">
                <div class="btn-group">
                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i class="fa-solid fa-user"></i>
                        <span class="display-name"></span>
                    </button>
                    <ul class="dropdown-menu">
                        <li class="dropdown-item d-flex align-items-center"><a href="{{ route('account.profile') }}"><i class="fa-solid fa-user"></i>Quản lý tài khoản</a></li>
                        <li class="dropdown-item d-flex align-items-center">
                            <a href="{{ route('wallet.topup') }}" class="d-flex justify-content-between">
                                <i><span>GEM</span><span>0</span></i> <button>Nạp</button></a>
                        </li>
                        <li class="dropdown-item d-flex align-items-center"><a href="{{ route('wallet.history') }}"><i class="fa-solid fa-clock-rotate-left"></i>Lịch sử nạp</a></li>
                        <li class="dropdown-item d-flex align-items-center"><a href="{{ route('password.request') }}"><i class="fa-solid fa-lock-keyhole-open"></i>Đổi mật khẩu</a></li>
                        <li class="dropdown-item d-flex align-items-center"><a href="#" class="logout-link"><i class="fa-light fa-right-from-bracket"></i>Đăng xuất</a></li>
                    </ul>
                </div>
            </div>
            <a href="javascript:void(0)" class="btn-login login-required" data-redirect="{{ route('wallet.topup') }}"></a>
        </div>

        <div class="wrapper-page w-100 position-relative">
    <div class="page page-1 position-relative">
        <video autoplay muted loop playsinline class="bg-video w-100 h-100 position-absolute">
            <source src="{{ config('app.cdn_url', 'https://cdn-ms.haitacmanhnhat.vn') }}/st-ms/videos/mainsite/home-video-3.mp4" type="video/mp4">
        </video>
        <div class="btn-group position-absolute d-flex">
                                                                        <a href="#" title="Tải game" class="btn-download link-download-client"></a>
                    
                    
                                                        
                                            <div class="btn-action-group d-flex flex-column">
                                                            <a href="{{ route('news.show', 'huong-dan-tai-va-cai-dat-game') }}" title="Hướng dẫn tải" class="support-dowload">Hướng dẫn tải</a>
                                                            <a href="{{ route('giftcode.index') }}" title="Nhận code" class="code">Nhận code</a>
                                                    </div>
                                            
                    
                                            <a href="{{ route('wallet.topup') }}" title="Nạp thẻ" class="btn-pay"></a>
                                                        </div>
    </div>
    <div class="page page-2 d-flex align-items-center flex-column">
        <div class="title container d-flex flex-column align-items-center aos-init aos-animate" data-aos="fade-down" data-aos-once="false" data-aos-offset="0" data-aos-duration="900" data-aos-anchor-placement="top-bottom">
            <img src="{{ Vite::asset("resources/assets/images/page2/title-2.png") }}" alt="">
        </div>
        <div class="content d-flex aos-init aos-animate" data-aos="fade-down" data-aos-once="false" data-aos-offset="0" data-aos-duration="900" data-aos-anchor-placement="top-bottom">
            <div class="slide carousel" id="slideHome">
    <div id="slideHome" class="carousel h-100" data-bs-ride="carousel">
        <div class="carousel-indicators slide-pc">
                                                <button type="button" data-bs-target="#slideHome" data-bs-slide-to="0" class=" "
                        aria-current="true" aria-label="S32"></button>
                                                                <button type="button" data-bs-target="#slideHome" data-bs-slide-to="1" class="active "
                        aria-current="true" aria-label="EV2"></button>
                                                                <button type="button" data-bs-target="#slideHome" data-bs-slide-to="2" class=" "
                        aria-current="true" aria-label="VGC"></button>
                                    </div>
        <div class="carousel-inner h-100 slide-pc">
                                                <div class="carousel-item ">
                        <a href="{{ route('news.show', '10h-11-10-khai-mo-may-chu-s32-177') }}" target="_self" title="S32">
                            <img class="d-block w-100 h-100" src="{{ Vite::asset("resources/assets/files/uploads/images/Banner/Mainsite%20PC%20527x465/527x465(71).jpg") }}" alt="S32" onerror="this.onerror=null;this.src='{{ Vite::asset("resources/assets/images/page2/slides/slide.png") }}';" >
                        </a>
                    </div>
                                                                <div class="carousel-item active">
                        <a href="{{ route('news.show', 'su-kien-tuan-2-thang-10-2025-195') }}" target="_self" title="EV2">
                            <img class="d-block w-100 h-100" src="{{ Vite::asset("resources/assets/files/uploads/images/Banner/Mainsite%20PC%20527x465/527x465(73).jpg") }}" alt="EV2" onerror="this.onerror=null;this.src='{{ Vite::asset("resources/assets/images/page2/slides/slide.png") }}';" >
                        </a>
                    </div>
                                                                <div class="carousel-item ">
                        <a href="{{ route('news.show', 'vuong-gia-chien-lan-2-197') }}" target="_self" title="VGC">
                            <img class="d-block w-100 h-100" src="{{ Vite::asset("resources/assets/files/uploads/images/Banner/Mainsite%20PC%20527x465/527x465(74).jpg") }}" alt="VGC" onerror="this.onerror=null;this.src='{{ Vite::asset("resources/assets/images/page2/slides/slide.png") }}';" >
                        </a>
                    </div>
                                    </div>
    </div>
</div>

<div class="slide carousel" id="slideHomeMobile">
    <div id="slideHomeMobile" class="carousel h-100" data-bs-ride="carousel">
        <div class="carousel-indicators slide-mobile">
                                                <button type="button" data-bs-target="#slideHomeMobile" data-bs-slide-to="0" class=" "
                        aria-current="true" aria-label="S32"></button>
                                                                <button type="button" data-bs-target="#slideHomeMobile" data-bs-slide-to="1" class="active "
                        aria-current="true" aria-label="EV2"></button>
                                                                <button type="button" data-bs-target="#slideHomeMobile" data-bs-slide-to="2" class=" "
                        aria-current="true" aria-label="VGC"></button>
                                    </div>
        <div class="carousel-inner h-100 slide-mobile">
                                                <div class="carousel-item ">
                        <a href="{{ route('news.show', '10h-11-10-khai-mo-may-chu-s32-177') }}" target="_self" title="S32">
                            <img class="d-block w-100 h-100" src="{{ Vite::asset("resources/assets/files/uploads/images/Banner/Mainsite%20Tablet%20521x387/521x387(15).jpg") }}" alt="S32" onerror="this.onerror=null;this.src='{{ Vite::asset("resources/assets/images/page2/slides/slide-mobile.png") }}';" >
                        </a>
                    </div>
                                                                <div class="carousel-item active">
                        <a href="{{ route('news.show', 'su-kien-tuan-2-thang-10-2025-195') }}" target="_self" title="EV2">
                            <img class="d-block w-100 h-100" src="{{ Vite::asset("resources/assets/files/uploads/images/Banner/Mainsite%20Tablet%20521x387/521x387(16).jpg") }}" alt="EV2" onerror="this.onerror=null;this.src='{{ Vite::asset("resources/assets/images/page2/slides/slide-mobile.png") }}';" >
                        </a>
                    </div>
                                                                <div class="carousel-item ">
                        <a href="{{ route('news.show', 'vuong-gia-chien-lan-2-197') }}" target="_self" title="VGC">
                            <img class="d-block w-100 h-100" src="{{ Vite::asset("resources/assets/files/uploads/images/Banner/Mainsite%20Tablet%20521x387/521x387(17).jpg") }}" alt="VGC" onerror="this.onerror=null;this.src='{{ Vite::asset("resources/assets/images/page2/slides/slide-mobile.png") }}';" >
                        </a>
                    </div>
                                    </div>
    </div>
</div>
            <div class="tabs-post">
                <nav>
                    <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                                                    <button class="nav-link btn-tin-tuc active" id="nav-tin-tuc" data-bs-toggle="tab"
                            data-bs-target="#nav-1" type="button" role="tab" aria-controls="nav-1</a>"
                            aria-selected="true"></button>
                        <!-- <button class="nav-link" id="nav-promotion-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-promotion" type="button" role="tab" aria-controls="nav-promotion"
                            aria-selected="false"></button>
                        <button class="nav-link" id="nav-update-tab" data-bs-toggle="tab" data-bs-target="#nav-update"
                            type="button" role="tab" aria-controls="nav-update" aria-selected="false"></button> -->
                                                    <button class="nav-link btn-su-kien " id="nav-su-kien" data-bs-toggle="tab"
                            data-bs-target="#nav-2" type="button" role="tab" aria-controls="nav-2</a>"
                            aria-selected="true"></button>
                        <!-- <button class="nav-link" id="nav-promotion-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-promotion" type="button" role="tab" aria-controls="nav-promotion"
                            aria-selected="false"></button>
                        <button class="nav-link" id="nav-update-tab" data-bs-toggle="tab" data-bs-target="#nav-update"
                            type="button" role="tab" aria-controls="nav-update" aria-selected="false"></button> -->
                                                    <button class="nav-link btn-update " id="nav-update" data-bs-toggle="tab"
                            data-bs-target="#nav-3" type="button" role="tab" aria-controls="nav-3</a>"
                            aria-selected="true"></button>
                        <!-- <button class="nav-link" id="nav-promotion-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-promotion" type="button" role="tab" aria-controls="nav-promotion"
                            aria-selected="false"></button>
                        <button class="nav-link" id="nav-update-tab" data-bs-toggle="tab" data-bs-target="#nav-update"
                            type="button" role="tab" aria-controls="nav-update" aria-selected="false"></button> -->
                                            </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                                        <div class="tab-pane fade active show" id="nav-1" role="tabpanel" aria-labelledby="nav-tin-tuc">
                        <ul>
                                                        <li class="tab-item">
                                <a href="{{ route('news.show', '10h-18-10-khai-mo-may-chu-s33-179') }}" target="_self" rel="nofollow" title="10H 18/10 - Khai mở máy chủ S33" class="d-flex align-items-center h-100 justify-content-between">
                                    <h6>10H 18/10 - Khai mở máy chủ S33</h6><span>17-10-2025</span>
                                </a>
                            </li>
                            <div class="line-container d-flex justify-content-center align-items-center">
                                <div class="line"></div><div class="dot"></div><div class="line"></div>
                            </div>
                                                        <li class="tab-item">
                                <a href="{{ route('news.show', 'vuong-gia-chien-lan-2-197') }}" target="_self" rel="nofollow" title="Vương Giả Chiến Lần 2" class="d-flex align-items-center h-100 justify-content-between">
                                    <h6>Vương Giả Chiến Lần 2</h6><span>14-10-2025</span>
                                </a>
                            </li>
                            <div class="line-container d-flex justify-content-center align-items-center">
                                <div class="line"></div><div class="dot"></div><div class="line"></div>
                            </div>
                                                        <li class="tab-item">
                                <a href="{{ route('news.show', 'su-kien-tuan-2-thang-10-2025-195') }}" target="_self" rel="nofollow" title="Sự kiện Tuần 2 Tháng 10.2025" class="d-flex align-items-center h-100 justify-content-between">
                                    <h6>Sự kiện Tuần 2 Tháng 10.2025</h6><span>13-10-2025</span>
                                </a>
                            </li>
                            <div class="line-container d-flex justify-content-center align-items-center">
                                <div class="line"></div><div class="dot"></div><div class="line"></div>
                            </div>
                                                        <li class="tab-item">
                                <a href="{{ route('news.show', 'cap-nhat-dieu-chinh-tuong-thang-10-199') }}" target="_self" rel="nofollow" title="Cập Nhật Điều Chỉnh Tướng Tháng 10" class="d-flex align-items-center h-100 justify-content-between">
                                    <h6>Cập Nhật Điều Chỉnh Tướng Tháng 10</h6><span>10-10-2025</span>
                                </a>
                            </li>
                            <div class="line-container d-flex justify-content-center align-items-center">
                                <div class="line"></div><div class="dot"></div><div class="line"></div>
                            </div>
                                                        <li class="tab-item">
                                <a href="{{ route('news.show', '10h-11-10-khai-mo-may-chu-s32-177') }}" target="_self" rel="nofollow" title="10H 11/10 - Khai mở máy chủ S32" class="d-flex align-items-center h-100 justify-content-between">
                                    <h6>10H 11/10 - Khai mở máy chủ S32</h6><span>10-10-2025</span>
                                </a>
                            </li>
                            <div class="line-container d-flex justify-content-center align-items-center">
                                <div class="line"></div><div class="dot"></div><div class="line"></div>
                            </div>
                                                        <li class="tab-item">
                                <a href="{{ route('news.show', 'su-kien-tuan-1-thang-10-2025-193') }}" target="_self" rel="nofollow" title="Sự kiện Tuần 1 Tháng 10.2025" class="d-flex align-items-center h-100 justify-content-between">
                                    <h6>Sự kiện Tuần 1 Tháng 10.2025</h6><span>06-10-2025</span>
                                </a>
                            </li>
                            <div class="line-container d-flex justify-content-center align-items-center">
                                <div class="line"></div><div class="dot"></div><div class="line"></div>
                            </div>
                                                    </ul>

                        <div class="action-group d-flex">
                            <form class="search-lite search position-relative post" action="javascript:void(0);">
                                <input type="text" placeholder="Tìm kiếm" id="search" name="search"  autocomplete="off">
                                <button type="submit" class="position-absolute"><i class="fa-light fa-magnifying-glass"></i></i></button>
                            </form>
                            <a class="more" href="{{ route('news.index') }}" title="Xem thêm"></a>
                        </div>
                    </div>
                                        <div class="tab-pane fade " id="nav-2" role="tabpanel" aria-labelledby="nav-su-kien">
                        <ul>
                                                        <li class="tab-item">
                                <a href="{{ route('events.show', 'vuong-gia-chien-lan-2-197') }}" target="_self" rel="nofollow" title="Vương Giả Chiến Lần 2" class="d-flex align-items-center h-100 justify-content-between">
                                    <h6>Vương Giả Chiến Lần 2</h6><span>14-10-2025</span>
                                </a>
                            </li>
                            <div class="line-container d-flex justify-content-center align-items-center">
                                <div class="line"></div><div class="dot"></div><div class="line"></div>
                            </div>
                                                        <li class="tab-item">
                                <a href="{{ route('events.show', 'su-kien-tuan-2-thang-10-2025-195') }}" target="_self" rel="nofollow" title="Sự kiện Tuần 2 Tháng 10.2025" class="d-flex align-items-center h-100 justify-content-between">
                                    <h6>Sự kiện Tuần 2 Tháng 10.2025</h6><span>13-10-2025</span>
                                </a>
                            </li>
                            <div class="line-container d-flex justify-content-center align-items-center">
                                <div class="line"></div><div class="dot"></div><div class="line"></div>
                            </div>
                                                        <li class="tab-item">
                                <a href="{{ route('events.show', 'su-kien-tuan-1-thang-10-2025-193') }}" target="_self" rel="nofollow" title="Sự kiện Tuần 1 Tháng 10.2025" class="d-flex align-items-center h-100 justify-content-between">
                                    <h6>Sự kiện Tuần 1 Tháng 10.2025</h6><span>06-10-2025</span>
                                </a>
                            </li>
                            <div class="line-container d-flex justify-content-center align-items-center">
                                <div class="line"></div><div class="dot"></div><div class="line"></div>
                            </div>
                                                        <li class="tab-item">
                                <a href="{{ route('events.show', 'to-doi-chien-hai-tac-chien-dau-lan-2-191') }}" target="_self" rel="nofollow" title="Tổ Đội Chiến - Hải Tặc Chiến Đấu Lần 2" class="d-flex align-items-center h-100 justify-content-between">
                                    <h6>Tổ Đội Chiến - Hải Tặc Chiến Đấu Lần 2</h6><span>05-10-2025</span>
                                </a>
                            </li>
                            <div class="line-container d-flex justify-content-center align-items-center">
                                <div class="line"></div><div class="dot"></div><div class="line"></div>
                            </div>
                                                        <li class="tab-item">
                                <a href="{{ route('events.show', 'qua-mung-le-trung-thu-2025-189') }}" target="_self" rel="nofollow" title="Quà Mừng Lễ Trung Thu 2025" class="d-flex align-items-center h-100 justify-content-between">
                                    <h6>Quà Mừng Lễ Trung Thu 2025</h6><span>02-10-2025</span>
                                </a>
                            </li>
                            <div class="line-container d-flex justify-content-center align-items-center">
                                <div class="line"></div><div class="dot"></div><div class="line"></div>
                            </div>
                                                        <li class="tab-item">
                                <a href="{{ route('events.show', 'san-dau-gia-lien-sever-lan-2-185') }}" target="_self" rel="nofollow" title="Sàn Đấu Giá Liên Sever Lần 2" class="d-flex align-items-center h-100 justify-content-between">
                                    <h6>Sàn Đấu Giá Liên Sever Lần 2</h6><span>29-09-2025</span>
                                </a>
                            </li>
                            <div class="line-container d-flex justify-content-center align-items-center">
                                <div class="line"></div><div class="dot"></div><div class="line"></div>
                            </div>
                                                    </ul>

                        <div class="action-group d-flex">
                            <form class="search-lite search position-relative post" action="javascript:void(0);">
                                <input type="text" placeholder="Tìm kiếm" id="search" name="search"  autocomplete="off">
                                <button type="submit" class="position-absolute"><i class="fa-light fa-magnifying-glass"></i></i></button>
                            </form>
                            <a class="more" href="{{ route('events.index') }}" title="Xem thêm"></a>
                        </div>
                    </div>
                                        <div class="tab-pane fade " id="nav-3" role="tabpanel" aria-labelledby="nav-update">
                        <ul>
                                                        <li class="tab-item">
                                <a href="{{ url(\'update/cap-nhat-dieu-chinh-tuong-thang-10-199\') }}" target="_self" rel="nofollow" title="Cập Nhật Điều Chỉnh Tướng Tháng 10" class="d-flex align-items-center h-100 justify-content-between">
                                    <h6>Cập Nhật Điều Chỉnh Tướng Tháng 10</h6><span>10-10-2025</span>
                                </a>
                            </li>
                            <div class="line-container d-flex justify-content-center align-items-center">
                                <div class="line"></div><div class="dot"></div><div class="line"></div>
                            </div>
                                                        <li class="tab-item">
                                <a href="{{ url(\'update/cap-nhat-tinh-nang-phien-ban-thang-9-151\') }}" target="_self" rel="nofollow" title="Cập Nhật Tính Năng Phiên Bản Tháng 9" class="d-flex align-items-center h-100 justify-content-between">
                                    <h6>Cập Nhật Tính Năng Phiên Bản Tháng 9</h6><span>03-09-2025</span>
                                </a>
                            </li>
                            <div class="line-container d-flex justify-content-center align-items-center">
                                <div class="line"></div><div class="dot"></div><div class="line"></div>
                            </div>
                                                        <li class="tab-item">
                                <a href="{{ url(\'update/thong-ba-o-ca-p-nha-t-die-u-chi-nh-tuo-ng-thang-8-133\') }}" target="_self" rel="nofollow" title="Thông Báo Cập Nhật Điều Chỉnh Tướng Tháng 8" class="d-flex align-items-center h-100 justify-content-between">
                                    <h6>Thông Báo Cập Nhật Điều Chỉnh Tướng Tháng 8</h6><span>13-08-2025</span>
                                </a>
                            </li>
                            <div class="line-container d-flex justify-content-center align-items-center">
                                <div class="line"></div><div class="dot"></div><div class="line"></div>
                            </div>
                                                        <li class="tab-item">
                                <a href="{{ url(\'update/tinh-nang-tinh-ban-va-chi-so-thien-phu-123\') }}" target="_self" rel="nofollow" title="Tính Năng Tinh Bàn và Chỉ số Thiên Phú" class="d-flex align-items-center h-100 justify-content-between">
                                    <h6>Tính Năng Tinh Bàn và Chỉ số Thiên Phú</h6><span>01-08-2025</span>
                                </a>
                            </li>
                            <div class="line-container d-flex justify-content-center align-items-center">
                                <div class="line"></div><div class="dot"></div><div class="line"></div>
                            </div>
                                                        <li class="tab-item">
                                <a href="{{ url(\'update/thong-tin-va-chi-so-thoi-trang-121\') }}" target="_self" rel="nofollow" title="Thông tin và chỉ số thời trang" class="d-flex align-items-center h-100 justify-content-between">
                                    <h6>Thông tin và chỉ số thời trang</h6><span>30-07-2025</span>
                                </a>
                            </li>
                            <div class="line-container d-flex justify-content-center align-items-center">
                                <div class="line"></div><div class="dot"></div><div class="line"></div>
                            </div>
                                                        <li class="tab-item">
                                <a href="{{ url(\'update/cap-nhat-toi-uu-he-thong-va-lo-trinh-dieu-chinh-tuong-dot-2-lan-2-119\') }}" target="_self" rel="nofollow" title="Cập nhật tối ưu hệ thống và lộ trình điều chỉnh tướng Đợt 2_Lần 2" class="d-flex align-items-center h-100 justify-content-between">
                                    <h6>Cập nhật tối ưu hệ thống và lộ trình điều chỉnh tướng Đợt 2_Lần 2</h6><span>29-07-2025</span>
                                </a>
                            </li>
                            <div class="line-container d-flex justify-content-center align-items-center">
                                <div class="line"></div><div class="dot"></div><div class="line"></div>
                            </div>
                                                    </ul>

                        <div class="action-group d-flex">
                            <form class="search-lite search position-relative post" action="javascript:void(0);">
                                <input type="text" placeholder="Tìm kiếm" id="search" name="search"  autocomplete="off">
                                <button type="submit" class="position-absolute"><i class="fa-light fa-magnifying-glass"></i></i></button>
                            </form>
                            <a class="more" href="{{ route('landing') }}" title="Xem thêm"></a>
                        </div>
                    </div>
                                    </div>
            </div>
        </div>
    </div>

    <div class="page page-3 d-flex align-items-center flex-column position-relative">
    <div class="title container d-flex flex-column align-items-center" data-aos="fade-down" data-aos-once="false" data-aos-offset="-170" data-aos-duration="900" data-aos-anchor-placement="top-bottom">
        <img src="{{ Vite::asset("resources/assets/images/page3/title.png") }}" alt="">
    </div>
    <div class="background position-absolute"></div>
    <div class="content d-flex" data-aos="fade-down" data-aos-once="false" data-aos-offset="-250" data-aos-duration="900" data-aos-anchor-placement="top-bottom">
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
                            <img src="{{ Vite::asset("resources/assets/images/page3/top-1.png") }}" alt="">                        </td>
                        <td>彡A‿Du‿Ke彡</td>
                        <td>46,394,585</td>
                        <td class="text-uppercase">s5</td>
                    </tr>
                                    <tr>
                        <td>
                            <img src="{{ Vite::asset("resources/assets/images/page3/top-2.png") }}" alt="">                        </td>
                        <td>Logan</td>
                        <td>42,433,431</td>
                        <td class="text-uppercase">s1</td>
                    </tr>
                                    <tr>
                        <td>
                            <img src="{{ Vite::asset("resources/assets/images/page3/top-3.png") }}" alt="">                        </td>
                        <td>Hào_Béo_Sún_Răn</td>
                        <td>37,519,354</td>
                        <td class="text-uppercase">s8</td>
                    </tr>
                                    <tr>
                        <td>
                            4                        </td>
                        <td>GinS</td>
                        <td>33,828,246</td>
                        <td class="text-uppercase">s4</td>
                    </tr>
                                    <tr>
                        <td>
                            5                        </td>
                        <td>min</td>
                        <td>32,456,824</td>
                        <td class="text-uppercase">s6</td>
                    </tr>
                                    <tr>
                        <td>
                            6                        </td>
                        <td>MrGolden</td>
                        <td>28,813,535</td>
                        <td class="text-uppercase">s6</td>
                    </tr>
                                    <tr>
                        <td>
                            7                        </td>
                        <td>00001</td>
                        <td>27,772,457</td>
                        <td class="text-uppercase">s9</td>
                    </tr>
                                    <tr>
                        <td>
                            8                        </td>
                        <td>Boa_Hammock</td>
                        <td>27,387,577</td>
                        <td class="text-uppercase">s7</td>
                    </tr>
                                    <tr>
                        <td>
                            9                        </td>
                        <td>Mon</td>
                        <td>26,931,368</td>
                        <td class="text-uppercase">s2</td>
                    </tr>
                                    <tr>
                        <td>
                            10                        </td>
                        <td>Kuzu</td>
                        <td>26,874,146</td>
                        <td class="text-uppercase">s11</td>
                    </tr>
                                        </tbody>
        </table>
    </div>
</div></div>
        <div class="page page-4 d-flex align-items-center flex-column position-relative">
    <div class="text-slide d-flex justify-content-center w-100">
        <div id="sliderTrack" class="d-flex w-100">
            <div class="slide-item d-flex align-items-center">
                <span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span>
            </div>
            <div class="slide-item d-flex align-items-center">
                <span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span>
            </div>
            <div class="slide-item d-flex align-items-center">
                <span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span>
            </div>
        </div>
    </div>

        <div class="social" data-aos="fade-down" data-aos-once="false" data-aos-duration="900" data-aos-offset="0">
        <ul class="d-flex h-100 align-items-center">
                                <li class="trans-y">
                <a class="facebook"  href="https://www.facebook.com/haitacmanhnhat" title="Facebook" target="_blank">Facebook</a>
            </li>
                                <li class="trans-y">
                <a class="youtube"  href="https://www.youtube.com/@haitacmanhnhat" title="Youtube" target="_blank">Youtube</a>
            </li>
                                <li class="trans-y">
                <a class="group"  href="https://www.facebook.com/groups/dechehaitac" title="Facebook Group" target="_blank">Facebook Group</a>
            </li>
                                <li class="trans-y">
                <a class="tiktok"  href="https://www.tiktok.com/@haitacmanhnhat" title="Tiktok" target="_blank">Tiktok</a>
            </li>
                                <li class="trans-y">
                <a class="discord"  href="https://discord.com/invite/pRQaVmUj78" title="Discord" target="_blank">Discord</a>
            </li>
                                <li class="trans-y">
                <a class="zalo"  href="https://zalo.me/g/snnzqo202" title="Zalo" target="_blank">Zalo</a>
            </li>
                </ul>
    </div>
    </div>
@endsection
