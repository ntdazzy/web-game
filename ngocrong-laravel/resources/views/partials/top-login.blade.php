<img src="{{ Vite::asset('resources/assets/images/logo-warning.png') }}" alt=""
    class="logo-warning position-absolute">
<div class="wrap-login-mobile wrap-login position-absolute h-100">
    @auth
        @php
            $account = auth()->user();
        @endphp
        <div class="user-info h-100 d-flex align-items-center">
            <div class="btn-group">
                <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-user"></i>
                    <span class="display-name">{{ $account->username }}</span>
                </button>
                <ul class="dropdown-menu">
                    <li class="dropdown-item d-flex align-items-center">
                        <a href="{{ route('account.profile') }}"><i class="fa-solid fa-user"></i>Quản lý tài khoản</a>
                    </li>
                    <li class="dropdown-item d-flex align-items-center">
                        <a href="{{ route('wallet.topup') }}" class="d-flex justify-content-between">
                            <i><span>GEM</span><span>{{ number_format($account->cash ?? 0) }}</span></i>
                            <button>Nạp</button>
                        </a>
                    </li>
                    <li class="dropdown-item d-flex align-items-center">
                        <a href="{{ route('wallet.history') }}"><i class="fa-solid fa-clock-rotate-left"></i>Lịch sử nạp</a>
                    </li>
                    <li class="dropdown-item d-flex align-items-center">
                        <a href="{{ route('account.password.edit') }}"><i class="fa-solid fa-lock-keyhole-open"></i>Đổi mật
                            khẩu</a>
                    </li>
                    <li class="dropdown-item d-flex align-items-center">
                        <form method="POST" action="{{ route('logout') }}" class="w-100">
                            @csrf
                            <button type="submit" class="bg-transparent border-0 p-0 text-start w-100 d-flex align-items-center">
                                <i class="fa-light fa-right-from-bracket me-1"></i>Đăng xuất
                            </button>
                        </form>
                    </li>
                </ul>
            </div>
        </div>
    @else
        <a href="{{ route('auth.login.vi') }}?redirect={{ urlencode(route('wallet.topup')) }}"
            class="btn-login login-required"></a>
    @endauth
</div>
