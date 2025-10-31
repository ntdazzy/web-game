@extends('layouts.app')

@section('title', 'Bản cập nhật')

@section('body_class', 'wrapper-subpage overflow-y-auto')

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

        <script type="text/javascript">
    $(document).ready(function(){
        $('.btn-group a[href="/update"]').addClass('active');
    })
</script>
<div class="subpage-container wrapper-id post">
    <div class="container h-100 position-relative">
        <div class="d-flex flex-column align-items-center">
            <h1 class="page-title">Tin tức sự kiện</h1>
            <div class="listNews w-100">
                <div class="tabs-post">
                    <div class="action d-flex">
                        <div class="btn-group d-flex gap-3">
                                                                <a class="tin-tuc"  href="{{ route('news.index') }}">
                                        Tin tức                                    </a>
                                                                                                <a class="su-kien"  href="{{ route('events.index') }}">
                                        Sự kiện                                    </a>
                                                                                                <a class="update" class="active" href="{{ route('landing') }}">
                                        Update                                    </a>
                                                                                    </div>
                        <form class="search-lite search position-relative post" action="javascript:void(0);">
                            <input type="text" placeholder="Tìm kiếm" id="search" name="search" autocomplete="off">
                            <button type="submit" class="search-icon position-absolute"></button>
                        </form>
                    </div>
                    <ul class="posts-content d-flex flex-column gap-3">
                                                <li>
                            <a target="_self" href="{{ url(\'update/cap-nhat-dieu-chinh-tuong-thang-10-199\') }}" rel="" class="title d-flex">
                                <div class="thumbnail">
                                    <img src="{{ Vite::asset("resources/assets/files/uploads/images/Banner/Thumbnail%20315x177/Update.jpg") }}" onerror="this.onerror=null;this.src='{{ Vite::asset("resources/assets/images/post-item-example.png") }}';" alt="Cập Nhật Điều Chỉnh Tướng Tháng 10" width="100%" height="100%">
                                </div>
                                <div class="post-item-content">
                                    <h3 class="d-flex justify-content-between mb-2">
                                        <div class="post-item-title d-flex align-items-center">
                                            <span class="cat-name">Update</span>
                                                <p>Cập Nhật Điều Chỉnh Tướng Tháng 10</p>
                                        </div>
                                        <span
                                            class="time">10-10-2025</span>
                                    </h3>
                                    <p class="text-content">
                                        Thông báo cập nhật tướng mới nhất đến các Thuyền Trưởng.                                    </p>
                                </div>
                            </a>
                        </li>
                                                <li>
                            <a target="_self" href="{{ url(\'update/cap-nhat-tinh-nang-phien-ban-thang-9-151\') }}" rel="" class="title d-flex">
                                <div class="thumbnail">
                                    <img src="{{ Vite::asset("resources/assets/files/uploads/images/Banner/Thumbnail%20315x177/Update.jpg") }}" onerror="this.onerror=null;this.src='{{ Vite::asset("resources/assets/images/post-item-example.png") }}';" alt="Cập Nhật Tính Năng Phiên Bản Tháng 9" width="100%" height="100%">
                                </div>
                                <div class="post-item-content">
                                    <h3 class="d-flex justify-content-between mb-2">
                                        <div class="post-item-title d-flex align-items-center">
                                            <span class="cat-name">Update</span>
                                                <p>Cập Nhật Tính Năng Phiên Bản Tháng 9</p>
                                        </div>
                                        <span
                                            class="time">03-09-2025</span>
                                    </h3>
                                    <p class="text-content">
                                        &nbsp;                                    </p>
                                </div>
                            </a>
                        </li>
                                                <li>
                            <a target="_self" href="{{ url(\'update/thong-ba-o-ca-p-nha-t-die-u-chi-nh-tuo-ng-thang-8-133\') }}" rel="" class="title d-flex">
                                <div class="thumbnail">
                                    <img src="{{ Vite::asset("resources/assets/files/uploads/images/Banner/Thumbnail%20315x177/Update.jpg") }}" onerror="this.onerror=null;this.src='{{ Vite::asset("resources/assets/images/post-item-example.png") }}';" alt="Thông Báo Cập Nhật Điều Chỉnh Tướng Tháng 8" width="100%" height="100%">
                                </div>
                                <div class="post-item-content">
                                    <h3 class="d-flex justify-content-between mb-2">
                                        <div class="post-item-title d-flex align-items-center">
                                            <span class="cat-name">Update</span>
                                                <p>Thông Báo Cập Nhật Điều Chỉnh Tướng Tháng 8</p>
                                        </div>
                                        <span
                                            class="time">13-08-2025</span>
                                    </h3>
                                    <p class="text-content">
                                        Sau khi nhận được đóng góp từ cộng đồng, Hải Tặc Mạnh Nhất sẽ ra mắt bản cập nhật tối ưu hệ thống và công bố lộ trình điều chỉnh tướng. Cảm ơn sự ủng hộ của các Thuyền trưởng!                                    </p>
                                </div>
                            </a>
                        </li>
                                                <li>
                            <a target="_self" href="{{ url(\'update/tinh-nang-tinh-ban-va-chi-so-thien-phu-123\') }}" rel="" class="title d-flex">
                                <div class="thumbnail">
                                    <img src="{{ Vite::asset("resources/assets/files/uploads/images/Banner/Thumbnail%20315x177/Update.jpg") }}" onerror="this.onerror=null;this.src='{{ Vite::asset("resources/assets/images/post-item-example.png") }}';" alt="Tính Năng Tinh Bàn và Chỉ số Thiên Phú" width="100%" height="100%">
                                </div>
                                <div class="post-item-content">
                                    <h3 class="d-flex justify-content-between mb-2">
                                        <div class="post-item-title d-flex align-items-center">
                                            <span class="cat-name">Update</span>
                                                <p>Tính Năng Tinh Bàn và Chỉ số Thiên Phú</p>
                                        </div>
                                        <span
                                            class="time">01-08-2025</span>
                                    </h3>
                                    <p class="text-content">
                                        Tính năng Tinh Bàn và chỉ số Thiên Phú giúp gia tăng thêm các chỉ số cơ bản cho đồng đội và ngoài ra còn tăng sức mạnh thiên phú cho tướng chính                                    </p>
                                </div>
                            </a>
                        </li>
                                                <li>
                            <a target="_self" href="{{ url(\'update/thong-tin-va-chi-so-thoi-trang-121\') }}" rel="" class="title d-flex">
                                <div class="thumbnail">
                                    <img src="{{ Vite::asset("resources/assets/files/uploads/images/Banner/Thumbnail%20315x177/Update.jpg") }}" onerror="this.onerror=null;this.src='{{ Vite::asset("resources/assets/images/post-item-example.png") }}';" alt="Thông tin và chỉ số thời trang" width="100%" height="100%">
                                </div>
                                <div class="post-item-content">
                                    <h3 class="d-flex justify-content-between mb-2">
                                        <div class="post-item-title d-flex align-items-center">
                                            <span class="cat-name">Update</span>
                                                <p>Thông tin và chỉ số thời trang</p>
                                        </div>
                                        <span
                                            class="time">30-07-2025</span>
                                    </h3>
                                    <p class="text-content">
                                        &nbsp;                                    </p>
                                </div>
                            </a>
                        </li>
                                                <li>
                            <a target="_self" href="{{ url(\'update/cap-nhat-toi-uu-he-thong-va-lo-trinh-dieu-chinh-tuong-dot-2-lan-2-119\') }}" rel="" class="title d-flex">
                                <div class="thumbnail">
                                    <img src="{{ Vite::asset("resources/assets/files/uploads/images/Banner/Thumbnail%20315x177/Update.jpg") }}" onerror="this.onerror=null;this.src='{{ Vite::asset("resources/assets/images/post-item-example.png") }}';" alt="Cập nhật tối ưu hệ thống và lộ trình điều chỉnh tướng Đợt 2_Lần 2" width="100%" height="100%">
                                </div>
                                <div class="post-item-content">
                                    <h3 class="d-flex justify-content-between mb-2">
                                        <div class="post-item-title d-flex align-items-center">
                                            <span class="cat-name">Update</span>
                                                <p>Cập nhật tối ưu hệ thống và lộ trình điều chỉnh tướng Đợt 2_Lần 2</p>
                                        </div>
                                        <span
                                            class="time">29-07-2025</span>
                                    </h3>
                                    <p class="text-content">
                                        Sau khi nhận được đóng góp từ cộng đồng, Hải Tặc Mạnh Nhất sẽ ra mắt bản cập nhật tối ưu hệ thống và công bố lộ trình điều chỉnh tướng. Cảm ơn sự ủng hộ của các Thuyền trưởng!                                    </p>
                                </div>
                            </a>
                        </li>
                                                <li>
                            <a target="_self" href="{{ url(\'update/tinh-nang-vuon-ac-ma-103\') }}" rel="" class="title d-flex">
                                <div class="thumbnail">
                                    <img src="{{ Vite::asset("resources/assets/files/uploads/images/Banner/Thumbnail%20315x177/Update.jpg") }}" onerror="this.onerror=null;this.src='{{ Vite::asset("resources/assets/images/post-item-example.png") }}';" alt="Tính năng Vườn Ác Ma" width="100%" height="100%">
                                </div>
                                <div class="post-item-content">
                                    <h3 class="d-flex justify-content-between mb-2">
                                        <div class="post-item-title d-flex align-items-center">
                                            <span class="cat-name">Update</span>
                                                <p>Tính năng Vườn Ác Ma</p>
                                        </div>
                                        <span
                                            class="time">24-07-2025</span>
                                    </h3>
                                    <p class="text-content">
                                        Tính năng 'Vườn Ác Ma' độc quyền tại Hải Tặc Mạnh Nhất: Nơi Thuyền Trưởng tìm kiếm tài nguyên dồi dào, nâng cấp sức mạnh không ngừng. Bắt đầu hành trình trồng trọt ngay!                                    </p>
                                </div>
                            </a>
                        </li>
                                                <li>
                            <a target="_self" href="{{ url(\'update/cap-nhat-toi-uu-he-thong-va-lo-trinh-dieu-chinh-tuong-dot-2-101\') }}" rel="" class="title d-flex">
                                <div class="thumbnail">
                                    <img src="{{ Vite::asset("resources/assets/files/uploads/images/Banner/Thumbnail%20315x177/Update.jpg") }}" onerror="this.onerror=null;this.src='{{ Vite::asset("resources/assets/images/post-item-example.png") }}';" alt="Cập nhật tối ưu hệ thống và lộ trình điều chỉnh tướng Đợt 2" width="100%" height="100%">
                                </div>
                                <div class="post-item-content">
                                    <h3 class="d-flex justify-content-between mb-2">
                                        <div class="post-item-title d-flex align-items-center">
                                            <span class="cat-name">Update</span>
                                                <p>Cập nhật tối ưu hệ thống và lộ trình điều chỉnh tướng Đợt 2</p>
                                        </div>
                                        <span
                                            class="time">22-07-2025</span>
                                    </h3>
                                    <p class="text-content">
                                        Sau khi nhận được đóng góp từ cộng đồng, Hải Tặc Mạnh Nhất sẽ ra mắt bản cập nhật tối ưu hệ thống và công bố lộ trình điều chỉnh tướng. Cảm ơn sự ủng hộ của các Thuyền trưởng!                                    </p>
                                </div>
                            </a>
                        </li>
                                                <li>
                            <a target="_self" href="{{ url(\'update/cap-nhat-toi-uu-he-thong-va-lo-trinh-dieu-chinh-tuong-83\') }}" rel="" class="title d-flex">
                                <div class="thumbnail">
                                    <img src="{{ Vite::asset("resources/assets/files/uploads/images/Banner/Thumbnail%20315x177/Update.jpg") }}" onerror="this.onerror=null;this.src='{{ Vite::asset("resources/assets/images/post-item-example.png") }}';" alt="Cập nhật tối ưu hệ thống và lộ trình điều chỉnh tướng" width="100%" height="100%">
                                </div>
                                <div class="post-item-content">
                                    <h3 class="d-flex justify-content-between mb-2">
                                        <div class="post-item-title d-flex align-items-center">
                                            <span class="cat-name">Update</span>
                                                <p>Cập nhật tối ưu hệ thống và lộ trình điều chỉnh tướng</p>
                                        </div>
                                        <span
                                            class="time">07-07-2025</span>
                                    </h3>
                                    <p class="text-content">
                                        Sau khi nhận được đóng góp từ cộng đồng, Hải Tặc Mạnh Nhất sẽ ra mắt bản cập nhật tối ưu hệ thống và công bố lộ trình điều chỉnh tướng. Cảm ơn sự ủng hộ của các Thuyền trưởng!                                    </p>
                                </div>
                            </a>
                        </li>
                                            </ul>
                                        <div class="pagingWrapOut">
                        <div class="bor">
                            <div class="pagingWrap">
                                <div class="paging">
                                    <ul class="d-flex justify-content-center gap-2 my-3">
                                                                                
                                        <li class="prev">
                                            <!-- Previous page link -->
                                                                                            <span><img src="{{ Vite::asset("resources/assets/images/icon-arrow-left.png") }}" alt="" width="10px" height="15px"></span>
                                                                                    </li>

                                        <!-- Numbered page links -->

                                                                                <li>
                                                                                            <span>
                                                    1                                                </span>
                                                                                    </li>
                                                                                <li class="next">
                                            <!-- Next page link -->
                                                                                            <span><img src="{{ Vite::asset("resources/assets/images/icon-arrow-right.png") }}" alt="" width="10px" height="15px"></span>
                                                                                    </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                                    </div>
            </div>
        </div>
    </div>
</div>
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
