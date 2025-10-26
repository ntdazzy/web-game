@php
    $pageTitle = 'Thông tin tài khoản | Hải Tặc Mạnh Nhất';
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
    $pageHeading = 'Thông tin tài khoản';
    $pageIntro = 'Bạn có thể cập nhật các thông tin công khai tại đây, hệ thống sẽ tự động kết nối với các tài khoản game khác';
    $pageAlert = 'Để bảo mật tài khoản của bạn, hãy sớm cập nhật đầy đủ thông tin cá nhân để đảm bảo quyền lợi cho bạn!';
@endphp

@extends('account.layout')

@section('account-content')
    <div class="user-table">
        <div class="row align-items-center info-row">
            <div class="col-4 label-text">Hình đại diện</div>
            <div class="col-6 value-text">
                <img alt="Avatar" class="avatar-img" src="{{ legacy_asset('assets/imgs/avatar.webp') }}" />
            </div>
            <div class="col-2 text-center p-0"></div>
        </div>
        <div class="row align-items-center info-row">
            <div class="col-4 label-text d-flex align-items-center"><i class="fa-light fa-signature"></i>Họ tên</div>
            <div class="col-6 value-text display-name">Guess</div>
            <div class="col-2 text-center p-0">
                <a class="action-link" href="{{ route('account.update-profile') }}">Cập nhật</a>
            </div>
        </div>
        <div class="row align-items-center info-row">
            <div class="col-4 label-text d-flex align-items-center"><i class="fa-light fa-calendar-days"></i>Sinh nhật</div>
            <div class="col-6 value-text display-birthday"></div>
            <div class="col-2 text-center p-0">
                <a class="action-link" href="{{ route('account.update-profile') }}">Cập nhật</a>
            </div>
        </div>
        <div class="row align-items-center info-row">
            <div class="col-4 label-text d-flex align-items-center"><i class="fa-light fa-venus-mars"></i>Giới tính</div>
            <div class="col-6 value-text display-sex"></div>
            <div class="col-2 text-center p-0">
                <a class="action-link" href="{{ route('account.update-profile') }}">Cập nhật</a>
            </div>
        </div>
        <div class="row align-items-center info-row">
            <div class="col-4 label-text d-flex align-items-center"><i class="fa-light fa-envelope"></i>Email</div>
            <div class="col-6 value-text display-email">Guess</div>
            <div class="col-2 text-center p-0">
                <a class="action-link" href="{{ route('account.update-email') }}">Cập nhật</a>
            </div>
        </div>
        <div class="row align-items-center info-row">
            <div class="col-4 label-text d-flex align-items-center"><i class="fa-light fa-phone"></i>Số điện thoại</div>
            <div class="col-6 value-text display-phone"></div>
            <div class="col-2 text-center p-0">
                <a class="action-link" href="{{ route('account.login') }}">Cập nhật</a>
            </div>
        </div>
    </div>
@endsection
