@php
    $pageTitle = 'Cập nhật tài khoản | Hải Tặc Mạnh Nhất';
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
    $pageHeading = 'Cập nhật tài khoản';
@endphp

@extends('account.layout')

@section('account-content')
    <div class="col-12 col-sm-6 wrap-form">
        <form class="form-change-profile" method="POST">
            {!! legacy_csrf_field('id_update_profile') !!}
            <div class="mb-3">
                <label class="form-label">Họ tên đầy đủ</label>
                <input autocomplete="off" class="form-control" name="fullname" placeholder="Nhập họ tên" type="text" value="" />
            </div>
            <div class="mb-3">
                <label class="form-label">Sinh nhật</label>
                <input autocomplete="off" class="form-control birthday" name="birthday" placeholder="Nhập mật khẩu" type="text" value="" />
            </div>
            <div class="mb-3">
                <label class="form-label d-block mb-2">Giới tính:</label>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" id="account-gender-male" name="sex" type="radio" value="1" />
                    <label class="form-check-label" for="account-gender-male">Nam</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" id="account-gender-female" name="sex" type="radio" value="2" />
                    <label class="form-check-label" for="account-gender-female">Nữ</label>
                </div>
                <div class="form-check form-check-inline">
                    <input checked class="form-check-input" id="account-gender-other" name="sex" type="radio" value="0" />
                    <label class="form-check-label" for="account-gender-other">Không xác định</label>
                </div>
            </div>
            <button class="btn btn-secondary">Cập nhật</button>
        </form>
    </div>
@endsection
