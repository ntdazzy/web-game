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

                    <div class="wrapper-hero-detail" data-character-detail data-hero-id="{{ $character->hero_id }}" data-hero-slug="{{ $character->slug }}">
                        <div class="row d-flex justify-content-center container-hero-list gx-3">
                            <div class="wrapper-hero-list">
                                <ul class="hero-list-slide listChars">
                                    @foreach ($characters as $item)
                                        <li data-name="{{ $item['name'] }}" data-particular="{{ $item['damage_type'] }}"
                                            class="{{ $item['is_active'] ? 'active' : '' }}">
                                            <a class="img-border-animated" href="{{ route('characters.show', $item['slug']) }}">
                                                <img src="{{ $item['image'] }}" alt="{{ $item['name'] }}">
                                            </a>
                                            <a href="{{ route('characters.show', $item['slug']) }}" title="{{ $item['name'] }}"
                                                class="d-block w-100 h-100">{{ $item['name'] }}</a>
                                        </li>
                                    @endforeach
                                </ul>
                            </div>

                            <div class="character-detail col d-flex flex-column align-items-center p-0">
                                <div class="nav nav-tabs justify-content-center list-skill" role="tablist">
                                    <button class="nav-link active btn-stand-skill" id="standCanvasTab" type="button"
                                        role="tab">Stand</button>
                                    <button class="nav-link btn-normal-skill" id="normalCanvasTab" type="button"
                                        role="tab">Normal</button>
                                    <button class="nav-link btn-rage-skill" id="rageCanvasTab" type="button"
                                        role="tab">Rage</button>
                                </div>

                                <div class="row d-flex justify-content-center" id="nav-stand" role="tabpanel">
                                    <div class="preview-hero-attack position-relative d-flex align-items-stretch">
                                        <div class="skill-description">
                                            <div class="normal-skill">
                                                <div class="title position-relative">
                                                    <span class="position-absolute top-0 hero-skill-name"></span>
                                                    <span class="position-absolute top-0 end-0 hero-skill-header">Kỹ năng thường</span>
                                                </div>
                                                <div class="text"></div>
                                            </div>
                                            <div class="rage-skill">
                                                <div class="title position-relative">
                                                    <span class="position-absolute top-0 hero-skill-name"></span>
                                                    <span class="position-absolute top-0 end-0 hero-skill-header">Kỹ năng nộ</span>
                                                </div>
                                                <div class="text"></div>
                                            </div>
                                        </div>

                                        <div class="canvas-wrapper d-flex flex-column align-items-center">
                                            <div class="champion position-relative d-flex align-items-center justify-content-center">
                                                <div class="loading-overlay" aria-hidden="true">
                                                    <span class="fa fa-spinner fa-3x fa-spin text-white"></span>
                                                </div>
                                                <div class="hero-name d-none"></div>
                                                <canvas id="standCanvas"></canvas>
                                                <canvas id="normalCanvas" style="display: none;"></canvas>
                                                <canvas id="rageCanvas" style="display: none;"></canvas>
                                            </div>
                                            <div class="devil-fruit">
                                                <div class="title position-relative">
                                                    <span class="position-absolute top-0 hero-skill-name"></span>
                                                    <span class="position-absolute top-0 end-0 hero-skill-header">Trái ác quỷ</span>
                                                </div>
                                                <div class="text"></div>
                                            </div>
                                        </div>

                                        <div class="talent-description">
                                            <div class="title position-relative">
                                                <span class="position-absolute top-0 hero-skill-name"></span>
                                                <span class="position-absolute top-0 end-0 hero-skill-header">Thiên phú</span>
                                            </div>
                                            <div class="text"></div>
                                        </div>

                                        <div class="info-hero-mobile">
                                            <div class="normal-skill info">
                                                <div class="title position-relative">
                                                    <span class="position-absolute top-0 end-0 hero-skill-header">Kỹ năng thường</span>
                                                </div>
                                                <div class="text"></div>
                                            </div>
                                            <div class="rage-skill info">
                                                <div class="title position-relative">
                                                    <span class="position-absolute top-0 end-0 hero-skill-header">Kỹ năng nộ</span>
                                                </div>
                                                <div class="text"></div>
                                            </div>
                                            <div class="devil-fruit info">
                                                <div class="title position-relative">
                                                    <span class="position-absolute top-0 end-0 hero-skill-header">Trái ác quỷ</span>
                                                </div>
                                                <div class="text"></div>
                                            </div>
                                            <div class="talent-description info">
                                                <div class="title position-relative">
                                                    <span class="position-absolute top-0 end-0 hero-skill-header">Thiên phú</span>
                                                </div>
                                                <div class="text"></div>
                                            </div>
                                        </div>

                                        <a href="{{ route('characters.index') }}" class="d-block btn-back-heros position-absolute"></a>
                                        <a href="{{ route('characters.index') }}" class="btn-back-heros position-absolute tablet"></a>
                                    </div>
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
