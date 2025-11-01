<div id="authModal" class="auth-modal hidden" role="dialog" aria-modal="true" aria-labelledby="authModalTitle">
    <div class="backdrop absolute inset-0" data-auth-modal-close></div>
    <div class="panel relative">
        <button class="close" type="button" aria-label="Đóng" data-auth-modal-close>&times;</button>
        <div class="tabs">
            <button class="tab-btn active" data-tab="login" type="button" aria-pressed="true">Đăng Nhập</button>
            <button class="tab-btn" data-tab="register" type="button" aria-pressed="false">Đăng Ký</button>
        </div>

        <form id="authLoginForm" class="tab-pane" data-tab="login" method="post" novalidate
            action="{{ route('auth.login.vi.store') }}">
            @csrf
            <div class="title" id="authModalTitle">Đăng Nhập</div>
            <label class="field">
                <span class="sr-only">Tên đăng nhập hoặc email</span>
                <input name="login" type="text" class="ipt" placeholder="Tên đăng nhập" autocomplete="username" required>
            </label>
            <label class="field">
                <span class="sr-only">Mật khẩu</span>
                <input name="password" type="password" class="ipt" placeholder="Mật khẩu" autocomplete="current-password" required>
            </label>
            <label class="field checkbox">
                <input type="checkbox" name="remember" value="1">
                <span>Lưu thông tin đăng nhập</span>
            </label>
            <button class="btn w-full" type="submit">
                <span>ĐĂNG NHẬP</span>
                <span class="spinner" aria-hidden="true"></span>
            </button>
            <p class="helper">
                Chưa có tài khoản?
                <a href="#" class="switch" data-tab="register">Đăng kí ngay</a>
                • <a href="{{ route('password.request.vi') }}" class="switch-link">Quên mật khẩu?</a>
            </p>
            <p class="feedback" data-auth-feedback="login"></p>
        </form>

        <form id="authRegisterForm" class="tab-pane hidden" data-tab="register" method="post" novalidate
            action="{{ route('auth.register.vi.store') }}">
            @csrf
            <div class="title">Đăng Ký</div>
            <label class="field">
                <span class="sr-only">Tên đăng nhập</span>
                <input name="username" type="text" class="ipt" placeholder="Tên đăng nhập" autocomplete="username" required>
            </label>
            <label class="field">
                <span class="sr-only">Mật khẩu</span>
                <input name="password" type="password" class="ipt" placeholder="Mật khẩu" autocomplete="new-password" required>
            </label>
            <label class="field">
                <span class="sr-only">Nhập lại mật khẩu</span>
                <input name="password_confirmation" type="password" class="ipt" placeholder="Nhập lại mật khẩu" required>
            </label>
            <label class="field checkbox">
                <input type="checkbox" name="agree" value="1" required>
                <span>Tôi đồng ý <a href="{{ route('news.show', 'dieu-khoan-dich-vu') }}" class="switch-link">Điều khoản &amp; Chính sách sử dụng</a></span>
            </label>
            <button class="btn w-full" type="submit">
                <span>ĐĂNG KÝ</span>
                <span class="spinner" aria-hidden="true"></span>
            </button>
            <p class="helper">
                Đã có tài khoản?
                <a href="#" class="switch" data-tab="login">Đăng nhập</a>
            </p>
            <p class="feedback" data-auth-feedback="register"></p>
        </form>
    </div>
</div>
