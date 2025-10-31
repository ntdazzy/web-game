@php
    $activeClass = static fn(string $route): string => request()->routeIs($route) ? ' active' : '';
@endphp

<header id="site-header">
    <div class="top-nav w-100 position-fixed">
        <div class="container d-flex w-100 h-100">
            <div class="logo position-relative h-100">
                <div class="wrap-logo position-absolute d-flex flex-column align-items-center">
                    <a href="{{ route('home') }}">
                        <img src="{{ Vite::asset('resources/assets/images/logo.png') }}" alt="Hải Tặc Mạnh Nhất"
                            class="logo-img">
                    </a>
                </div>
            </div>
            <div class="nav-bar position-relative">
                <img src="{{ Vite::asset('resources/assets/images/menu/bg-menu-nav.png') }}" alt=""
                    class="position-absolute top-0">
                <ul class="main-nav d-flex h-100">
                    <li class="d-flex justify-content-center align-items-center homepage{{ $activeClass('home') }}">
                        <a class="nav-item h-100" href="{{ route('home') }}" title="Trang chủ">
                            <span class="visually-hidden">Trang chủ</span>
                        </a>
                    </li>
                    <li class="d-flex justify-content-center align-items-center news{{ $activeClass('news.*') }}">
                        <a class="nav-item h-100" href="{{ route('news.index') }}" title="Tin tức">
                            <span class="visually-hidden">Tin tức</span>
                        </a>
                    </li>
                    <li
                        class="d-flex justify-content-center align-items-center hero-item{{ $activeClass('characters.index') }}">
                        <a class="nav-item h-100" href="{{ route('characters.index') }}" title="Tướng">
                            <span class="visually-hidden">Tướng</span>
                        </a>
                    </li>
                    <li class="d-flex justify-content-center align-items-center fruit">
                        <a class="nav-item h-100 d-flex align-items-center" href="{{ route('devilfruits.index') }}"
                            title="Trái Ác Quỷ" data-bs-toggle="dropdown">
                            <i class="dropdown-icon position-absolute"></i>
                            <span class="visually-hidden">Trái Ác Quỷ</span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li>
                                <a href="{{ route('devilfruits.index') }}" class="dropdown-item">Trái Ác Quỷ</a>
                            </li>
                            <li>
                                <a href="{{ route('devilfruits.fusion') }}" class="dropdown-item">Trái Dung Hợp</a>
                            </li>
                        </ul>
                    </li>
                    <li class="d-flex justify-content-center align-items-center support">
                        <a class="nav-item h-100 d-flex align-items-center" href="#" title="Hỗ trợ"
                            data-bs-toggle="dropdown">
                            <i class="dropdown-icon position-absolute"></i>
                            <span class="visually-hidden">Hỗ trợ</span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a href="https://www.facebook.com/haitacmanhnhat" target="_blank" rel="noopener"
                                    class="dropdown-item">Facebook</a></li>
                            <li><a href="https://discord.com/invite/pRQaVmUj78" target="_blank" rel="noopener"
                                    class="dropdown-item">Discord</a></li>
                            <li><a href="https://zalo.me/g/snnzqo202" target="_blank" rel="noopener"
                                    class="dropdown-item">Zalo</a></li>
                        </ul>
                    </li>
                    <li class="d-flex justify-content-center align-items-center community">
                        <a class="nav-item h-100 d-flex align-items-center" href="#" title="Cộng Đồng"
                            data-bs-toggle="dropdown">
                            <i class="dropdown-icon position-absolute"></i>
                            <span class="visually-hidden">Cộng đồng</span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li class="youtube"><a href="https://www.youtube.com/@haitacmanhnhat" target="_blank"
                                    rel="noopener" class="dropdown-item">Youtube</a></li>
                            <li class="group"><a href="https://www.facebook.com/groups/dechehaitac" target="_blank"
                                    rel="noopener" class="dropdown-item">Group cộng đồng</a></li>
                            <li class="tiktok"><a href="https://www.tiktok.com/@haitacmanhnhat" target="_blank"
                                    rel="noopener" class="dropdown-item">Tiktok</a></li>
                            <li class="discord"><a href="https://discord.com/invite/pRQaVmUj78" target="_blank"
                                    rel="noopener" class="dropdown-item">Discord</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="login">
                <div class="wrap-login position-absolute h-100">
                    <div class="user-info h-100 d-flex align-items-center d-none">
                        <div class="btn-group">
                            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="fa-solid fa-user"></i>
                                <span class="display-name"></span>
                            </button>
                            <ul class="dropdown-menu">
                                <li class="dropdown-item d-flex align-items-center">
                                    <a href="{{ route('account.profile') }}">
                                        <i class="fa-solid fa-user"></i>Quản lý tài khoản
                                    </a>
                                </li>
                                <li class="dropdown-item d-flex align-items-center">
                                    <a href="{{ route('wallet.topup') }}" class="d-flex justify-content-between">
                                        <i>
                                            <span class="payment-unit">GEM</span>
                                            <span class="display-balance">0</span>
                                        </i>
                                        <button type="button">Nạp</button>
                                    </a>
                                </li>
                                <li class="dropdown-item d-flex align-items-center">
                                    <a href="{{ route('wallet.history') }}">
                                        <i class="fa-solid fa-clock-rotate-left"></i>Lịch sử nạp
                                    </a>
                                </li>
                                <li class="dropdown-item d-flex align-items-center">
                                    <a href="{{ route('password.request') }}">
                                        <i class="fa-solid fa-lock-keyhole-open"></i>Đổi mật khẩu
                                    </a>
                                </li>
                                <li class="dropdown-item d-flex align-items-center">
                                    <a href="#" class="logout-link">
                                        <i class="fa-light fa-right-from-bracket"></i>Đăng xuất
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <a href="javascript:void(0)" class="btn-login login-required"
                        data-redirect="{{ route('wallet.topup') }}"></a>
                </div>
            </div>
        </div>
    </div>

    <div class="top-nav-mobile w-100 position-fixed d-none">
        <div class="wrap-logo position-relative">
            <a href="{{ route('home') }}" class="logo position-absolute"></a>
        </div>
        <ul class="btn-group d-flex align-items-center position-relative">
            <li>
                <a href="{{ route('wallet.topup') }}" class="btn-pay" title="Nạp Thẻ">
                    <span class="visually-hidden">Nạp thẻ</span>
                </a>
            </li>
            <li>
                <a href="#" class="btn-download link-download-client" title="Tải game">
                    <span class="visually-hidden">Tải game</span>
                </a>
            </li>
            <li class="position-relative">
                <button class="btn swap-menu-id" type="button" data-bs-toggle="collapse"
                    data-bs-target="#mobileMenu" aria-expanded="false" aria-controls="mobileMenu">
                    <span class="visually-hidden">Mở menu</span>
                </button>
                <ul class="collapse menu-mobile position-absolute" id="mobileMenu">
                    <li class="nav-item">
                        <a class="nav-link homepage{{ $activeClass('home') }}" href="{{ route('home') }}"
                            title="Trang chủ" data-bs-target="#1" aria-expanded="false" aria-controls="1">
                            Trang chủ
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link news{{ $activeClass('news.*') }}" href="{{ route('news.index') }}"
                            title="Tin tức" data-bs-target="#2" aria-expanded="false" aria-controls="2">
                            Tin tức
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link hero-item{{ $activeClass('characters.index') }}"
                            href="{{ route('characters.index') }}" title="Tướng" data-bs-target="#3"
                            aria-expanded="false" aria-controls="3">
                            Tướng
                        </a>
                    </li>
                    <li class="menu-mobile-bottom">
                        <a class="btn btn-link position-relative fruit" href="{{ route('devilfruits.index') }}"
                            title="Trái Ác Quỷ" data-bs-toggle="collapse" data-bs-target="#mobileFruit"
                            aria-expanded="false" aria-controls="mobileFruit">
                            Trái Ác Quỷ<i class="dropdown-icon position-absolute"></i>
                        </a>
                        <ul class="collapse social row show collapse-normal" id="mobileFruit">
                            <li class="d-flex justify-content-center col-4">
                                <a href="{{ route('devilfruits.index') }}" class="dropdown-item">Trái Ác Quỷ</a>
                            </li>
                            <li class="d-flex justify-content-center col-4">
                                <a href="{{ route('devilfruits.fusion') }}" class="dropdown-item">Trái Dung Hợp</a>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-mobile-bottom">
                        <a class="btn btn-link position-relative collapsed support" href="#" title="Hỗ trợ"
                            data-bs-toggle="collapse" data-bs-target="#mobileSupport" aria-expanded="false"
                            aria-controls="mobileSupport">
                            Hỗ trợ<i class="dropdown-icon position-absolute"></i>
                        </a>
                        <ul class="collapse social row collapse-normal" id="mobileSupport">
                            <li class="d-flex justify-content-center col-4">
                                <a href="https://www.facebook.com/haitacmanhnhat" target="_blank" rel="noopener"
                                    class="dropdown-item">Facebook</a>
                            </li>
                            <li class="d-flex justify-content-center col-4">
                                <a href="https://discord.com/invite/pRQaVmUj78" target="_blank" rel="noopener"
                                    class="dropdown-item">Discord</a>
                            </li>
                            <li class="d-flex justify-content-center col-4">
                                <a href="https://zalo.me/g/snnzqo202" target="_blank" rel="noopener"
                                    class="dropdown-item">Zalo</a>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-mobile-bottom">
                        <a class="btn btn-link position-relative community" href="#" title="Cộng Đồng">
                            Cộng Đồng<i class="dropdown-icon position-absolute"></i>
                        </a>
                        <ul class="collapse social row show collapse-normal collapse-community" id="mobileCommunity">
                            <li class="d-flex justify-content-center col-4 youtube">
                                <a href="https://www.youtube.com/@haitacmanhnhat" target="_blank" rel="noopener"
                                    class="dropdown-item">Youtube</a>
                            </li>
                            <li class="d-flex justify-content-center col-4 group">
                                <a href="https://www.facebook.com/groups/dechehaitac" target="_blank" rel="noopener"
                                    class="dropdown-item">Group cộng đồng</a>
                            </li>
                            <li class="d-flex justify-content-center col-4 tiktok">
                                <a href="https://www.tiktok.com/@haitacmanhnhat" target="_blank" rel="noopener"
                                    class="dropdown-item">Tiktok</a>
                            </li>
                            <li class="d-flex justify-content-center col-4 discord">
                                <a href="https://discord.com/invite/pRQaVmUj78" target="_blank" rel="noopener"
                                    class="dropdown-item">Discord</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</header>
