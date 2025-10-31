@extends('layouts.app')

@section('title', $event->title ?? 'Sự kiện')
@section('page_id', 'events-show')

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
                            <dt><a href="{{ route('events.index') }}">Sự kiện</a></dt>
                            <dt> / </dt>
                            <dt>{{ $event->title }}</dt>
                        </dl>
                    </div>

                    <div class="post-title d-flex flex-column align-items-center mb-4">
                        <h1 class="mb-1">{{ $event->title }}</h1>
                        <span class="time">
                            {{ $event->category_label ?? 'Sự kiện' }} -
                            {{ optional($event->starts_at)->format('d-m-Y') }}
                        </span>
                    </div>
                    <div class="post-content">
                        @if (!empty($event->content))
                            {!! $event->content !!}
                        @endif
                    </div>
                </div>


                
                <div class="col-4 d-flex flex-column gap-2 hot-news-wrapper align-items-center" data-aos="fade-up">
                    <h1 class="hot-news-heading mb-2"></h1>
                    @if (!empty($relatedEvents))
                        @foreach ($relatedEvents as $related)
                            <div class="hot-news-box d-flex flex-column mb-2">
                                <a target="_self" href="{{ route('events.show', $related->slug) }}" title="{{ $related->title }}" class="d-flex align-items-center justify-content-center wrap-img">
                                    @php
                                        $relatedBanner = $related->banner_url ?? $related->banner ?? null;
                                    @endphp
                                    <img src="{{ $relatedBanner ?? Vite::asset('resources/assets/images/post-item-example.png') }}" onerror="this.onerror=null;this.src='{{ Vite::asset('resources/assets/images/post-item-example.png') }}';" alt="{{ $related->title }}">
                                </a>
                                <div class="d-flex flex-column justify-content-center h-100 title">
                                    <a target="_self" href="{{ route('events.show', $related->slug) }}" title="{{ $related->title }}" class="text-white">{{ $related->title }}</a>
                                    <div class="datetime text-white">{{ optional($related->starts_at)->format('d-m-Y') }}</div>
                                </div>
                            </div>
                        @endforeach
                    @else
                        <p class="text-white-50">Chưa có sự kiện liên quan.</p>
                    @endif
                </div>
            </div>

        </div>

    </div>
</div>

        <div class="page page-4 d-flex align-items-center flex-column position-relative">
    <div class="text-slide d-flex justify-content-center w-100">
        <div id="sliderTrack" class="d-flex w-100">
            <div class="slide-item d-flex align-items-center">
                <span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span>
            </div>
            <div class="slide-item d-flex align-items-center">
                <span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span>
            </div>
            <div class="slide-item d-flex align-items-center">
                <span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span><span>HAITACMANHNHAT</span>
            </div>
        </div>
    </div>

        <div class="social" data-aos="fade-down" data-aos-once="false" data-aos-duration="900" data-aos-offset="0">
        <ul class="d-flex h-100 align-items-center">
                                <li class="trans-y">
                <a class="facebook"  href="https://www.facebook.com/haitacmanhnhat" title="Facebook" target="_blank">Facebook</a>
            </li>
                                <li class="trans-y">
                <a class="youtube"  href="https://www.youtube.com/@haitacmanhnhat" title="Youtube" target="_blank">Youtube</a>
            </li>
                                <li class="trans-y">
                <a class="group"  href="https://www.facebook.com/groups/dechehaitac" title="Facebook Group" target="_blank">Facebook Group</a>
            </li>
                                <li class="trans-y">
                <a class="tiktok"  href="https://www.tiktok.com/@haitacmanhnhat" title="Tiktok" target="_blank">Tiktok</a>
            </li>
                                <li class="trans-y">
                <a class="discord"  href="https://discord.com/invite/pRQaVmUj78" title="Discord" target="_blank">Discord</a>
            </li>
                                <li class="trans-y">
                <a class="zalo"  href="https://zalo.me/g/snnzqo202" title="Zalo" target="_blank">Zalo</a>
            </li>
                </ul>
    </div>
    </div>
@endsection
