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
@endphp

<body {{ $bodyClass !== '' ? 'class="' . $bodyClass . '"' : '' }} {{ $pageId !== '' ? 'data-page="' . $pageId . '"' : '' }}>
    <div id="site-root">
        @include('partials.header')
        @include('partials.nav')

        <main id="main-content">
        @yield('content')
    </main>

    @include('partials.footer', ['pageId' => $pageId])
</div>

@include('partials.modals.login')

@stack('scripts')
</body>

</html>
