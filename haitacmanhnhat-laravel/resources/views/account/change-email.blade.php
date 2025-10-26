@php
    $pageTitle = 'Đổi email | Hải Tặc Mạnh Nhất';
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
    $pageHeading = 'Đổi email';
@endphp

@extends('account.layout')

@section('account-content')
    <div class="col-sm-8 col-12">
        <form class="form-change-email" method="POST">
            {!! legacy_csrf_field('id_change_email') !!}
            <input name="stepChangeEmail" type="hidden" />
            <div class="mb-3 old-email">
                <label class="form-label">Email cũ</label>
                <input autocomplete="on" class="form-control" name="oldemail" placeholder="Nhập email cũ" type="email" />
            </div>
            <div class="mb-3">
                <label class="form-label">Email mới</label>
                <input autocomplete="on" class="form-control" name="email" placeholder="Nhập email mới" type="email" />
            </div>
            <div class="mb-3 code-confirm d-none">
                <label class="form-label">Mã xác thực</label>
                <input autocomplete="off" class="form-control" name="code" placeholder="Nhập mã xác thực" type="text" />
            </div>
            <button class="btn btn-secondary" type="submit"><i class="fa-light fa-paper-plane"></i> Nhận mã xác thực qua email mới</button>
        </form>
    </div>
@endsection
