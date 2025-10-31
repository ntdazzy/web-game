<footer id="site-footer">
    <div class="wrap-content container d-flex align-items-center justify-content-center">
        <a href="{{ route('home') }}" class="logo" title="Hải Tặc Mạnh Nhất"></a>
        <div class="info-group">
            <ul class="d-flex">
                <li>
                    <a href="{{ route('news.index') }}" title="Điều khoản sử dụng">Điều khoản sử dụng</a>
                </li>
                <li>
                    <a href="{{ route('news.index') }}" title="Cài đặt &amp; gỡ bỏ">Cài đặt &amp; gỡ bỏ</a>
                </li>
            </ul>
            <p>
                Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng số 73/GP-PTTH&amp;TTĐT<br>
                do Cục Phát Thanh Truyền Hình và Thông Tin Điện Tử cấp ngày 09/05/2025
            </p>
            <p>
                Quyết định phê duyệt nội dung kịch bản trò chơi điện tử G1 trên mạng số: 112/QĐ-PTTH&amp;TTĐT<br>
                do Bộ Thông tin và Truyền thông cấp ngày 15/04/2025
            </p>
        </div>
    </div>
</footer>

@php
    $resolvedPageId = ($pageId ?? null) !== null ? trim((string) $pageId) : trim($__env->yieldContent('page_id'));
@endphp

@if ($resolvedPageId === 'home')
    <div class="menu-fixed w-100 position-fixed left">
        <div class="position-relative container">
            <div class="left-menu position-absolute">
                <ul>
                    <li class="menu-page-1 active d-flex align-items-center"></li>
                    <li class="menu-page-2 d-flex align-items-center"></li>
                    <li class="menu-page-3 d-flex align-items-center"></li>
                </ul>
            </div>
        </div>
    </div>
@endif

<div class="menu-fixed w-100 position-fixed right">
    <div class="position-relative">
        <div class="right-menu position-absolute">
            <ul class="menu-group">
                <li class="menu-item">
                    <a href="#" class="link-download-client">Tải game</a>
                </li>
                <li class="menu-item">
                    <a href="{{ route('wallet.topup') }}" class="btn-payment btn-pay">Nạp thẻ</a>
                </li>
                <li class="menu-item">
                    <a href="{{ route('news.index') }}">Hướng dẫn tải</a>
                </li>
                <li class="menu-item">
                    <a href="{{ route('giftcode.index') }}">Nhận code</a>
                </li>
                <li class="menu-item social d-flex row m-0">
                    <div class="col-12 d-flex flex-wrap justify-content-center">
                        <a href="https://www.facebook.com/haitacmanhnhat" class="facebook" target="_blank"
                            rel="noopener">Facebook</a>
                        <a href="https://www.tiktok.com/@haitacmanhnhat" class="tiktok" target="_blank"
                            rel="noopener">Tiktok</a>
                        <a href="https://www.youtube.com/@haitacmanhnhat" class="youtube" target="_blank"
                            rel="noopener">Youtube</a>
                        <a href="https://www.facebook.com/groups/dechehaitac" class="group" target="_blank"
                            rel="noopener">Facebook group</a>
                        <a href="https://discord.com/invite/pRQaVmUj78" class="discord" target="_blank"
                            rel="noopener">Discord</a>
                        <a href="https://zalo.me/g/snnzqo202" class="zalo" target="_blank" rel="noopener">Zalo</a>
                    </div>
                </li>
            </ul>
            <button class="position-absolute turn-in" type="button"></button>
            <button class="position-absolute turn-out" type="button"></button>
            <button class="position-absolute turn-top" type="button"></button>
        </div>
    </div>
</div>
