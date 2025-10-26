@php
    $pageTitle = 'Cập nhật email | Hải Tặc Mạnh Nhất';
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
    $pageHeading = 'Cập nhật email';
@endphp

@extends('account.layout')

@section('account-content')
    <div class="col-sm-8 col-12">
        <form class="form-update-email" method="POST">
            {!! legacy_csrf_field('id_update_email') !!}
            <input name="stepUpdateEmail" type="hidden" />
            <div class="form-update-email-1 d-none">
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input autocomplete="off" class="form-control" name="email" placeholder="Nhập email" type="email" />
                </div>
                <div class="mb-3 code-confirm d-none">
                    <label class="form-label">Mã xác thực</label>
                    <input autocomplete="off" class="form-control" name="code" placeholder="Nhập mã xác thực" type="text" />
                </div>
                <button class="btn btn-secondary" type="submit"><i class="fa-light fa-paper-plane"></i> Nhận mã xác thực</button>
            </div>
        </form>
    </div>
@endsection
