@php
    $pageTitle = trim($__env->yieldContent('title'));
    $titleSuffix = config('app.name', 'Laravel');
@endphp

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="csrf-token" content="{{ csrf_token() }}">
<title>{{ $pageTitle ? "{$pageTitle} | {$titleSuffix}" : $titleSuffix }}</title>

<meta name="description" content="@yield('meta_description', 'Hải Tặc Mạnh Nhất - Official Portal')">
<meta property="og:title" content="@yield('og_title', $pageTitle ?: $titleSuffix)">
<meta property="og:description" content="@yield('og_description', 'Hải Tặc Mạnh Nhất - Official Portal')">
<meta property="og:type" content="@yield('og_type', 'website')">
<meta property="og:url" content="@yield('og_url', config('app.url'))">
<meta property="og:image" content="@yield('og_image', Vite::asset('resources/assets/images/og-default.jpg'))">
<meta name="twitter:card" content="@yield('twitter_card', 'summary_large_image')">

<link rel="canonical" href="@yield('canonical', url()->current())">
<link rel="icon" type="image/png" sizes="32x32"
    href="{{ Vite::asset('resources/assets/images/favicon-32x32.png') }}">

@stack('meta')
