<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    @include('shared.head')
    @stack('head')
    @vite(['resources/css/app.css', 'resources/js/app.js'])
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

        @include('partials.footer')
    </div>

    @stack('scripts')
</body>

</html>
