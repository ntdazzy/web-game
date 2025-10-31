<div id="loginModal" class="login-modal" aria-hidden="true">
    <div class="login-modal__backdrop" data-login-modal-close></div>
    <div class="login-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="loginModalTitle">
        <button type="button" class="login-modal__close" data-login-modal-close aria-label="Đóng"></button>

        <h2 id="loginModalTitle" class="login-modal__title">Đăng nhập</h2>

        <form method="POST" action="{{ route('login') }}" class="login-modal__form" novalidate>
            @csrf
            <div class="login-modal__field">
                <label for="loginModalUsername" class="login-modal__label">Tên đăng nhập</label>
                <div class="login-modal__input">
                    <i class="fa-light fa-user"></i>
                    <input
                        id="loginModalUsername"
                        type="text"
                        name="login"
                        placeholder="Tên đăng nhập"
                        autocomplete="username"
                        required
                    >
                </div>
                <p class="login-modal__error" data-error-for="login"></p>
            </div>

            <div class="login-modal__field">
                <label for="loginModalPassword" class="login-modal__label">Mật khẩu</label>
                <div class="login-modal__input">
                    <i class="fa-light fa-lock"></i>
                    <input
                        id="loginModalPassword"
                        type="password"
                        name="password"
                        placeholder="Mật khẩu"
                        autocomplete="current-password"
                        required
                    >
                </div>
                <p class="login-modal__error" data-error-for="password"></p>
            </div>

            <div class="login-modal__actions">
                <label class="login-modal__checkbox">
                    <input type="checkbox" name="remember" value="1">
                    <span>Lưu thông tin đăng nhập</span>
                </label>
            </div>

            <button type="submit" class="login-modal__submit">
                <span>Đăng nhập</span>
                <span class="login-modal__spinner" aria-hidden="true"></span>
            </button>

            <p class="login-modal__error login-modal__error--general" data-error-general></p>

            <div class="login-modal__links">
                <span>Chưa có tài khoản?</span>
                <a href="{{ route('register') }}">Đăng ký ngay</a>
                <span>·</span>
                <a href="{{ route('password.request') }}">Quên mật khẩu?</a>
            </div>
        </form>
    </div>
</div>
