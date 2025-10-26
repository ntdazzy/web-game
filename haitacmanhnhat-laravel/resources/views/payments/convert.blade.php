@php
    $pageTitle = 'Từ ví vào game | Hải Tặc Mạnh Nhất';
    $meta = array_merge($meta ?? [], [
        'viewport' => 'width=device-width, initial-scale=1.0',
        'og:title' => $pageTitle,
        'description' => 'Hải Tặc Mạnh Nhất – Game nhập vai chiến thuật chủ đề One Piece. Hóa thân biến hình - Mega Mall – đấu liên server cực gắt. Sẵn sàng chinh phục?',
        'og:image' => 'assets/imgs/600x315.jpg',
        'og:image:width' => '600',
        'og:image:height' => '315',
        'facebook-domain-verification' => '6bko4jl76it4vql0pwhs6bmeudp8bo',
        'link:shortcut_icon' => 'assets/imgs/32x32.png',
    ]);
    $pageStyles = array_merge($pageStyles ?? [], ['assets/css/modules/payments.css']);
    $pageScripts = array_merge($pageScripts ?? [], ['assets/js/pages/payments.js']);
    $bodyAttributes = 'class="wrapper-subpage overflow-y-auto"';
    $legacyContent = file_get_contents(resource_path('legacy/html/nap-tu-vi-vao-game.html'));
@endphp

@extends('layouts.main')

@section('content')
    {!! legacy_html($legacyContent) !!}
@endsection
