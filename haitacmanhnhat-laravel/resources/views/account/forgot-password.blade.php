@php
    $pageTitle = 'Quên mật khẩu | Hải Tặc Mạnh Nhất';
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
    $pageHeading = 'Quên mật khẩu';
@endphp

@extends('account.layout')

@section('account-content')
    <div class="col-12 col-sm-6 wrap-form">
        <form class="form-forget-password" method="POST">
            {!! legacy_csrf_field('id_forgot_password') !!}
            <div class="mb-3">
                <label class="form-label">Tên tài khoản</label>
                <input autocomplete="on" class="form-control" name="username" placeholder="Nhập tên tài khoản" type="text" />
            </div>
            <div class="mb-3">
                <label class="form-label">Email đã đăng ký</label>
                <input autocomplete="on" class="form-control" name="email" placeholder="Nhập email đã đăng ký" type="email" />
            </div>
            <button class="btn btn-secondary mb-3" type="submit">Xác nhận</button>
            <div class="mb-2">
                <a class="text-primary" href="{{ route('account.reset-password') }}">Tôi đã nhận được mã Đặt lại mật khẩu</a>
            </div>
        </form>
    </div>
@endsection
