<img src="{{ Vite::asset('resources/assets/images/logo-warning.png') }}" alt=""
    class="logo-warning position-absolute">
<div class="wrap-login-mobile wrap-login position-absolute h-100">
    <div class="user-info h-100 d-flex align-items-center d-none">
        <div class="btn-group">
            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-user"></i>
                <span class="display-name"></span>
            </button>
            <ul class="dropdown-menu">
                <li class="dropdown-item d-flex align-items-center">
                    <a href="{{ route('account.profile') }}"><i class="fa-solid fa-user"></i>Quản lý tài khoản</a>
                </li>
                <li class="dropdown-item d-flex align-items-center">
                    <a href="{{ route('wallet.topup') }}" class="d-flex justify-content-between">
                        <i><span>GEM</span><span>0</span></i>
                        <button>Nạp</button>
                    </a>
                </li>
                <li class="dropdown-item d-flex align-items-center">
                    <a href="{{ route('wallet.history') }}"><i class="fa-solid fa-clock-rotate-left"></i>Lịch sử nạp</a>
                </li>
                <li class="dropdown-item d-flex align-items-center">
                    <a href="{{ route('password.request') }}"><i class="fa-solid fa-lock-keyhole-open"></i>Đổi mật
                        khẩu</a>
                </li>
                <li class="dropdown-item d-flex align-items-center">
                    <a href="#" class="logout-link"><i class="fa-light fa-right-from-bracket"></i>Đăng xuất</a>
                </li>
            </ul>
        </div>
    </div>
    <a href="javascript:void(0)" class="btn-login login-required" data-redirect="{{ route('wallet.topup') }}"></a>
</div>
