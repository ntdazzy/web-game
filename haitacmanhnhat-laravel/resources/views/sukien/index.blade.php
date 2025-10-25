@extends('layouts.app')

@section('content')
    <section class="section-header py-5">
        <div class="container text-center">
            <h1 class="display-5 text-uppercase fw-bold">Sự kiện</h1>
            <p class="lead text-muted mt-2">Theo dõi các sự kiện nóng nhất và đừng bỏ lỡ phần thưởng.</p>
        </div>
    </section>

    <section class="event-list container pb-5">
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
                            <p class="card-text text-muted mt-2">{{ \Illuminate\Support\Str::limit(strip_tags($post->content), 130) }}</p>
                            <time datetime="{{ optional($post->published_at)->toAtomString() }}" class="text-muted small mt-auto">
                                {{ optional($post->published_at)->translatedFormat('d/m/Y H:i') }}
                            </time>
                        </div>
                    </div>
                </article>
            @empty
                <p class="text-center">Hiện chưa có sự kiện.</p>
            @endforelse
        </div>

        <div class="mt-4">
            {{ $posts->links() }}
        </div>
    </section>
@endsection
