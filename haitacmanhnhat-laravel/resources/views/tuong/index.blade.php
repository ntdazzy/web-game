@extends('layouts.app')

@section('content')
    <section class="characters-hero py-5">
        <div class="container text-center">
            <h1 class="display-4 fw-bold text-uppercase">Danh sách tướng</h1>
            <p class="lead text-muted">Khám phá sức mạnh của từng thuyền viên trong Hải Tặc Mạnh Nhất.</p>
        </div>
    </section>

    <section class="characters-grid container pb-5">
        <div class="row g-4">
            @forelse($characters as $character)
                <article class="col-12 col-sm-6 col-lg-3">
                    <div class="card h-100 text-center">
                        @if ($character->thumbnail)
                            <img src="{{ asset($character->thumbnail) }}" alt="{{ $character->name }}" class="card-img-top">
                        @endif
                        <div class="card-body d-flex flex-column">
                            <h2 class="h5">{{ $character->name }}</h2>
                            <p class="text-muted flex-grow-1">{{ \Illuminate\Support\Str::limit($character->description, 90) }}</p>
                            <a href="{{ route('character.show', $character->slug) }}" class="btn btn-outline-primary mt-3">Chi tiết</a>
                        </div>
                    </div>
                </article>
            @empty
                <p class="text-center">Danh sách tướng đang được cập nhật.</p>
            @endforelse
        </div>

        <div class="mt-4">
            {{ $characters->links() }}
        </div>
    </section>
@endsection
