@extends('layouts.app')

@section('title', 'Nhập Giftcode')
@section('page_id', 'giftcode')

@section('body_class', 'wrapper-subpage overflow-y-auto')

@section('content')
    <div id="root" class="d-flex flex-column align-items-center w-100 position-relative">
        @include('partials.top-login')

        <div class="subpage-container wrapper-id giftcode-page">
            <div class="container h-100 position-relative">
                <div class="d-flex flex-column align-items-center">
                    <h1 class="page-title">NHẬN GIFTCODE</h1>
                    <div class="row wrapper-content">
                        <div class="content">
                            <div class="select-group d-flex">
                                @php
                                    $servers = config('giftcode.servers');
                                    $codeTypes = config('giftcode.code_types');
                                @endphp
                                <div class="dropdown server">
                                    <select id="serverSelect" class="form-select position-relative">
                                        @foreach ($servers as $server)
                                            <option value="{{ $server['value'] }}" data-slug="{{ $server['slug'] }}"
                                                title="{{ $server['title'] }}">{{ $server['label'] }}</option>
                                        @endforeach
                                    </select>
                                </div>

                                <div class="dropdown giftcode selectCodeType" id="selectCodeType">
                                    <button class="btn btn-outline-secondary dropdown-toggle" type="button"
                                        id="giftcodeDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                        -- Chọn loại Code --
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="giftcodeDropdown">
                                        @foreach ($codeTypes as $codeType)
                                            <li>
                                                <a class="dropdown-item" href="#" data-id="{{ $codeType['id'] }}"
                                                    data-code="{{ $codeType['code'] }}"
                                                    data-coded="{{ $codeType['default_code'] ?? '' }}">
                                                    {{ $codeType['label'] }}
                                                </a>
                                            </li>
                                        @endforeach
                                    </ul>
                                    <input type="hidden" id="codeSlug">
                                    <input type="hidden" id="serverSlug">
                                    <input type="hidden" id="codeId">
                                    <input type="hidden" id="codeDefault">
                                </div>
                            </div>

                            <div class="button-group d-flex gap-1">
                                <button class="get-giftcode" id="confirmGetCode"></button>
                                <button class="history" id="giftcodeHistory"></button>
                            </div>

                            <div class="giftcode-description">
                                Lưu ý : Mỗi tài khoản chỉ sử dụng 1 được 1 Code cùng loại. <br>
                                Ví dụ : 1 tài khoản chơi 2 server thì chỉ 1 server ăn được code. <br>
                                Khuyến nghị : Chơi server mới nên tạo tài khoản mới để có thể sử dụng lại code.
                            </div>

                            @include('partials.giftcode.history-tables')

                        </div>

                    </div>
                </div>
            </div>
        </div>

        @include('partials.giftcode.history-popup')

        @include('partials.bottom-strip')

    </div>
@endsection
