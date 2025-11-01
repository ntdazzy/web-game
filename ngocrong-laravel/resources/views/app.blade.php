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
    <div id="site-root">
        @include('partials.header')
        @include('partials.nav')

        <main id="main-content">
        @inertia
    </main>

    @include('partials.footer')
</div>

@include('partials.modals.login')

@stack('scripts')
</body>

</html>
