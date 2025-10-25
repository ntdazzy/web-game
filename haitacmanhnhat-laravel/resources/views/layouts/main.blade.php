@php
    $pageStyles = $pageStyles ?? [];
    $pageHeadScripts = $pageHeadScripts ?? [];
    $pageScripts = $pageScripts ?? [];
    $bodyAttributes = $bodyAttributes ?? '';
@endphp

<!DOCTYPE html>
<html lang="vi">
<head>
    @include('partials.meta', ['pageTitle' => $pageTitle ?? null, 'meta' => $meta ?? null, 'structuredData' => $structuredData ?? null])

    <link rel="stylesheet" href="{{ asset('assets/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/all.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/slick.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/slick-theme.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/daterangepicker.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/letmescroll.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/select2.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/aos.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/jquery.mCustomScrollbar.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/responsive.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/app.css') }}">

    @foreach ($pageStyles as $style)
        <link rel="stylesheet" href="{{ legacy_asset($style) }}">
    @endforeach

    @foreach ($pageHeadScripts as $headScript)
        <script src="{{ $headScript }}" nonce="{{ csp_nonce() }}"></script>
    @endforeach
</head>

<body {!! $bodyAttributes !!}>
    @include('partials.header')

    <main class="main-content">
        @yield('content')
    </main>

    @isset($showLeftMenu)
        @if ($showLeftMenu)
            @include('partials.page-slider')
        @endif
    @endisset

    @include('partials.footer')
    @include('partials.menu-fixed', ['showLeftMenu' => $showLeftMenu ?? false])

    @if (should_enable_analytics())
        @include('partials.analytics-inline')
    @endif

    @include('partials.global-config-script')

    <div id="authModal" class="auth-modal hidden" role="dialog" aria-modal="true" aria-labelledby="authModalTitle">
        <div class="backdrop absolute inset-0"></div>
        <div class="panel relative">
            <button class="close" type="button" aria-label="Đóng">&times;</button>
            <div class="tabs">
                <button class="tab-btn active" data-tab="login" type="button">Đăng Nhập</button>
                <button class="tab-btn" data-tab="register" type="button">Đăng Ký</button>
            </div>
            <form id="loginForm" class="tab-pane" data-tab="login" method="post" novalidate>
                {!! legacy_csrf_field('auth_login') !!}
                <div class="title" id="authModalTitle">Đăng Nhập</div>
                <label class="field">
                    <span class="sr-only">Tên đăng nhập</span>
                    <input name="username" type="text" class="ipt" placeholder="Tên đăng nhập" autocomplete="username" required>
                </label>
                <label class="field">
                    <span class="sr-only">Mật khẩu</span>
                    <input name="password" type="password" class="ipt" placeholder="Mật khẩu" autocomplete="current-password" required>
                </label>
                <label class="field checkbox">
                    <input type="checkbox" name="remember">
                    <span>Lưu thông tin đăng nhập</span>
                </label>
                <button class="btn w-full" type="submit">ĐĂNG NHẬP</button>
                <p class="helper">
                    Chưa có tài khoản?
                    <a href="#" class="switch" data-tab="register">Đăng kí ngay</a>
                    • <a href="/id/quen-mat-khau" class="switch-link">Quên mật khẩu?</a>
                </p>
            </form>
            <form id="registerForm" class="tab-pane hidden" data-tab="register" method="post" novalidate>
                {!! legacy_csrf_field('auth_register') !!}
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
                    <input name="password_confirm" type="password" class="ipt" placeholder="Nhập lại mật khẩu" required>
                </label>
                <label class="field checkbox">
                    <input type="checkbox" name="terms" required>
                    <span>Tôi đồng ý <a href="/tin-tuc/dieu-khoan-dich-vu" class="switch-link">Điều khoản &amp; Chính sách sử dụng</a></span>
                </label>
                <button class="btn w-full" type="submit">ĐĂNG KÝ</button>
                <p class="helper">
                    Đã có tài khoản?
                    <a href="#" class="switch" data-tab="login">Đăng nhập</a>
                </p>
            </form>
        </div>
    </div>

    <script src="{{ asset('assets/js/default/jquery-1.11.0.min.js') }}"></script>
    <script src="{{ asset('assets/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('assets/js/default/slick.min.js') }}"></script>
    <script src="{{ asset('assets/js/default/select2.full.min.js') }}"></script>
    <script src="{{ asset('assets/js/default/aos.js') }}"></script>
    <script src="{{ asset('assets/js/default/moment.min.js') }}"></script>
    <script src="{{ asset('assets/js/default/daterangepicker.min.js') }}"></script>
    <script src="{{ asset('assets/js/default/letmescroll.js') }}"></script>
    <script src="{{ asset('assets/js/default/jquery.mCustomScrollbar.js') }}"></script>
    <script src="{{ asset('assets/js/default/loadingoverlay.min.js') }}"></script>
    <script src="{{ asset('assets/js/default/sweetalert2.all.js') }}"></script>
    <script src="{{ asset('assets/js/common/scroll.js') }}"></script>
    <script src="{{ asset('assets/js/common/global.js') }}"></script>
    <script src="{{ asset('assets/js/common/custom.js') }}"></script>
    <script src="{{ asset('assets/js/auth/widget.login.js') }}"></script>
    <script src="{{ asset('assets/js/app.js') }}"></script>
    <script src="{{ asset('assets/js/auth/app-auth.js') }}"></script>
    <script src="{{ asset('assets/js/runtime/init-daterangepicker.js') }}"></script>

    @foreach ($pageScripts as $script)
        <script src="{{ $script }}" defer></script>
    @endforeach
</body>
</html>
