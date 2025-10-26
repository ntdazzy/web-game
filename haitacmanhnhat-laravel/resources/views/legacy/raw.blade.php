@php
    $pageTitle = $pageTitle ?? ($title ?? 'Hải Tặc Mạnh Nhất');
    $meta = array_merge($meta ?? [], $metaOverrides ?? [
        'viewport' => 'width=device-width, initial-scale=1.0',
        'og:title' => $pageTitle,
        'description' => 'Hải Tặc Mạnh Nhất – Game nhập vai chiến thuật chủ đề One Piece. Hóa thân biến hình - Mega Mall – đấu liên server cực gắt. Sẵn sàng chinh phục?',
        'og:image' => 'assets/imgs/600x315.jpg',
        'og:image:width' => '600',
        'og:image:height' => '315',
        'facebook-domain-verification' => '6bko4jl76it4vql0pwhs6bmeudp8bo',
        'link:shortcut_icon' => 'assets/imgs/32x32.png',
    ]);
    $pageStyles = array_merge($pageStyles ?? [], $styles ?? []);
    $pageScripts = array_merge($pageScripts ?? [], $scripts ?? []);
    $pageHeadScripts = array_merge($pageHeadScripts ?? [], $headScripts ?? []);
    $bodyAttributes = $bodyAttributes ?? ($bodyAttr ?? 'class="wrapper-subpage overflow-y-auto"');
@endphp

@extends('layouts.main')

@section('content')
    {!! legacy_html($legacyHtml ?? '') !!}
@endsection
