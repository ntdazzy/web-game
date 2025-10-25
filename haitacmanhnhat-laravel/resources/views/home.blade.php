@extends('layouts.app')

@section('content')
    <section class="hero-banner position-relative text-center text-white">
        <img src="{{ asset('assets/images/background.png') }}" alt="" class="w-100 img-fluid hero-background">
        <div class="hero-overlay position-absolute top-50 start-50 translate-middle">
            <h1 class="display-4 fw-bold">Chào mừng đến với Hải Tặc Mạnh Nhất</h1>
            <p class="lead">Cập nhật tin tức, sự kiện và tướng mới nhất mỗi ngày.</p>
            <div class="d-flex justify-content-center gap-3 mt-4">
                <a href="{{ route('tintuc.index') }}" class="btn btn-primary px-4">Xem tin mới</a>
                <a href="{{ route('characters.index') }}" class="btn btn-outline-light px-4">Khám phá tướng</a>
            </div>
        </div>
    </section>

    <section class="latest-news container py-5">
        <header class="d-flex align-items-center justify-content-between mb-4">
            <h2 class="h3 mb-0 text-uppercase fw-semibold">Tin mới nhất</h2>
            <a href="{{ route('tintuc.index') }}" class="text-decoration-none">Xem tất cả</a>
        </header>

        <div class="row g-4">
            @forelse($latestPosts as $post)
                <article class="col-12 col-md-6 col-lg-4">
                    <div class="card h-100 shadow-sm">
                        @if ($post->thumbnail)
                            <img src="{{ asset($post->thumbnail) }}" class="card-img-top" alt="{{ $post->title }}">
                        @endif
                        <div class="card-body d-flex flex-column">
                            <span class="badge bg-primary mb-2 text-uppercase">{{ $post->category }}</span>
                            <h3 class="h5 card-title"><a href="{{ route('post.show', $post->slug) }}" class="stretched-link text-decoration-none text-dark">{{ $post->title }}</a></h3>
                            <p class="card-text text-body-secondary mt-2">{{ \Illuminate\Support\Str::limit(strip_tags($post->content), 120) }}</p>
                            <time datetime="{{ optional($post->published_at)->toAtomString() }}" class="mt-auto text-muted small">
                                {{ optional($post->published_at)->translatedFormat('d/m/Y H:i') }}
                            </time>
                        </div>
                    </div>
                </article>
            @empty
                <p class="text-center">Chưa có bài viết nào.</p>
            @endforelse
        </div>
    </section>
@endsection
