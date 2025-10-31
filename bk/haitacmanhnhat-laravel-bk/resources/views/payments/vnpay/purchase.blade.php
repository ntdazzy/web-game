@extends('layouts.app')

@section('content')
    <section class="container py-5 text-center">
        <h1 class="display-6 fw-bold">VNPay Sandbox</h1>
        <p class="lead text-muted">
            Chưa nhận được URL chuyển hướng từ VNPay.<br>
            Kiểm tra cấu hình `VNPAY_TMN_CODE`, `VNPAY_HASH_SECRET`, `VNPAY_ENDPOINT` trong tệp `.env`.
        </p>
        @isset($error)
            <div class="alert alert-danger mt-3" role="alert">
                {{ $error }}
            </div>
        @endisset
        <a href="{{ route('payment.index') }}" class="btn btn-outline-light mt-4">Quay lại trang thanh toán</a>
    </section>
@endsection
