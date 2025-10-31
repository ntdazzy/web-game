@extends('layouts.app')

@section('content')
    <section class="container py-5 text-center">
        <h1 class="display-6 fw-bold text-warning">Giao dịch đã bị hủy</h1>
        <p class="lead text-muted">Bạn đã hủy thanh toán hoặc có lỗi xảy ra. Vui lòng thử lại.</p>
        <a href="{{ route('payment.index') }}" class="btn btn-outline-light mt-4">Thử lại</a>
    </section>
@endsection
