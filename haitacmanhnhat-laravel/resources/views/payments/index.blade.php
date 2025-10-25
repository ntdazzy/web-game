@extends('layouts.app')

@section('content')
    <section class="container py-5">
        <h1 class="display-5 fw-bold mb-4">Nạp Hải Tặc Mạnh Nhất</h1>
        <p class="lead text-muted mb-5">Chọn cổng thanh toán phù hợp để hoàn tất giao dịch của bạn.</p>

        <div class="row g-4">
            <div class="col-md-6">
                <div class="card h-100 shadow-sm">
                    <div class="card-body">
                        <h2 class="h4">Stripe Checkout</h2>
                        <p>Thanh toán quốc tế qua thẻ Visa/Master/JCB. Đây là cấu hình mẫu, vui lòng thay bằng thông tin thực tế trước khi vận hành.</p>
                        <a href="{{ route('payment.stripe.checkout') }}" class="btn btn-primary mt-3">Tạo phiên Stripe</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card h-100 shadow-sm">
                    <div class="card-body">
                        <h2 class="h4">VNPay</h2>
                        <p>Tích hợp cổng VNPay thông qua Omnipay. Ví dụ minh họa sử dụng Sandbox.</p>
                        <form method="POST" action="{{ route('payment.vnpay') }}">
                            @csrf
                            <div class="mb-3">
                                <label for="amount" class="form-label">Số tiền (VND)</label>
                                <input type="number" class="form-control" id="amount" name="amount" value="100000" min="10000" step="1000">
                            </div>
                            <button type="submit" class="btn btn-outline-primary">Thanh toán VNPay</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
