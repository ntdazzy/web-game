@php
    $pageTitle = 'Đổi mật khẩu | Hải Tặc Mạnh Nhất';
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
    $pageHeading = 'Đổi mật khẩu';
@endphp

@extends('account.layout')

@section('account-content')
    <div class="col-12 col-sm-6">
        <form class="form-change-password" method="post">
            {!! legacy_csrf_field('id_change_password') !!}
            <div class="mb-3">
                <label class="form-label">Mật khẩu cũ</label>
                <input autocomplete="off" class="form-control" name="passwordOld" placeholder="Nhập mật khẩu cũ" type="password" />
            </div>
            <div class="mb-3">
                <label class="form-label">Mật khẩu mới</label>
                <input autocomplete="off" class="form-control" name="password1" placeholder="Nhập mật khẩu mới" type="password" />
            </div>
            <div class="mb-3">
                <label class="form-label">Nhập lại mật khẩu mới</label>
                <input autocomplete="off" class="form-control" name="password2" placeholder="Nhập lại mật khẩu mới" type="password" />
            </div>
            <button class="btn btn-secondary" type="submit">Xác nhận</button>
        </form>
    </div>
@endsection
