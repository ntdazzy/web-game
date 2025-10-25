@php
    $currentRoute = request()->route()?->getName();
    $activeNav = match (true) {
        str_starts_with((string) $currentRoute, 'tintuc') || $currentRoute === 'post.show' => 'news',
        str_starts_with((string) $currentRoute, 'sukien') => 'events',
        str_starts_with((string) $currentRoute, 'update') => 'update',
        str_starts_with((string) $currentRoute, 'characters') || $currentRoute === 'character.show' => 'characters',
        default => 'home',
    };
@endphp

<header class="top-nav w-100 position-fixed">
    <div class="container d-flex w-100 h-100">
        <div class="logo position-relative h-100">
            <div class="wrap-logo position-absolute d-flex flex-column align-items-center">
                <a href="{{ route('home') }}">
                    <img src="{{ asset('assets/imgs/logo.png') }}" alt="Hải Tặc Mạnh Nhất" class="logo-img">
                </a>
            </div>
        </div>
        <div class="nav-bar position-relative">
            <img src="{{ asset('assets/imgs/menu/bg-menu-nav.png') }}" alt="Menu background" class="position-absolute top-0">
            <ul class="main-nav d-flex h-100">
                <li class="d-flex justify-content-center align-items-center homepage{{ $activeNav === 'home' ? ' active' : '' }}">
                    <a class="nav-item h-100{{ $activeNav === 'home' ? ' active' : '' }}" href="{{ route('home') }}" title="Trang chủ"></a>
                </li>
                <li class="d-flex justify-content-center align-items-center news{{ $activeNav === 'news' ? ' active' : '' }}">
                    <a class="nav-item h-100{{ $activeNav === 'news' ? ' active' : '' }}" href="{{ route('tintuc.index') }}" title="Tin tức"></a>
                </li>
                <li class="d-flex justify-content-center align-items-center events{{ $activeNav === 'events' ? ' active' : '' }}">
                    <a class="nav-item h-100{{ $activeNav === 'events' ? ' active' : '' }}" href="{{ route('sukien.index') }}" title="Sự kiện"></a>
                </li>
                <li class="d-flex justify-content-center align-items-center update{{ $activeNav === 'update' ? ' active' : '' }}">
                    <a class="nav-item h-100{{ $activeNav === 'update' ? ' active' : '' }}" href="{{ route('update.index') }}" title="Cập nhật"></a>
                </li>
                <li class="d-flex justify-content-center align-items-center hero-item{{ $activeNav === 'characters' ? ' active' : '' }}">
                    <a class="nav-item h-100{{ $activeNav === 'characters' ? ' active' : '' }}" href="{{ route('characters.index') }}" title="Tướng"></a>
                </li>
                <li class="d-flex justify-content-center align-items-center fruit">
                    <a class="nav-item h-100 d-flex align-items-center" href="#" title="Trái Ác Quỷ" data-bs-toggle="dropdown">
                        <i class="dropdown-icon position-absolute"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><a href="/trai-ac-quy" class="dropdown-item">Trái Ác Quỷ</a></li>
                        <li><a href="/trai-dung-hop" class="dropdown-item">Trái Dung Hợp</a></li>
                    </ul>
                </li>
                <li class="d-flex justify-content-center align-items-center support">
                    <a class="nav-item h-100 d-flex align-items-center" href="#" title="Hỗ trợ" data-bs-toggle="dropdown">
                        <i class="dropdown-icon position-absolute"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><a href="https://www.facebook.com/haitacmanhnhat" target="_blank" rel="noopener" class="dropdown-item">Facebook</a></li>
                        <li><a href="https://discord.com/invite/pRQaVmUj78" target="_blank" rel="noopener" class="dropdown-item">Discord</a></li>
                        <li><a href="https://zalo.me/g/snnzqo202" target="_blank" rel="noopener" class="dropdown-item">Zalo</a></li>
                    </ul>
                </li>
                <li class="d-flex justify-content-center align-items-center community">
                    <a class="nav-item h-100 d-flex align-items-center" href="#" title="Cộng Đồng" data-bs-toggle="dropdown">
                        <i class="dropdown-icon position-absolute"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li class="youtube"><a href="https://www.youtube.com/@haitacmanhnhat" target="_blank" rel="noopener" class="dropdown-item">Youtube</a></li>
                        <li class="group"><a href="https://www.facebook.com/groups/dechehaitac" target="_blank" rel="noopener" class="dropdown-item">Group cộng đồng</a></li>
                        <li class="tiktok"><a href="https://www.tiktok.com/@haitacmanhnhat" target="_blank" rel="noopener" class="dropdown-item">Tiktok</a></li>
                        <li class="discord"><a href="https://discord.com/invite/pRQaVmUj78" target="_blank" rel="noopener" class="dropdown-item">Discord</a></li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="login ms-auto">
            <div class="wrap-login position-absolute h-100 d-flex align-items-center">
                @auth
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-user me-2"></i>{{ auth()->user()->name }}
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li class="dropdown-item d-flex justify-content-between align-items-center">
                                <span>{{ auth()->user()->email }}</span>
                            </li>
                            <li>
                                <form method="POST" action="{{ route('logout') }}">
                                    @csrf
                                    <button type="submit" class="dropdown-item d-flex align-items-center gap-2">
                                        <i class="fa-regular fa-right-from-bracket"></i> Đăng xuất
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </div>
                @else
                    <a href="#" class="btn-login" data-modal-target="loginModal" aria-controls="loginModal" aria-expanded="false">
                        Đăng nhập
                    </a>
                @endauth
            </div>
        </div>
    </div>

    <div class="top-nav-backdrop"></div>
