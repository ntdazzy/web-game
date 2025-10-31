@extends('layouts.app')

@section('title', 'Danh sách tướng')
@section('page_id', 'heroes-index')

@section('body_class', 'wrapper-subpage overflow-y-auto')

@section('content')
    <div id="root" class="d-flex flex-column align-items-center w-100 position-relative">
        @include('partials.top-login')

        <script>
            $(document).ready(function() {
                localStorage.setItem('rightFixedMenu', 1);
            })
        </script>
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
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/senorpink-s2.png') }}')"
                                        data-name="Senor Pink-S2" data-particular="s3">
                                        <a href="{{ url('danh-sach-tuong/senor-pink-s2') }}" title="Senor Pink-S2"
                                            class="d-block w-100 h-100" data-name="Senor Pink-S2">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/senorpink-s.png') }}')"
                                        data-name="Senor Pink-S" data-particular="s3">
                                        <a href="{{ url('danh-sach-tuong/senor-pink-s') }}" title="Senor Pink-S"
                                            class="d-block w-100 h-100" data-name="Senor Pink-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/dellinger-s2.png') }}')"
                                        data-name="Dellinger-S2" data-particular="s1">
                                        <a href="{{ url('danh-sach-tuong/dellinger-s2') }}" title="Dellinger-S2"
                                            class="d-block w-100 h-100" data-name="Dellinger-S2">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/dellinger-s.png') }}')"
                                        data-name="Dellinger-S" data-particular="s1">
                                        <a href="{{ url('danh-sach-tuong/dellinger-s') }}" title="Dellinger-S"
                                            class="d-block w-100 h-100" data-name="Dellinger-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/niji-s2.png') }}')"
                                        data-name="Niji-S2" data-particular="s2">
                                        <a href="{{ url('danh-sach-tuong/niji-s2') }}" title="Niji-S2"
                                            class="d-block w-100 h-100" data-name="Niji-S2">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/yonji-s2.png') }}')"
                                        data-name="Yonji-S2" data-particular="s3">
                                        <a href="{{ url('danh-sach-tuong/yonji-s2') }}" title="Yonji-S2"
                                            class="d-block w-100 h-100" data-name="Yonji-S2">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/reiju-s2.png') }}')"
                                        data-name="Reiju-S2" data-particular="s3">
                                        <a href="{{ url('danh-sach-tuong/reiju-s2') }}" title="Reiju-S2"
                                            class="d-block w-100 h-100" data-name="Reiju-S2">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/ichiji-s2.png') }}')"
                                        data-name="Ichiji-S2" data-particular="s1">
                                        <a href="{{ url('danh-sach-tuong/ichiji-s2') }}" title="Ichiji-S2"
                                            class="d-block w-100 h-100" data-name="Ichiji-S2">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/sugar-s2.png') }}')"
                                        data-name="Sugar-S2" data-particular="s2">
                                        <a href="{{ url('danh-sach-tuong/sugar-s2') }}" title="Sugar-S2"
                                            class="d-block w-100 h-100" data-name="Sugar-S2">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/rau-trang-s2.png') }}')"
                                        data-name="Râu Trắng-S2" data-particular="s2">
                                        <a href="{{ url('danh-sach-tuong/rau-trang-s2') }}" title="Râu Trắng-S2"
                                            class="d-block w-100 h-100" data-name="Râu Trắng-S2">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/luffy-nika.png') }}')"
                                        data-name="Luffy-Nika" data-particular="s2">
                                        <a href="{{ url('danh-sach-tuong/luffy-nika') }}" title="Luffy-Nika"
                                            class="d-block w-100 h-100" data-name="Luffy-Nika">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/enel-s.png') }}')"
                                        data-name="Enel-S" data-particular="s3">
                                        <a href="{{ url('danh-sach-tuong/enel-s') }}" title="Enel-S"
                                            class="d-block w-100 h-100" data-name="Enel-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/jack-s.png') }}')"
                                        data-name="Jack-S" data-particular="s3">
                                        <a href="{{ url('danh-sach-tuong/jack-s') }}" title="Jack-S"
                                            class="d-block w-100 h-100" data-name="Jack-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/sabo-s.png') }}')"
                                        data-name="SaBo-S" data-particular="s1">
                                        <a href="{{ url('danh-sach-tuong/sabo-s') }}" title="SaBo-S"
                                            class="d-block w-100 h-100" data-name="SaBo-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/benn-beckman-s.png') }}')"
                                        data-name="Benn Beckman-S" data-particular="s1">
                                        <a href="{{ url('danh-sach-tuong/benn-beckman-s') }}" title="Benn Beckman-S"
                                            class="d-block w-100 h-100" data-name="Benn Beckman-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/rau-trang-s.png') }}')"
                                        data-name="Râu Trắng-S" data-particular="s2">
                                        <a href="{{ url('danh-sach-tuong/rau-trang-s') }}" title="Râu Trắng-S"
                                            class="d-block w-100 h-100" data-name="Râu Trắng-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/queen-s.png') }}')"
                                        data-name="Queen-S" data-particular="s2">
                                        <a href="{{ url('danh-sach-tuong/queen-s') }}" title="Queen-S"
                                            class="d-block w-100 h-100" data-name="Queen-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/king-s.png') }}')"
                                        data-name="King-S" data-particular="s1">
                                        <a href="{{ url('danh-sach-tuong/king-s') }}" title="King-S"
                                            class="d-block w-100 h-100" data-name="King-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/aramaki-s.png') }}')"
                                        data-name="Aramaki-S" data-particular="s1">
                                        <a href="{{ url('danh-sach-tuong/aramaki-s') }}" title="Aramaki-S"
                                            class="d-block w-100 h-100" data-name="Aramaki-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/oden-s.png') }}')"
                                        data-name="Oden-S" data-particular="s3">
                                        <a href="{{ url('danh-sach-tuong/oden-s') }}" title="Oden-S"
                                            class="d-block w-100 h-100" data-name="Oden-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/katakuri-s.png') }}')"
                                        data-name="Katakuri-S" data-particular="s1">
                                        <a href="{{ url('danh-sach-tuong/katakuri-s') }}" title="Katakuri-S"
                                            class="d-block w-100 h-100" data-name="Katakuri-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/aokiji-s.png') }}')"
                                        data-name="Aokiji-S" data-particular="s3">
                                        <a href="{{ url('danh-sach-tuong/aokiji-s') }}" title="Aokiji-S"
                                            class="d-block w-100 h-100" data-name="Aokiji-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/uta-s.png') }}')"
                                        data-name="Uta-S" data-particular="s3">
                                        <a href="{{ url('danh-sach-tuong/uta-s') }}" title="Uta-S"
                                            class="d-block w-100 h-100" data-name="Uta-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/luffy-s2.png') }}')"
                                        data-name="Luffy-S2" data-particular="s2">
                                        <a href="{{ url('danh-sach-tuong/luffy-s2') }}" title="Luffy-S2"
                                            class="d-block w-100 h-100" data-name="Luffy-S2">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/marco-s2.png') }}')"
                                        data-name="Marco-S2" data-particular="s1">
                                        <a href="{{ url('danh-sach-tuong/marco-s2') }}" title="Marco-S2"
                                            class="d-block w-100 h-100" data-name="Marco-S2">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/ace-s2.png') }}')"
                                        data-name="Ace-S2" data-particular="s3">
                                        <a href="{{ url('danh-sach-tuong/ace-s2') }}" title="Ace-S2"
                                            class="d-block w-100 h-100" data-name="Ace-S2">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/zoro-s2.png') }}')"
                                        data-name="Zoro-S2" data-particular="s2">
                                        <a href="{{ url('danh-sach-tuong/zoro-s2') }}" title="Zoro-S2"
                                            class="d-block w-100 h-100" data-name="Zoro-S2">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/law-s2.png') }}')"
                                        data-name="Law-S2" data-particular="s3">
                                        <a href="{{ url('danh-sach-tuong/law-s2') }}" title="Law-S2"
                                            class="d-block w-100 h-100" data-name="Law-S2">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/jinbei-s2.png') }}')"
                                        data-name="Jinbe-S2" data-particular="s1">
                                        <a href="{{ url('danh-sach-tuong/jinbe-s2') }}" title="Jinbe-S2"
                                            class="d-block w-100 h-100" data-name="Jinbe-S2">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/robin-s2.png') }}')"
                                        data-name="Nico Robin-S2" data-particular="s3">
                                        <a href="{{ url('danh-sach-tuong/nico-robin-s2') }}" title="Nico Robin-S2"
                                            class="d-block w-100 h-100" data-name="Nico Robin-S2">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/sanji-s2.png') }}')"
                                        data-name="Sanji-S2" data-particular="s2">
                                        <a href="{{ url('danh-sach-tuong/sanji-s2') }}" title="Sanji-S2"
                                            class="d-block w-100 h-100" data-name="Sanji-S2">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/boa-s2.png') }}')"
                                        data-name="Boa Hancock-S2" data-particular="s3">
                                        <a href="{{ url('danh-sach-tuong/boa-hancock-s2') }}" title="Boa Hancock-S2"
                                            class="d-block w-100 h-100" data-name="Boa Hancock-S2">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/killer-s2.png') }}')"
                                        data-name="Killer-S2" data-particular="s1">
                                        <a href="{{ url('danh-sach-tuong/killer-s2') }}" title="Killer-S2"
                                            class="d-block w-100 h-100" data-name="Killer-S2">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/chopper-s2.png') }}')"
                                        data-name="Chopper-S2" data-particular="s3">
                                        <a href="{{ url('danh-sach-tuong/chopper-s2') }}" title="Chopper-S2"
                                            class="d-block w-100 h-100" data-name="Chopper-S2">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/franky-s2.png') }}')"
                                        data-name="Franky-S2" data-particular="s1">
                                        <a href="{{ url('danh-sach-tuong/franky-s2') }}" title="Franky-S2"
                                            class="d-block w-100 h-100" data-name="Franky-S2">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/brook-s2.png') }}')"
                                        data-name="Brook-S2" data-particular="s2">
                                        <a href="{{ url('danh-sach-tuong/brook-s2') }}" title="Brook-S2"
                                            class="d-block w-100 h-100" data-name="Brook-S2">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/usopp-s2.png') }}')"
                                        data-name="Usopp-S2" data-particular="s1">
                                        <a href="{{ url('danh-sach-tuong/usopp-s2') }}" title="Usopp-S2"
                                            class="d-block w-100 h-100" data-name="Usopp-S2">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/nami-s2.png') }}')"
                                        data-name="Nami-S2" data-particular="s3">
                                        <a href="{{ url('danh-sach-tuong/nami-s2') }}" title="Nami-S2"
                                            class="d-block w-100 h-100" data-name="Nami-S2">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/dof-s2.png') }}')"
                                        data-name="Doflamingo-S2" data-particular="s2">
                                        <a href="{{ url('danh-sach-tuong/doflamingo-s2') }}" title="Doflamingo-S2"
                                            class="d-block w-100 h-100" data-name="Doflamingo-S2">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/oven-s2.png') }}')"
                                        data-name="Oven-S2" data-particular="s1">
                                        <a href="{{ url('danh-sach-tuong/oven-s2') }}" title="Oven-S2"
                                            class="d-block w-100 h-100" data-name="Oven-S2">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/shirahoshi-s2.png') }}')"
                                        data-name="Shirahoshi-S2" data-particular="s3">
                                        <a href="{{ url('danh-sach-tuong/shirahoshi-s2') }}" title="Shirahoshi-S2"
                                            class="d-block w-100 h-100" data-name="Shirahoshi-S2">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/lucci-s2.png') }}')"
                                        data-name="Lucci-S2" data-particular="s2">
                                        <a href="{{ url('danh-sach-tuong/lucci-s2') }}" title="Lucci-S2"
                                            class="d-block w-100 h-100" data-name="Lucci-S2">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/pudding-s2.png') }}')"
                                        data-name="Pudding-S2" data-particular="s3">
                                        <a href="{{ url('danh-sach-tuong/pudding-s2') }}" title="Pudding-S2"
                                            class="d-block w-100 h-100" data-name="Pudding-S2">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/charlotte-smoothie-s2.png') }}')"
                                        data-name="Smoothie-S2" data-particular="s3">
                                        <a href="{{ url('danh-sach-tuong/smoothie-s2') }}" title="Smoothie-S2"
                                            class="d-block w-100 h-100" data-name="Smoothie-S2">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/kaya-s2.png') }}')"
                                        data-name="Kaya-S2" data-particular="s3">
                                        <a href="{{ url('danh-sach-tuong/kaya-s2') }}" title="Kaya-S2"
                                            class="d-block w-100 h-100" data-name="Kaya-S2">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/cracker-s2.png') }}')"
                                        data-name="Cracker-S2" data-particular="s2">
                                        <a href="{{ url('danh-sach-tuong/cracker-s2') }}" title="Cracker-S2"
                                            class="d-block w-100 h-100" data-name="Cracker-S2">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/kaku-s') }}(1).png')"
                                        data-name="Kaku-S" data-particular="s1">
                                        <a href="{{ url('danh-sach-tuong/kaku-s') }}" title="Kaku-S"
                                            class="d-block w-100 h-100" data-name="Kaku-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/chopper-s.png') }}')"
                                        data-name="Chopper-S" data-particular="s3">
                                        <a href="{{ url('danh-sach-tuong/chopper-s') }}" title="Chopper-S"
                                            class="d-block w-100 h-100" data-name="Chopper-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/killer-s.png') }}')"
                                        data-name="Killer-S" data-particular="s1">
                                        <a href="{{ url('danh-sach-tuong/killer-s') }}" title="Killer-S"
                                            class="d-block w-100 h-100" data-name="Killer-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/boa-s.png') }}')"
                                        data-name="Boa Hancock-S" data-particular="s3">
                                        <a href="{{ url('danh-sach-tuong/boa-hancock-s') }}" title="Boa Hancock-S"
                                            class="d-block w-100 h-100" data-name="Boa Hancock-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/kaya-s') }}(1).png')"
                                        data-name="Kaya-S" data-particular="s3">
                                        <a href="{{ url('danh-sach-tuong/kaya-s') }}" title="Kaya-S"
                                            class="d-block w-100 h-100" data-name="Kaya-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/jinbei-s.png') }}')"
                                        data-name="Jinbe-S" data-particular="s1">
                                        <a href="{{ url('danh-sach-tuong/jinbe-s') }}" title="Jinbe-S"
                                            class="d-block w-100 h-100" data-name="Jinbe-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/law-s.png') }}')"
                                        data-name="Law-S" data-particular="s3">
                                        <a href="{{ url('danh-sach-tuong/law-s') }}" title="Law-S"
                                            class="d-block w-100 h-100" data-name="Law-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/robin-s.png') }}')"
                                        data-name="Nico Robin-S" data-particular="s3">
                                        <a href="{{ url('danh-sach-tuong/nico-robin-s') }}" title="Nico Robin-S"
                                            class="d-block w-100 h-100" data-name="Nico Robin-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/zoro-s.png') }}')"
                                        data-name="Zoro-S" data-particular="s2">
                                        <a href="{{ url('danh-sach-tuong/zoro-s') }}" title="Zoro-S"
                                            class="d-block w-100 h-100" data-name="Zoro-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/franky-s.png') }}')"
                                        data-name="Franky-S" data-particular="s1">
                                        <a href="{{ url('danh-sach-tuong/franky-s') }}" title="Franky-S"
                                            class="d-block w-100 h-100" data-name="Franky-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/brook-s.png') }}')"
                                        data-name="Brook-S" data-particular="s2">
                                        <a href="{{ url('danh-sach-tuong/brook-s') }}" title="Brook-S"
                                            class="d-block w-100 h-100" data-name="Brook-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/sanji-s.png') }}')"
                                        data-name="Sanji-S" data-particular="s2">
                                        <a href="{{ url('danh-sach-tuong/sanji-s') }}" title="Sanji-S"
                                            class="d-block w-100 h-100" data-name="Sanji-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/nami-s.png') }}')"
                                        data-name="Nami-S" data-particular="s3">
                                        <a href="{{ url('danh-sach-tuong/nami-s') }}" title="Nami-S"
                                            class="d-block w-100 h-100" data-name="Nami-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/usopp-s.png') }}')"
                                        data-name="Usopp-S" data-particular="s1">
                                        <a href="{{ url('danh-sach-tuong/usopp-s') }}" title="Usopp-S"
                                            class="d-block w-100 h-100" data-name="Usopp-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/lucci-s.png') }}')"
                                        data-name="Lucci-S" data-particular="s2">
                                        <a href="{{ url('danh-sach-tuong/lucci-s') }}" title="Lucci-S"
                                            class="d-block w-100 h-100" data-name="Lucci-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/shirahoshi-s.png') }}')"
                                        data-name="Shirahoshi-S" data-particular="s3">
                                        <a href="{{ url('danh-sach-tuong/shirahoshi-s') }}" title="Shirahoshi-S"
                                            class="d-block w-100 h-100" data-name="Shirahoshi-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/dof-s.png') }}')"
                                        data-name="Doflamingo-S" data-particular="s2">
                                        <a href="{{ url('danh-sach-tuong/doflamingo-s') }}" title="Doflamingo-S"
                                            class="d-block w-100 h-100" data-name="Doflamingo-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/sugar-s.png') }}')"
                                        data-name="Sugar-S" data-particular="s2">
                                        <a href="{{ url('danh-sach-tuong/sugar-s') }}" title="Sugar-S"
                                            class="d-block w-100 h-100" data-name="Sugar-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/yonji-s.png') }}')"
                                        data-name="Yonji-S" data-particular="s3">
                                        <a href="{{ url('danh-sach-tuong/yonji-s') }}" title="Yonji-S"
                                            class="d-block w-100 h-100" data-name="Yonji-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/niji-s.png') }}')"
                                        data-name="Niji-S" data-particular="s2">
                                        <a href="{{ url('danh-sach-tuong/niji-s') }}" title="Niji-S"
                                            class="d-block w-100 h-100" data-name="Niji-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/ichiji-s.png') }}')"
                                        data-name="Ichiji-S" data-particular="s1">
                                        <a href="{{ url('danh-sach-tuong/ichiji-s') }}" title="Ichiji-S"
                                            class="d-block w-100 h-100" data-name="Ichiji-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/reiju-s.png') }}')"
                                        data-name="Reiju-S" data-particular="s3">
                                        <a href="{{ url('danh-sach-tuong/reiju-s') }}" title="Reiju-S"
                                            class="d-block w-100 h-100" data-name="Reiju-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/oven-s') }}(1).png')"
                                        data-name="Oven-S" data-particular="s1">
                                        <a href="{{ url('danh-sach-tuong/oven-s') }}" title="Oven-S"
                                            class="d-block w-100 h-100" data-name="Oven-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/charlotte-smoothie-s.png') }}')"
                                        data-name="Smoothie-S" data-particular="s3">
                                        <a href="{{ url('danh-sach-tuong/smoothie-s') }}" title="Smoothie-S"
                                            class="d-block w-100 h-100" data-name="Smoothie-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/marco-s.png') }}')"
                                        data-name="Marco-S" data-particular="s1">
                                        <a href="{{ url('danh-sach-tuong/marco-s') }}" title="Marco-S"
                                            class="d-block w-100 h-100" data-name="Marco-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/pudding-s.png') }}')"
                                        data-name="Pudding-S" data-particular="s3">
                                        <a href="{{ url('danh-sach-tuong/pudding-s') }}" title="Pudding-S"
                                            class="d-block w-100 h-100" data-name="Pudding-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/cracker-s.png') }}')"
                                        data-name="Cracker-S" data-particular="s2">
                                        <a href="{{ url('danh-sach-tuong/cracker-s') }}" title="Cracker-S"
                                            class="d-block w-100 h-100" data-name="Cracker-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/luffy-s.png') }}')"
                                        data-name="Luffy-S" data-particular="s2">
                                        <a href="{{ url('danh-sach-tuong/luffy-s') }}" title="Luffy-S"
                                            class="d-block w-100 h-100" data-name="Luffy-S">
                                        </a>
                                    </li>
                                    <li style="background-image: url('{{ Vite::asset('resources/assets/files/uploads/images/heros/Avatar%20432x144/ace-s.png') }}')"
                                        data-name="Ace-S" data-particular="s3">
                                        <a href="{{ url('danh-sach-tuong/ace-s') }}" title="Ace-S"
                                            class="d-block w-100 h-100" data-name="Ace-S">
                                        </a>
                                    </li>
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
