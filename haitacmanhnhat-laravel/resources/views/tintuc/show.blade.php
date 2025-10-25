@extends('layouts.app')

@section('content')
    <article class="post-detail container py-5">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('home') }}">Trang chủ</a></li>
                <li class="breadcrumb-item"><a href="{{ route('tintuc.index') }}">Tin tức</a></li>
                <li class="breadcrumb-item active" aria-current="page">{{ $post->title }}</li>
            </ol>
        </nav>

        <header class="mb-4 text-center">
            <h1 class="display-5 fw-bold">{{ $post->title }}</h1>
            <div class="text-muted">
                <time datetime="{{ optional($post->created_at)->toAtomString() }}">
                    {{ optional($post->created_at)->translatedFormat('d/m/Y H:i') }}
                </time>
            </div>
        </header>

        @if ($post->thumbnail)
            <figure class="mb-4 text-center">
                <img src="{{ asset($post->thumbnail) }}" alt="{{ $post->title }}" class="img-fluid rounded">
            </figure>
        @endif

        <div class="post-content prose prose-lg mx-auto text-start text-white">
            {!! $post->content !!}
        </div>
    </article>
@endsection
