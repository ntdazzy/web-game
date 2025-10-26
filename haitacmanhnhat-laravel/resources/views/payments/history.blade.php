@php
    $pageTitle = 'Lịch sử nạp | Hải Tặc Mạnh Nhất';
    $meta = array_merge($meta ?? [], [
        'viewport' => 'width=device-width, initial-scale=1.0',
        'og:title' => $pageTitle,
        'description' => 'Hải Tặc Mạnh Nhất – Game nhập vai chiến thuật chủ đề One Piece. Hóa thân biến hình - Mega Mall – đấu liên server cực gắt. Sẵn sàng chinh phục?',
        'og:image' => 'assets/imgs/600x315.webp',
        'og:image:width' => '600',
        'og:image:height' => '315',
        'facebook-domain-verification' => '6bko4jl76it4vql0pwhs6bmeudp8bo',
        'link:shortcut_icon' => 'assets/imgs/32x32.webp',
    ]);
    $pageStyles = array_merge($pageStyles ?? [], ['assets/css/modules/payments.css']);
    $pageScripts = array_merge($pageScripts ?? [], ['assets/js/pages/payments.js']);
    $bodyAttributes = 'class="wrapper-subpage overflow-y-auto"';
@endphp

@extends('layouts.main')

@section('content')
    @include('payments.partials.history-content')
@endsection