</header>

@guest
    <div id="loginModal" class="modal fade" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Đăng nhập</h5>
                    <button type="button" class="btn-close" data-modal-close="loginModal" aria-label="Đóng"></button>
                </div>
                <div class="modal-body">
                    <x-auth-session-status class="mb-3" :status="session('status')" />
                    <form method="POST" action="{{ route('login') }}" class="auth-form login-form">
                        @csrf
                        <div class="mb-3">
                            <x-input-label for="modal-email" :value="__('Email')" />
                            <x-text-input id="modal-email" class="form-control mt-1" type="email" name="email" :value="old('email')" required autofocus autocomplete="username" />
                            <x-input-error :messages="$errors->get('email')" class="mt-2 text-danger" />
                        </div>
                        <div class="mb-3">
                            <x-input-label for="modal-password" :value="__('Password')" />
                            <x-text-input id="modal-password" class="form-control mt-1" type="password" name="password" required autocomplete="current-password" />
                            <x-input-error :messages="$errors->get('password')" class="mt-2 text-danger" />
                        </div>
                        <div class="form-check mb-3">
                            <input id="remember_me" type="checkbox" class="form-check-input" name="remember">
                            <label class="form-check-label" for="remember_me">{{ __('Remember me') }}</label>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            @if (Route::has('password.request'))
                                <a class="small" href="{{ route('password.request') }}">{{ __('Forgot your password?') }}</a>
                            @endif
                            <button type="submit" class="btn btn-primary">{{ __('Log in') }}</button>
                        </div>
                    </form>
                </div>
                <div class="modal-footer justify-content-start">
                    <span>Chưa có tài khoản?</span>
                    <button type="button" class="btn btn-link p-0 ms-2" data-modal-close="loginModal" data-modal-target="registerModal">Đăng ký ngay</button>
                </div>
            </div>
        </div>
    </div>

    <div id="registerModal" class="modal fade" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Đăng ký</h5>
                    <button type="button" class="btn-close" data-modal-close="registerModal" aria-label="Đóng"></button>
                </div>
                <div class="modal-body">
                    <form method="POST" action="{{ route('register') }}" class="auth-form register-form">
                        @csrf

                        <div class="mb-3">
                            <x-input-label for="modal-name" :value="__('Name')" />
                            <x-text-input id="modal-name" class="form-control mt-1" type="text" name="name" :value="old('name')" required autocomplete="name" />
                            <x-input-error :messages="$errors->get('name')" class="mt-2 text-danger" />
                        </div>

                        <div class="mb-3">
                            <x-input-label for="modal-register-email" :value="__('Email')" />
                            <x-text-input id="modal-register-email" class="form-control mt-1" type="email" name="email" :value="old('email')" required autocomplete="username" />
                            <x-input-error :messages="$errors->get('email')" class="mt-2 text-danger" />
                        </div>

                        <div class="mb-3">
                            <x-input-label for="modal-register-password" :value="__('Password')" />
                            <x-text-input id="modal-register-password" class="form-control mt-1" type="password" name="password" required autocomplete="new-password" />
                            <x-input-error :messages="$errors->get('password')" class="mt-2 text-danger" />
                        </div>

                        <div class="mb-3">
                            <x-input-label for="modal-register-password-confirmation" :value="__('Confirm Password')" />
                            <x-text-input id="modal-register-password-confirmation" class="form-control mt-1" type="password" name="password_confirmation" required autocomplete="new-password" />
                        </div>

                        <button type="submit" class="btn btn-primary w-100">{{ __('Register') }}</button>
                    </form>
                </div>
                <div class="modal-footer justify-content-start">
                    <span>Đã có tài khoản?</span>
                    <button type="button" class="btn btn-link p-0 ms-2" data-modal-close="registerModal" data-modal-target="loginModal">Đăng nhập</button>
                </div>
            </div>
        </div>
    </div>
@endguest
