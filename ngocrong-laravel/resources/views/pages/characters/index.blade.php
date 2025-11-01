@extends('layouts.app')

@section('title', 'Danh sách tướng')
@section('page_id', 'characters-index')

@section('body_class', 'wrapper-subpage overflow-y-auto')

@section('content')
    <div id="root" class="d-flex flex-column align-items-center w-100 position-relative">
        @include('partials.top-login')

        <div class="subpage-container wrapper-id wrapper-hero">
            <div class="h-100 position-relative full-container">
                <div class="d-flex flex-column">
                    <div class="d-flex justify-content-center">
                        <h1 class="page-title">DANH SÁCH TƯỚNG</h1>
                    </div>
                    <div class="container-fluid">
                        <div class="row content d-flex">
                            <div class="filter-box d-flex flex-column mb-5">
                                <div class="filter-type-attack d-flex align-items-center">
                                    <h3 class="fw-bold mb-0 me-4">LOẠI DAME</h3>
                                    <ul class="d-flex">
                                        <li class="btn-search-hero btn-all-skill active"><a href="#"
                                                class="d-block w-100 h-100" data-particular="s0">Tất cả</a></li>
                                        <li class="btn-search-hero btn-physics-skill"><a href="#"
                                                class="d-block w-100 h-100" data-particular="s1">Vật công</a></li>
                                        <li class="btn-search-hero btn-last-skill"><a href="#"
                                                class="d-block w-100 h-100" data-particular="s2">Tuyệt chiêu</a></li>
                                        <li class="btn-search-hero btn-magic-skill"><a href="#"
                                                class="d-block w-100 h-100" data-particular="s3">Ma công</a></li>
                                    </ul>
                                </div>
                                <div class="filter-type-name d-flex align-items-center">
                                    <h3 class="fw-bold mb-0 me-3">TÌM TƯỚNG</h3>
                                    <div class="position-relative search-hero">
                                        <input type="text" class="fst-italic text-search" placeholder="Tên Tướng"
                                            autocomplete="off">
                                        <i class="fa-light fa-magnifying-glass search-icon-fa"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="hero-list">
                                <ul class="d-flex flex-wrap gap-4 listChars">
                                    @forelse ($characters as $character)
                                        <li style="background-image: url('{{ $character['image'] }}')"
                                            data-name="{{ $character['name'] }}"
                                            data-particular="{{ $character['damage_type'] }}">
                                            <a href="{{ route('characters.show', $character['slug']) }}" title="{{ $character['name'] }}"
                                                class="d-block w-100 h-100" data-name="{{ $character['name'] }}">
                                            </a>
                                        </li>
                                    @empty
                                        <li class="text-center text-white py-5 w-100">Hiện chưa có dữ liệu tướng.</li>
                                    @endforelse
                                </ul>
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
