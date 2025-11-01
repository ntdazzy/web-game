@extends('layouts.app')

@section('title', $character->name . ' | Danh sách tướng')
@section('page_id', 'characters-show')
@section('body_class', 'wrapper-subpage overflow-y-auto')

@section('content')
    <div id="root" class="d-flex flex-column align-items-center w-100 position-relative">
        @include('partials.top-login')

        <div class="subpage-container wrapper-id wrapper-hero detail">
            <div class="h-100 position-relative full-container">
                <div class="d-flex flex-column">
                    <div class="d-flex justify-content-center wrapper-hero-header flex-column flex-sm-row align-items-sm-center mb-3">
                        <h1 class="page-title me-sm-4 mb-2 mb-sm-0">DANH SÁCH TƯỚNG</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb mb-0">
                                <li class="breadcrumb-item"><a href="{{ route('home') }}">Trang chủ</a></li>
                                <li class="breadcrumb-item"><a href="{{ route('characters.index') }}">Danh sách tướng</a></li>
                                <li class="breadcrumb-item active" aria-current="page">{{ $character->name }}</li>
                            </ol>
                        </nav>
                    </div>

                    <div class="filter-box d-flex flex-column align-items-center mb-4">
                        <div class="filter-type-name d-flex align-items-center mb-3">
                            <h3 class="fw-bold mb-0 me-3">TÌM TƯỚNG</h3>
                            <div class="position-relative search-hero">
                                <input type="text" class="fst-italic text-search" placeholder="Tên Tướng" autocomplete="off">
                                <i class="fa-light fa-magnifying-glass search-icon-fa"></i>
                            </div>
                        </div>
                        <div class="filter-type-attack d-flex align-items-center">
                            <h3 class="fw-bold mb-0 me-4">LOẠI DAME</h3>
                            <ul class="d-flex">
                                <li class="btn-search-hero btn-all-skill active"><a href="#" class="d-block w-100 h-100"
                                        data-particular="s0">Tất cả</a></li>
                                <li class="btn-search-hero btn-physics-skill"><a href="#" class="d-block w-100 h-100"
                                        data-particular="s1">Vật công</a></li>
                                <li class="btn-search-hero btn-last-skill"><a href="#" class="d-block w-100 h-100"
                                        data-particular="s2">Tuyệt chiêu</a></li>
                                <li class="btn-search-hero btn-magic-skill"><a href="#" class="d-block w-100 h-100"
                                        data-particular="s3">Ma công</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="wrapper-hero-detail">
                        <div class="row d-flex justify-content-center container-hero-list gx-3">
                            <div class="wrapper-hero-list">
                                <ul class="hero-list-slide listChars">
                                    @foreach ($characters as $item)
                                        <li data-name="{{ $item['name'] }}" data-particular="{{ $item['damage_type'] }}"
                                            class="{{ $item['is_active'] ? 'active' : '' }}">
                                            <a class="img-border-animated"
                                                href="{{ route('characters.show', $item['slug']) }}">
                                                <img src="{{ $item['image'] }}" alt="{{ $item['name'] }}">
                                            </a>
                                            <a href="{{ route('characters.show', $item['slug']) }}" title="{{ $item['name'] }}"
                                                class="d-block w-100 h-100">{{ $item['name'] }}</a>
                                        </li>
                                    @endforeach
                                </ul>
                            </div>

                            <div class="preview-hero-attack position-relative d-flex flex-column align-items-center justify-content-center">
                                <div class="champion d-flex align-items-center justify-content-center">
                                    <img src="{{ $character->image_url ?? Vite::asset('resources/assets/images/post-item-example.png') }}"
                                        alt="{{ $character->name }}" class="img-fluid">
                                </div>
                                <a class="btn-back-heros mt-4" href="{{ route('characters.index') }}">Trở lại danh sách</a>
                            </div>

                            <div class="hero-description">
                                <div class="hero-description__header d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
                                    <h2 class="text-uppercase mb-2 mb-md-0">{{ $character->name }}</h2>
                                    @if (!empty($damageTypeLabel))
                                        <span class="badge text-bg-warning text-uppercase">{{ $damageTypeLabel }}</span>
                                    @endif
                                </div>
                                <p class="lead text-white-75 mb-4">
                                    Thông tin kỹ năng và hoạt ảnh của tướng đang được cập nhật. Hãy quay lại sau để xem chi
                                    tiết đầy đủ.
                                </p>
                                <div class="hero-description__placeholder">
                                    <p class="mb-2 text-white-50">• Sức mạnh: đang cập nhật</p>
                                    <p class="mb-2 text-white-50">• Hệ kỹ năng: đang cập nhật</p>
                                    <p class="mb-0 text-white-50">• Đội hình gợi ý: đang cập nhật</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        @include('partials.bottom-strip')
    </div>
@endsection

@push('scripts')
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            localStorage.setItem('rightFixedMenu', '1');
        });
    </script>
@endpush
