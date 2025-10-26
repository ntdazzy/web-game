@extends('layouts.main')

@section('content')
    <div class="container py-5 legacy-fruits">
        <h1 class="mb-3 text-uppercase fw-bold">{{ $title }}</h1>
        @if (! empty($description))
            <p class="lead text-muted mb-4">{{ $description }}</p>
        @endif

        @if (empty($items))
            <div class="alert alert-info">
                Nội dung đang được cập nhật. Vui lòng quay lại sau.
            </div>
        @else
            <div class="table-responsive shadow-sm rounded bg-dark-subtle">
                <table class="table table-dark table-striped align-middle mb-0">
                    <thead>
                        <tr>
                            <th scope="col">Tên trái</th>
                            <th scope="col">Công dụng</th>
                            <th scope="col" class="text-center">Phẩm chất</th>
                            <th scope="col">Thuộc tính chính</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($items as $item)
                            <tr>
                                <td>
                                    <div class="fw-semibold">{{ $item['name'] }}</div>
                                    @if (! empty($item['info']))
                                        <small class="text-muted d-block">{{ $item['info'] }}</small>
                                    @endif
                                </td>
                                <td>{{ $item['effect'] ?? '—' }}</td>
                                <td class="text-center">{{ $item['quality'] ?? '—' }}</td>
                                <td>
                                    @if (! empty($item['properties']))
                                        <ul class="m-0 ps-3">
                                            @foreach ($item['properties'] as $property)
                                                <li>{{ $property }}</li>
                                            @endforeach
                                        </ul>
                                    @else
                                        <span class="text-muted">Đang cập nhật</span>
                                    @endif
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        @endif
    </div>
@endsection
