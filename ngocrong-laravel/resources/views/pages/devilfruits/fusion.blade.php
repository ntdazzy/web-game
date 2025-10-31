@extends('layouts.app')

@section('title', 'Trái Dung Hợp')
@section('page_id', 'devilfruits-fusion')

@section('body_class', 'wrapper-subpage overflow-y-auto')

@section('content')
    <div id="root" class="d-flex flex-column align-items-center w-100 position-relative">
        @include('partials.top-login')

        <div class="subpage-container wrapper-id devil-fruit">
            <div class="container h-100 position-relative">
                <div class="d-flex flex-column align-items-center">
                    <h1 class="page-title">TRÁI DUNG HỢP</h1>
                    <div class="row wrapper-content w-100">
                        <div class="content p-0">
                            
                            <div class="filter-box d-flex justify-content-center align-items-center">
                                <div class="filter-type-name d-flex align-items-center">
                                    <h3 class="fw-bold mb-0 me-3 name">TÌM TRÁI</h3>
                                    <div class="position-relative search-fruit">
                                        <input type="text" class="fst-italic text-search" placeholder="Tên Trái"
                                            autocomplete="off">
                                        <i class="fa-light fa-magnifying-glass search-icon-fa"></i>
                                    </div>
                                </div>
                                <div class="filter-type-attack d-flex align-items-center">
                                    <h3 class="fw-bold mb-0 me-md-4">LOẠI</h3>
                                    <ul class="d-flex flex-wrap">
                                        <li class="btn-search-devil">
                                            <a href="#" class="d-block w-100 h-100 btn-filter tat-ca active"
                                                data-effect="tat-ca"></a>
                                        </li>
                                        <li class="btn-search-devil">
                                            <a href="#" class="d-block w-100 h-100 btn-filter khong-che"
                                                data-effect="khong-che"></a>
                                        </li>
                                        <li class="btn-search-devil">
                                            <a href="#" class="d-block w-100 h-100 btn-filter giam-sat-thuong"
                                                data-effect="giam-sat-thuong"></a>
                                        </li>
                                        <li class="btn-search-devil">
                                            <a href="#" class="d-block w-100 h-100 btn-filter no-ban-dau"
                                                data-effect="no-ban-dau"></a>
                                        </li>
                                        <li class="btn-search-devil">
                                            <a href="#" class="d-block w-100 h-100 btn-filter sat-thuong"
                                                data-effect="sat-thuong"></a>
                                        </li>
                                        <li class="btn-search-devil">
                                            <a href="#" class="d-block w-100 h-100 btn-filter mien-dich"
                                                data-effect="mien-dich"></a>
                                        </li>
                                        <li class="btn-search-devil">
                                            <a href="#" class="d-block w-100 h-100 btn-filter tra-lai"
                                                data-effect="tra-lai"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="wrapper-devil-fruit d-flex">
                                <div class="list-fruit">
                                    <div class='wrapper-bg'>
                                        <ul class="d-flex flex-wrap" id='fruit-list'>
                                            <script>
                                                window.domainDownload = "{{ rtrim($downloadBase, '/') }}/";
                                                window.fruits = @json($fruits, JSON_UNESCAPED_UNICODE);
                                                window.staticAssets = @json($assetPaths, JSON_UNESCAPED_UNICODE);
                                                const fruits = window.fruits;
                                                window.perPage = 8;
                                                window.currentPage = 1;
                                                const perPage = window.perPage;
                                                let currentPage = window.currentPage;
                                            </script>
                                        </ul>
                                        <div id="pagination"></div>
                                    </div>
                                </div>
                                <div class="fruit-detail">
                                    <div class='wrap-content position-relative'>
                                        <div class='title position-absolute start-50'>Trái dung hợp</div>
                                        <div class='content'>
                                            <div class="name d-flex flex-column"></div>
                                            <div class='thumb'></div>
                                            <br>
                                            <div class='text-group d-flex'>
                                                <span>Phẩm chất:&nbsp;</span>
                                                <div class='text-content quality'></div>
                                            </div>
                                            <div class='text-group d-flex'>
                                                <span>Loại:&nbsp;</span>
                                                <div class='text-content effect'></div>
                                            </div>
                                            <div class='text-group'>
                                                <span>Thuộc tính:&nbsp;</span>
                                                <div class='text-content property'></div>
                                            </div>
                                            <div class='text-group'>
                                                <div class='text-content info'></div>
                                            </div>
                                        </div>
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
