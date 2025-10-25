@extends('layouts.app')

@section('content')
    <section class="container py-5">
        <h1 class="display-6 fw-bold mb-4">Kết quả thanh toán VNPay</h1>
        <p class="text-muted">Các tham số trả về từ VNPay (Sandbox):</p>

        <div class="table-responsive">
            <table class="table table-dark table-striped align-middle">
                <thead>
                    <tr>
                        <th scope="col">Tham số</th>
                        <th scope="col">Giá trị</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($query as $key => $value)
                        <tr>
                            <td>{{ $key }}</td>
                            <td>{{ is_array($value) ? json_encode($value) : $value }}</td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="2">Không có dữ liệu trả về.</td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>

        <a href="{{ route('payment.index') }}" class="btn btn-outline-light mt-4">Quay lại trang thanh toán</a>
    </section>
@endsection
