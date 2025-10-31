@php
    $pageStyles = array_merge($pageStyles ?? [], ['assets/css/modules/payments.css']);
    $bodyAttributes = $bodyAttributes ?? 'class="wrapper-subpage overflow-y-auto"';
@endphp

@extends('layouts.main')

@section('content')
    <div class="d-flex flex-column align-items-center w-100 position-relative" id="root">
        <img alt="" class="logo-warning position-absolute" src="{{ legacy_asset('/assets/imgs/logo-warning.png') }}" />
        <div class="wrap-login-mobile wrap-login position-absolute h-100">
            <div class="user-info h-100 d-flex align-items-center d-none">
                <div class="btn-group">
                    <button aria-expanded="false" class="btn dropdown-toggle" data-bs-toggle="dropdown" type="button">
                        <i class="fa-solid fa-user"></i>
                        <span class="display-name"></span>
                    </button>
                    <ul class="dropdown-menu">
                        <li class="dropdown-item d-flex align-items-center"><a href="{{ route('account.overview') }}"><i class="fa-solid fa-user"></i>Quản lý tài khoản</a></li>
                        <li class="dropdown-item d-flex align-items-center">
                            <a class="d-flex justify-content-between" href="{{ route('payments.packages') }}">
                                <i><span>GEM</span><span>0</span></i> <button>Nạp</button>
                            </a>
                        </li>
                        <li class="dropdown-item d-flex align-items-center"><a href="{{ route('payments.history') }}"><i class="fa-solid fa-clock-rotate-left"></i>Lịch sử nạp</a></li>
                        <li class="dropdown-item d-flex align-items-center"><a href="{{ route('account.change-password') }}"><i class="fa-solid fa-lock-keyhole-open"></i>Đổi mật khẩu</a></li>
                        <li class="dropdown-item d-flex align-items-center"><a href="/"><i class="fa-light fa-right-from-bracket"></i>Đăng xuất</a></li>
                    </ul>
                </div>
            </div>
            <a class="btn-login login-required" data-open-auth="login" data-redirect="{{ route('payments.packages') }}" href="#"></a>
        </div>

        <div class="subpage-container wrapper-id">
            <div class="container h-100 position-relative">
                <div class="d-flex flex-column align-items-center">
                    <h1 class="page-title">Tài khoản</h1>
                    <div class="row content">
                        <div class="col-3 wrap-left-side">
                            <ul class="left-side">
                                @foreach (($navItems ?? []) as $item)
                                    <li class="{{ $item['active'] ? 'active' : '' }}"><a href="{{ $item['url'] }}">{{ $item['label'] }}</a></li>
                                @endforeach
                            </ul>
                        </div>
                        <div class="col-9 user-box">
                            @if (View::hasSection('account-header'))
                                @yield('account-header')
                            @else
                                @if (isset($pageHeading) || isset($pageIntro) || isset($pageAlert))
                                    <div class="breadcrumb d-flex flex-column">
                                        @isset($pageHeading)
                                            <h4 class="text-blue">{{ $pageHeading }}</h4>
                                        @endisset
                                        @isset($pageIntro)
                                            <p>{{ $pageIntro }}</p>
                                        @endisset
                                        @isset($pageAlert)
                                            <div class="alert alert-warning mb-1 user-info-warning" role="alert">
                                                {!! $pageAlert !!}
                                            </div>
                                        @endisset
                                    </div>
                                @endif
                            @endif

                            @yield('account-content')
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
