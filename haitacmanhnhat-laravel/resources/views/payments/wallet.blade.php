@php
    $pageStyles = array_merge($pageStyles ?? [], ['assets/css/modules/payments.css']);
    $pageScripts = array_merge($pageScripts ?? [], ['assets/js/pages/payments.js']);
    $bodyAttributes = 'class="wrapper-subpage overflow-y-auto"';
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
                        <li class="dropdown-item d-flex align-items-center">
                            <a href="{{ route('account.overview') }}"><i class="fa-solid fa-user"></i>Quản lý tài khoản</a>
                        </li>
                        <li class="dropdown-item d-flex align-items-center">
                            <a class="d-flex justify-content-between" href="{{ route('payments.packages') }}">
                                <i><span>GEM</span><span>0</span></i> <button>Nạp</button>
                            </a>
                        </li>
                        <li class="dropdown-item d-flex align-items-center">
                            <a href="{{ route('payments.history') }}"><i class="fa-solid fa-clock-rotate-left"></i>Lịch sử nạp</a>
                        </li>
                        <li class="dropdown-item d-flex align-items-center">
                            <a href="{{ route('account.change-password') }}"><i class="fa-solid fa-lock-keyhole-open"></i>Đổi mật khẩu</a>
                        </li>
                        <li class="dropdown-item d-flex align-items-center">
                            <a href="/"><i class="fa-light fa-right-from-bracket"></i>Đăng xuất</a>
                        </li>
                    </ul>
                </div>
            </div>
            <a class="btn-login login-required" data-open-auth="login"
                data-redirect="{{ route('payments.packages') }}" href="#"></a>
        </div>

        <div class="subpage-container wrapper-id wrapper-payment">
            <div class="container h-100 position-relative">
                <div class="d-flex flex-column align-items-center">
                    <h1 class="page-title">Nạp tiền vào ví</h1>
                    <div class="payment w-100">
                        <ul class="payment-tab w-100">
                            <li class="link-to-payment active">
                                <a href="{{ route('payments.wallet') }}">Nạp tiền vào ví</a>
                            </li>
                            <li class="link-to-package">
                                <a href="{{ route('payments.packages') }}">Quà nạp web</a>
                            </li>
                            <li class="link-to-convert">
                                <a href="{{ route('payments.convert') }}">Nạp từ ví vào game</a>
                            </li>
                        </ul>

                        <div class="payment-userinfo w-100">
                            <ul>
                                <li><span class="uname-label">Tài khoản: </span><b class="display-name">Guess</b></li>
                                <li><span class="gem-label color-blue">GEM</span>: <b class="display-balance">0</b></li>
                            </ul>
                        </div>

                        <div class="link-to-history w-100 text-center">
                            <a class="login-required" data-open-auth="login" data-redirect="{{ route('payments.packages') }}"
                                href="{{ route('payments.history') }}">Lịch sử nạp</a>
                        </div>

                        <div class="item-list w-100">
                            <label for="">Chọn hình thức</label>
                            <div class="item-list-payment-type">
                                <a class="item-type active" data-bonus="0.2" data-rate="50" href="javascript:void(0)">
                                    <input name="ftype" type="hidden" value="1" />
                                    <div class="img img-type-1 payment-icon payment-icon--atm"></div>
                                    <h6>ATM</h6>
                                    <span class="ribbon">KM 20%</span>
                                </a>
                                <a class="item-type" data-bonus="0.2" data-rate="50" href="javascript:void(0)">
                                    <input name="ftype" type="hidden" value="2" />
                                    <div class="img img-type-2 payment-icon payment-icon--wallet"></div>
                                    <h6>Ví</h6>
                                    <span class="ribbon">KM 20%</span>
                                </a>
                                <a class="item-type" data-bonus="0" data-rate="100" href="javascript:void(0)">
                                    <input name="ftype" type="hidden" value="3" />
                                    <div class="img img-type-3 payment-icon payment-icon--card"></div>
                                    <h6>Thẻ cào</h6>
                                    <span class="ribbon d-none">KM</span>
                                </a>
                            </div>

                            <label for="" class="mt-4">Chọn mệnh giá</label>
                            <div class="item-list row g-3">
                                @foreach ([50000, 100000, 200000, 500000, 1000000, 2000000, 3000000] as $amount)
                                    <div class="col-6 col-md-3">
                                        <div class="item">
                                            <a href="javascript:void(0)">
                                                <input name="famount" type="hidden" value="{{ $amount }}" />
                                                <span class="top">GEM <b>0</b></span>
                                                <span class="middle"><b>0</b> BONUS</span>
                                                <span class="bot">{{ number_format($amount, 0, ',', '.') }} <u>đ</u></span>
                                            </a>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </div>

                        <div class="payment-form w-100 mt-4">
                            <label for="">Thông tin cần nhập</label>
                            <form action="javascript:void(0)" class="row g-3">
                                <div class="col-12 col-md-6">
                                    <div class="form-group">
                                        <label for="payment-server">Chọn máy chủ</label>
                                        <select class="form-control payment-server" id="payment-server" name="fserver">
                                            <option value=""></option>
                                            @foreach (range(33, 1) as $server)
                                                <option value="s{{ $server }}">S{{ $server }}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="form-group">
                                        <label for="payment-character">Nhân vật</label>
                                        <input class="form-control" id="payment-character" name="fcharacter" type="text"
                                            placeholder="Nhập tên nhân vật" />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary w-100 btn-payment-submit login-required"
                                        data-open-auth="login" data-redirect="{{ route('payments.packages') }}">
                                        Nạp ngay
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
