<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @cspMetaTag

    <title>{{ $title ?? config('app.name', 'Hải Tặc Mạnh Nhất') }}</title>

    <link rel="icon" type="image/png" href="{{ asset('favicon.ico') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/all.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/responsive.css') }}">

    @vite(['resources/css/app.css', 'resources/js/app.js'])
    @stack('styles')
</head>
<body class="bg-dark text-light d-flex flex-column min-vh-100">
    @include('partials.header')

    <main class="flex-fill">
        @yield('content')
    </main>

    @include('partials.footer')

    <script src="{{ asset('assets/js/bootstrap.bundle.min.js') }}" defer></script>
    <script src="{{ asset('assets/js/app.js') }}" defer></script>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const toggleButtons = document.querySelectorAll('[data-modal-target]');
            const closeButtons = document.querySelectorAll('[data-modal-close]');

            const toggleModal = (modalId, show = true) => {
                const modal = document.getElementById(modalId);
                if (!modal) return;
                modal.classList.toggle('show', show);
                modal.style.display = show ? 'block' : 'none';
                document.body.classList.toggle('modal-open', show);
            };

            toggleButtons.forEach((button) => {
                button.addEventListener('click', () => {
                    toggleModal(button.getAttribute('data-modal-target'));
                });
            });

            closeButtons.forEach((button) => {
                button.addEventListener('click', () => {
                    toggleModal(button.getAttribute('data-modal-close'), false);
                });
            });

            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    document.querySelectorAll('.modal.show').forEach((modal) => {
                        toggleModal(modal.id, false);
                    });
                }
            });
        });
    </script>
    @stack('scripts')
</body>
</html>
