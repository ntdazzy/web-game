@extends('layouts.app')

@section('content')
    <section class="section-header py-5">
        <div class="container text-center">
            <h1 class="display-5 text-uppercase fw-bold">{{ $categoryTitle ?? 'Tin tức' }}</h1>
            <p class="lead text-muted mt-2">Tổng hợp thông tin mới nhất về Hải Tặc Mạnh Nhất.</p>
        </div>
    </section>

    <section class="news-list container pb-5">
        <form method="GET" action="{{ url()->current() }}" class="row g-2 mb-4">
            <div class="col-md-10">
                <input type="text" name="q" class="form-control" value="{{ request('q') }}" placeholder="Nhập từ khóa cần tìm">
            </div>
            <div class="col-md-2 d-grid">
                <button type="submit" class="btn btn-primary">Tìm kiếm</button>
            </div>
        </form>

        <div class="row g-4">
            @forelse($posts as $post)
                <article class="col-12 col-md-6 col-lg-4">
                    <div class="card h-100">
                        @if ($post->thumbnail)
                            <img src="{{ asset($post->thumbnail) }}" alt="{{ $post->title }}" class="card-img-top">
                        @endif
                        <div class="card-body d-flex flex-column">
                            <h2 class="h5 card-title">
                                <a href="{{ route('post.show', $post->slug) }}" class="stretched-link text-decoration-none">{{ $post->title }}</a>
                            </h2>
                            <p class="card-text text-muted mt-2">{{ \Illuminate\Support\Str::limit(strip_tags($post->content), 150) }}</p>
                            <time datetime="{{ optional($post->published_at)->toAtomString() }}" class="text-muted small mt-auto">
                                {{ optional($post->published_at)->translatedFormat('d/m/Y H:i') }}
                            </time>
                        </div>
                    </div>
                </article>
            @empty
                <p class="text-center">Hiện chưa có bài viết.</p>
            @endforelse
        </div>

        <div class="mt-4">
            {{ $posts->links() }}
        </div>
    </section>
@endsection
