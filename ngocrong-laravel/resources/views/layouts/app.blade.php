<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        @include('shared.head')
        @stack('head')
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body class="@yield('body_class', '')">
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
