@php
    $pageTitle = 'Đăng nhập | Hải Tặc Mạnh Nhất';
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
    $pageHeading = 'Đăng nhập';
@endphp

@extends('account.layout')

@section('account-content')
    <div class="col-12 col-sm-6 wrap-form">
        <form class="form-login" method="POST">
            {!! legacy_csrf_field('id_login') !!}
            <div class="mb-3">
                <label class="form-label">Tên tài khoản</label>
                <input autocomplete="on" class="form-control" name="username" placeholder="Nhập tên tài khoản" type="text" />
            </div>
            <div class="mb-3">
                <label class="form-label">Mật khẩu</label>
                <input autocomplete="on" class="form-control" name="password" placeholder="Nhập mật khẩu" type="password" />
            </div>
            <button class="btn btn-secondary" type="submit">Đăng nhập</button>
        </form>
    </div>
@endsection
