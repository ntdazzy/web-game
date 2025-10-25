@extends('layouts.app')

@section('content')
    <section class="section-header py-5">
        <div class="container text-center">
            <h1 class="display-5 text-uppercase fw-bold">Ghi chú cập nhật</h1>
            <p class="lead text-muted mt-2">Nhật ký cập nhật phiên bản và các thay đổi quan trọng.</p>
        </div>
    </section>

    <section class="update-list container pb-5">
        <div class="row g-4">
            @forelse($posts as $post)
                <article class="col-12">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
                                <div>
                                    <h2 class="h4 mb-2">
                                        <a href="{{ route('post.show', $post->slug) }}" class="text-decoration-none">{{ $post->title }}</a>
                                    </h2>
                                    <p class="text-muted mb-0">{{ \Illuminate\Support\Str::limit(strip_tags($post->content), 220) }}</p>
                                </div>
                                <time datetime="{{ optional($post->published_at)->toAtomString() }}" class="badge text-bg-secondary">
                                    {{ optional($post->published_at)->translatedFormat('d/m/Y H:i') }}
                                </time>
                            </div>
                        </div>
                    </div>
                </article>
            @empty
                <p class="text-center">Chưa có bản cập nhật nào.</p>
            @endforelse
        </div>

        <div class="mt-4">
            {{ $posts->links() }}
        </div>
    </section>
@endsection
