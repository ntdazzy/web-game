@extends('layouts.app')

@section('title', 'Bản cập nhật')
@section('page_id', 'landing')

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
                                    <a class="tin-tuc" href="{{ route('news.index') }}">Tin tức</a>
                                    <a class="su-kien" href="{{ route('events.index') }}">Sự kiện</a>
                                    <a class="update active" href="{{ route('landing') }}">Update</a>
                                </div>
                                <form class="search-lite search position-relative post" action="javascript:void(0);">
                                    <input type="text" placeholder="Tìm kiếm" id="search" name="search"
                                        autocomplete="off">
                                    <button type="submit" class="search-icon position-absolute"></button>
                                </form>
                            </div>
                            <ul class="posts-content d-flex flex-column gap-3">
                                @forelse ($updates as $item)
                                    <li>
                                        <a target="_self" href="{{ route('news.show', $item->slug) }}" rel="nofollow"
                                            class="title d-flex">
                                            <div class="thumbnail">
                                                @php
                                                    $cover = $item->cover_image_url ?? ($item->cover_image ?? null);
                                                @endphp
                                                <img src="{{ $cover ?? Vite::asset('resources/assets/images/post-item-example.png') }}"
                                                    onerror="this.onerror=null;this.src='{{ Vite::asset('resources/assets/images/post-item-example.png') }}';"
                                                    alt="{{ $item->title }}" width="100%" height="100%">
                                            </div>
                                            <div class="post-item-content">
                                                <h3 class="d-flex justify-content-between mb-2">
                                                    <div class="post-item-title d-flex align-items-center">
                                                        <span class="cat-name">{{ $item->category_label }}</span>
                                                        <p>{{ $item->title }}</p>
                                                    </div>
                                                    <span
                                                        class="time">{{ optional($item->published_at)->format('d-m-Y') }}</span>
                                                </h3>
                                                <p class="text-content">
                                                    {{ $item->excerpt }}
                                                </p>
                                            </div>
                                        </a>
                                    </li>
                                @empty
                                    <li class="no-data text-center text-white py-5">
                                        Chưa có bản cập nhật nào.
                                    </li>
                                @endforelse
                            </ul>
                            @if ($updates instanceof \Illuminate\Contracts\Pagination\LengthAwarePaginator)
                                <div class="pagination-wrapper">
                                    {{ $updates->withQueryString()->links() }}
                                </div>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>

        @include('partials.bottom-strip')

    </div>
@endsection
