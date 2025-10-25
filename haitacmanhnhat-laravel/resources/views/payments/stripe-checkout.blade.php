@extends('layouts.app')

@section('content')
    <section class="container py-5 text-center">
        <h1 class="display-6 fw-bold mb-3">Stripe chưa sẵn sàng</h1>
        <p class="lead text-muted">
            Chưa cấu hình khóa Stripe (`STRIPE_KEY`, `STRIPE_SECRET`).<br>
            Vui lòng cập nhật `.env` rồi truy cập lại trang này để tạo phiên thanh toán.
        </p>
        <a href="{{ route('payment.index') }}" class="btn btn-outline-light mt-4">Quay lại trang thanh toán</a>
    </section>
@endsection
