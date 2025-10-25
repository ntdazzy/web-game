@extends('layouts.main')

@section('content')
@php
    $heroVideo = $heroVideo ?? [];
    $heroBackground = $heroBackground ?? [];
    $slides = $slides ?? ['desktop' => [], 'mobile' => []];
    $topPlayers = $topPlayers ?? [];
@endphp

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
                    <li class="dropdown-item d-flex align-items-center"><a href="/id"><i class="fa-solid fa-user"></i>Quản lý tài khoản</a></li>
                    <li class="dropdown-item d-flex align-items-center">
                        <a class="d-flex justify-content-between" href="/qua-nap-web">
                            <i><span>GEM</span><span>0</span></i> <button>Nạp</button></a>
                    </li>
                    <li class="dropdown-item d-flex align-items-center"><a href="/lich-su-nap"><i class="fa-solid fa-clock-rotate-left"></i>Lịch sử nạp</a></li>
                    <li class="dropdown-item d-flex align-items-center"><a href="/id/doi-mat-khau"><i class="fa-solid fa-lock-keyhole-open"></i>Đổi mật khẩu</a></li>
                    <li class="dropdown-item d-flex align-items-center"><a href="/"><i class="fa-light fa-right-from-bracket"></i>Đăng xuất</a></li>
                </ul>
            </div>
        </div>
        <a class="btn-login login-required" data-open-auth="login" data-redirect="/qua-nap-web" href="#"></a>
    </div>

    <div class="wrapper-page w-100 position-relative landing-hero">
        <div class="page page-1 position-relative">
            @if (! empty($heroVideo['src']))
                <video class="bg-video w-100 h-100 position-absolute landing-hero__background"
                    autoplay
                    muted
                    loop
                    playsinline
                    preload="auto"
                    poster="{{ legacy_asset($heroVideo['poster'] ?? ($heroBackground['src'] ?? '/assets/images/background.webp')) }}">
                    <source src="{{ legacy_asset($heroVideo['src']) }}" type="{{ $heroVideo['type'] ?? 'video/mp4' }}">
                    <img src="{{ legacy_asset($heroBackground['src'] ?? '/assets/images/background.webp') }}"
                        alt="{{ $heroBackground['alt'] ?? 'Hải Tặc Mạnh Nhất background' }}"
                        loading="eager">
                </video>
            @else
                <img src="{{ legacy_asset($heroBackground['src'] ?? '/assets/images/background.webp') }}"
                    alt="{{ $heroBackground['alt'] ?? 'Hải Tặc Mạnh Nhất background' }}"
                    class="bg-image w-100 h-100 position-absolute landing-hero__background"
                    data-fallback-src="{{ legacy_asset($heroBackground['fallback'] ?? '/assets/images/background.png') }}"
                    data-lazy-exclude="true">
            @endif

            <div class="btn-group position-absolute d-flex landing-hero__cta-group">
                <a class="btn-download link-download-client landing-hero__cta-button" href="#" title="Tải game"></a>
                <div class="btn-action-group d-flex flex-column landing-hero__support-links">
                    <a class="support-dowload" href="/tin-tuc/huong-dan-tai-va-cai-dat-game"
                        title="Hướng dẫn tải">Hướng dẫn tải</a>
                    <a class="code" href="/giftcode" title="Nhận code">Nhận code</a>
                </div>
                <a class="btn-pay landing-hero__cta-button" href="/qua-nap-web" title="Nạp thẻ"></a>
            </div>
        </div>

        <div class="page page-2 d-flex align-items-center flex-column">
            <div class="title container d-flex flex-column align-items-center" data-aos="fade-down"
                data-aos-anchor-placement="top-bottom" data-aos-duration="900" data-aos-offset="0"
                data-aos-once="false">
                <img alt="" src="{{ legacy_asset('/assets/imgs/page2/title-2.png') }}" />
            </div>

            <div class="content d-flex" data-aos="fade-down" data-aos-anchor-placement="top-bottom"
                data-aos-duration="900" data-aos-offset="0" data-aos-once="false">
                <div class="slide carousel" id="slideHome">
                    <div class="carousel h-100" data-bs-ride="carousel" id="slideHome">
                        <div class="carousel-indicators slide-pc">
                            @foreach ($slides['desktop'] as $index => $slide)
                                <button aria-label="{{ $slide['title'] }}" class="{{ !empty($slide['active']) ? 'active' : '' }}"
                                    data-bs-slide-to="{{ $index }}" data-bs-target="#slideHome"
                                    type="button" @if(!empty($slide['active'])) aria-current="true" @endif></button>
                            @endforeach
                        </div>
                        <div class="carousel-inner h-100 slide-pc">
                            @foreach ($slides['desktop'] as $slide)
                                <div class="carousel-item {{ !empty($slide['active']) ? 'active' : '' }}">
                                    <a href="{{ $slide['href'] }}" target="_self" title="{{ $slide['title'] }}">
                                        <img alt="{{ $slide['title'] }}" class="d-block w-100 h-100"
                                            data-fallback-src="{{ legacy_asset($slide['fallback'] ?? '/assets/imgs/page2/slides/slide.png') }}"
                                            src="{{ legacy_asset($slide['image']) }}" />
                                    </a>
                                </div>
                            @endforeach
                        </div>
                    </div>
                </div>

                <div class="slide carousel" id="slideHomeMobile">
                    <div class="carousel h-100" data-bs-ride="carousel" id="slideHomeMobile">
                        <div class="carousel-indicators slide-mobile">
                            @foreach ($slides['mobile'] as $index => $slide)
                                <button aria-label="{{ $slide['title'] }}" class="{{ !empty($slide['active']) ? 'active' : '' }}"
                                    data-bs-slide-to="{{ $index }}" data-bs-target="#slideHomeMobile" type="button"
                                    @if(!empty($slide['active'])) aria-current="true" @endif></button>
                            @endforeach
                        </div>
                        <div class="carousel-inner h-100 slide-mobile">
                            @foreach ($slides['mobile'] as $slide)
                                <div class="carousel-item {{ !empty($slide['active']) ? 'active' : '' }}">
                                    <a href="{{ $slide['href'] }}" target="_self" title="{{ $slide['title'] }}">
                                        <img alt="{{ $slide['title'] }}" class="d-block w-100 h-100"
                                            data-fallback-src="{{ legacy_asset($slide['fallback'] ?? '/assets/imgs/page2/slides/slide-mobile.png') }}"
                                            src="{{ legacy_asset($slide['image']) }}" />
                                    </a>
                                </div>
                            @endforeach
                        </div>
                    </div>
                </div>

                <div class="tabs-post">
                    <nav>
                        <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                            <button aria-selected="true" class="nav-link btn-tin-tuc active" data-bs-target="#nav-1"
                                data-bs-toggle="tab" id="nav-tin-tuc" role="tab" type="button"></button>
                            <button aria-selected="true" class="nav-link btn-su-kien" data-bs-target="#nav-2"
                                data-bs-toggle="tab" id="nav-su-kien" role="tab" type="button"></button>
                            <button aria-selected="true" class="nav-link btn-update" data-bs-target="#nav-3"
                                data-bs-toggle="tab" id="nav-update" role="tab" type="button"></button>
                        </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                        <div aria-labelledby="nav-tin-tuc" class="tab-pane fade active show" id="nav-1" role="tabpanel">
                            <ul>
                                @forelse ($newsPosts as $index => $post)
                                    <li class="tab-item">
                                        <a class="d-flex align-items-center h-100 justify-content-between"
                                            href="{{ route('post.show', ['post' => $post->getKey(), 'slug' => $post->slug]) }}"
                                            rel="nofollow" target="_self" title="{{ $post->title }}">
                                            <h6>{{ $post->title }}</h6><span>{{ optional($post->created_at)->format('d-m-Y') }}</span>
                                        </a>
                                    </li>
                                    @if ($index < $newsPosts->count() - 1)
                                        <div class="line-container d-flex justify-content-center align-items-center">
                                            <div class="line"></div>
                                            <div class="dot"></div>
                                            <div class="line"></div>
                                        </div>
                                    @endif
                                @empty
                                    <li class="tab-item text-center">Chưa có bài viết.</li>
                                @endforelse
                            </ul>
                            <div class="action-group d-flex">
                                <form action="/tin-tuc" class="search-lite search position-relative post">
                                    <input autocomplete="off" name="q" placeholder="Tìm kiếm" type="text" />
                                    <button class="position-absolute" type="submit"><i class="fa-light fa-magnifying-glass"></i></button>
                                </form>
                                <a class="more" href="/tin-tuc" title="Xem thêm"></a>
                            </div>
                        </div>
                        <div aria-labelledby="nav-su-kien" class="tab-pane fade" id="nav-2" role="tabpanel">
                            <ul>
                                @forelse ($eventPosts as $index => $post)
                                    <li class="tab-item">
                                        <a class="d-flex align-items-center h-100 justify-content-between"
                                            href="{{ route('post.show', ['post' => $post->getKey(), 'slug' => $post->slug]) }}"
                                            rel="nofollow" target="_self" title="{{ $post->title }}">
                                            <h6>{{ $post->title }}</h6><span>{{ optional($post->created_at)->format('d-m-Y') }}</span>
                                        </a>
                                    </li>
                                    @if ($index < $eventPosts->count() - 1)
                                        <div class="line-container d-flex justify-content-center align-items-center">
                                            <div class="line"></div>
                                            <div class="dot"></div>
                                            <div class="line"></div>
                                        </div>
                                    @endif
                                @empty
                                    <li class="tab-item text-center">Chưa có bài viết.</li>
                                @endforelse
                            </ul>
                            <div class="action-group d-flex">
                                <form action="/su-kien" class="search-lite search position-relative post">
                                    <input autocomplete="off" name="q" placeholder="Tìm kiếm" type="text" />
                                    <button class="position-absolute" type="submit"><i class="fa-light fa-magnifying-glass"></i></button>
                                </form>
                                <a class="more" href="/su-kien" title="Xem thêm"></a>
                            </div>
                        </div>
                        <div aria-labelledby="nav-update" class="tab-pane fade" id="nav-3" role="tabpanel">
                            <ul>
                                @forelse ($updatePosts as $index => $post)
                                    <li class="tab-item">
                                        <a class="d-flex align-items-center h-100 justify-content-between"
                                            href="{{ route('post.show', ['post' => $post->getKey(), 'slug' => $post->slug]) }}"
                                            rel="nofollow" target="_self" title="{{ $post->title }}">
                                            <h6>{{ $post->title }}</h6><span>{{ optional($post->created_at)->format('d-m-Y') }}</span>
                                        </a>
                                    </li>
                                    @if ($index < $updatePosts->count() - 1)
                                        <div class="line-container d-flex justify-content-center align-items-center">
                                            <div class="line"></div>
                                            <div class="dot"></div>
                                            <div class="line"></div>
                                        </div>
                                    @endif
                                @empty
                                    <li class="tab-item text-center">Chưa có bài viết.</li>
                                @endforelse
                            </ul>
                            <div class="action-group d-flex">
                                <form action="/update" class="search-lite search position-relative post">
                                    <input autocomplete="off" name="q" placeholder="Tìm kiếm" type="text" />
                                    <button class="position-absolute" type="submit"><i class="fa-light fa-magnifying-glass"></i></button>
                                </form>
                                <a class="more" href="/update" title="Xem thêm"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="page page-3 d-flex align-items-center flex-column position-relative">
            <div class="title container d-flex flex-column align-items-center" data-aos="fade-down"
                data-aos-anchor-placement="top-bottom" data-aos-duration="900" data-aos-offset="-170"
                data-aos-once="false">
                <img alt="" src="{{ legacy_asset('/assets/imgs/page3/title.png') }}" />
            </div>
            <div class="background position-absolute"></div>
            <div class="content d-flex" data-aos="fade-down" data-aos-anchor-placement="top-bottom"
                data-aos-duration="900" data-aos-offset="-250" data-aos-once="false">
                <table>
                    <thead>
                        <tr>
                            <th class="rank"></th>
                            <th class="user"></th>
                            <th class="power"></th>
                            <th class="server"></th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($topPlayers as $player)
                            <tr>
                                <td>
                                    @if (! empty($player['image']))
                                        <img alt="" src="{{ legacy_asset($player['image']) }}" />
                                    @else
                                        {{ $player['rank'] }}
                                    @endif
                                </td>
                                <td>{{ $player['name'] }}</td>
                                <td>{{ $player['power'] }}</td>
                                <td class="text-uppercase">{{ $player['server'] }}</td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection
