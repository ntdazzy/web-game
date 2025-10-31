@extends('layouts.app')

@section('title', $post->title ?? 'Bài viết')
@section('page_id', 'news-show')

@section('body_class', 'wrapper-subpage overflow-y-auto')

@section('content')
    <div id="root" class="d-flex flex-column align-items-center w-100 position-relative">
        @include('partials.top-login')

        <div class="subpage-container wrapper-id post-detail">
            <div class="container wrapper-post-detail">
                <div class="d-flex flex-column align-items-center">
                    <h1 class="page-title">Tin tức sự kiện</h1>
                    <div class="content d-flex flex-wrap aos-init aos-animate">
                        <div class="col-8 post-data">
                            <div class="breadcrums">
                                <dl>
                                    <dt><a href="{{ route('home') }}">Trang chủ</a></dt>
                                    <dt> / </dt>
                                    <dt><a href="{{ route('news.index') }}">Tin tức</a></dt>
                                    <dt> / </dt>
                                    <dt>{{ $post->title }}</dt>
                                </dl>
                            </div>

                            <div class="post-title d-flex flex-column align-items-center mb-4">
                                <h1 class="mb-1">{{ $post->title }}</h1>
                                <span class="time">
                                    {{ $post->category_label }} -
                                    {{ optional($post->published_at)->format('d-m-Y') }}
                                </span>
                            </div>
                            <div class="post-content">
                                @if (!empty($post->content))
                                    @php
                                        $contentHtml = app(\App\Support\LegacyContentRenderer::class)->render($post->content);
                                    @endphp
                                    {!! $contentHtml !!}
                                @endif
                            </div>
                        </div>

                        <div class="col-4 d-flex flex-column gap-2 hot-news-wrapper align-items-center" data-aos="fade-up">
                            <h1 class="hot-news-heading mb-2"></h1>
                            @if (!empty($relatedPosts))
                                @foreach ($relatedPosts as $related)
                                    <div class="hot-news-box d-flex flex-column mb-2">
                                        <a target="_self" href="{{ route('news.show', $related->slug) }}"
                                            title="{{ $related->title }}"
                                            class="d-flex align-items-center justify-content-center wrap-img">
                                            @php
                                                $cover = $related->cover_image_url ?? ($related->cover_image ?? null);
                                            @endphp
                                            <img src="{{ $cover ?? Vite::asset('resources/assets/images/post-item-example.png') }}"
                                                onerror="this.onerror=null;this.src='{{ Vite::asset('resources/assets/images/post-item-example.png') }}';"
                                                alt="{{ $related->title }}">
                                        </a>
                                        <div class="d-flex flex-column justify-content-center h-100 title">
                                            <a target="_self" href="{{ route('news.show', $related->slug) }}"
                                                title="{{ $related->title }}" class="text-white">{{ $related->title }}</a>
                                            <div class="datetime text-white">
                                                {{ optional($related->published_at)->format('d-m-Y') }}
                                            </div>
                                        </div>
                                    </div>
                                @endforeach
                            @else
                                <p class="text-white-50">Chưa có bài viết liên quan.</p>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>

        @include('partials.bottom-strip')

    </div>
@endsection
