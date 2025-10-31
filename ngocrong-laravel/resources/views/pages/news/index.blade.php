@extends('layouts.app')

@section('title', 'Tin tức')
@section('page_id', 'news-index')

@section('body_class', 'wrapper-subpage overflow-y-auto')

@section('content')
<div id="root" class="d-flex flex-column align-items-center w-100 position-relative">
        @include('partials.top-login')

        
<div class="subpage-container wrapper-id post">
    <div class="container h-100 position-relative">
        <div class="d-flex flex-column align-items-center">
            <h1 class="page-title">Tin tức sự kiện</h1>
            <div class="listNews w-100">
                <div class="tabs-post">
                    <div class="action d-flex">
                        
                        <div class="btn-group d-flex gap-3">
                            <a class="tin-tuc{{ ($activeType ?? 'news') === 'news' ? ' active' : '' }}" href="{{ route('news.index') }}">
                                Tin tức
                            </a>
                            <a class="su-kien" href="{{ route('events.index') }}">
                                Sự kiện
                            </a>
                            <a class="update{{ ($activeType ?? 'news') === 'update' ? ' active' : '' }}" href="{{ route('news.index', ['type' => 'update']) }}">
                                Update
                            </a>
                        </div>
                        <form class="search-lite search position-relative post" method="get" action="{{ route('news.index') }}">

                            <input type="text" placeholder="Tìm kiếm" id="search" name="search" value="{{ request('search') }}" autocomplete="off">
                            <button type="submit" class="search-icon position-absolute"></button>
                        </form>
                    </div>
                    <ul class="posts-content d-flex flex-column gap-3">
                        @forelse ($posts as $item)
                            <li>
                                <a target="_self" href="{{ route('news.show', $item->slug) }}" rel="nofollow" class="title d-flex">
                                    <div class="thumbnail">
                                        @php
                                            $cover = $item->cover_image_url ?? $item->cover_image ?? null;
                                        @endphp
                                        <img
                                            src="{{ $cover ?? Vite::asset('resources/assets/images/post-item-example.png') }}"
                                            onerror="this.onerror=null;this.src='{{ Vite::asset('resources/assets/images/post-item-example.png') }}';"
                                            alt="{{ $item->title }}"
                                            width="100%"
                                            height="100%"
                                        >
                                    </div>
                                    <div class="post-item-content">
                                        <h3 class="d-flex justify-content-between mb-2">
                                            <div class="post-item-title d-flex align-items-center">
                                                <span class="cat-name">{{ $item->category_label }}</span>
                                                <p>{{ $item->title }}</p>
                                            </div>
                                            <span class="time">{{ optional($item->published_at)->format('d-m-Y') }}</span>
                                        </h3>
                                        <p class="text-content">
                                            {{ $item->excerpt }}
                                        </p>
                                    </div>
                                </a>
                            </li>
                        @empty
                            <li class="no-data text-center text-white py-5">
                                Chưa có bài viết nào được đăng.
                            </li>
                        @endforelse
                    </ul>
                    @if ($posts instanceof \Illuminate\Contracts\Pagination\LengthAwarePaginator)
                        <div class="pagination-wrapper">
                            {{ $posts->withQueryString()->links() }}
                        </div>
                    @endif

                    </div>
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
