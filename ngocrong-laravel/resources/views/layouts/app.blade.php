<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    @include('shared.head')
    @stack('head')
    @vite(['resources/js/app.js'])
</head>
@php
    $bodyClass = trim($__env->yieldContent('body_class'));
    $pageId = trim($__env->yieldContent('page_id'));
    $loginRoute = route('auth.login.vi');
@endphp

<body {{ $bodyClass !== '' ? 'class="' . $bodyClass . '"' : '' }} {{ $pageId !== '' ? 'data-page="' . $pageId . '"' : '' }}
    data-login-route="{{ $loginRoute }}">
    <div id="pageLoadingOverlay" class="page-loading-overlay" role="status" aria-live="polite"
        aria-label="Đang tải nội dung">
        <div class="page-loading-overlay__spinner" aria-hidden="true"></div>
    </div>
    <div id="site-root">
        @include('partials.header')
        @include('partials.nav')

        <main id="main-content">
        @yield('content')
    </main>

    @include('partials.footer', ['pageId' => $pageId])
</div>

@include('partials.modals.auth')

@stack('scripts')
</body>

</html>
