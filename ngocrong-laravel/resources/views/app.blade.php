<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    @include('shared.head')
    @stack('head')
    @routes
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    @inertiaHead
</head>
@php
    $bodyClass = trim(data_get($page, 'props.meta.body_class', ''));
    $pageId = trim(data_get($page, 'props.meta.page_id', ''));
@endphp

<body {{ $bodyClass !== '' ? 'class="' . $bodyClass . '"' : '' }} {{ $pageId !== '' ? 'data-page="' . $pageId . '"' : '' }}>
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
