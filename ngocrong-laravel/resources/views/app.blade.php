<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    @include('shared.head')
    @stack('head')
    @routes
    @vite(['resources/js/app.js'])
    @inertiaHead
</head>
@php
    $bodyClass = trim(data_get($page, 'props.meta.body_class', ''));
    $pageId = trim(data_get($page, 'props.meta.page_id', ''));
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
        @inertia
    </main>

    @include('partials.footer')
</div>

@stack('scripts')
</body>

</html>
