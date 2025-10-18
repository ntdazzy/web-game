(function () {
    'use strict';

    if (window.__HTMN_APP_INIT__) {
        return;
    }
    window.__HTMN_APP_INIT__ = true;

    var AUTH_STORAGE_KEY = 'htmn_auth_state';
    var overlay = null;
    var activeView = 'login';
    var alertBox = null;
    var submitButtons = {};

    function detectStaticPrefix() {
        if (typeof window.__STATIC_PREFIX__ === 'string') {
            return window.__STATIC_PREFIX__;
        }
        var link = document.querySelector('link[href*="st-ms/css/bootstrap"]');
        if (link) {
            var href = link.getAttribute('href') || '';
            return href.replace(/st-ms\/css\/.*$/i, '');
        }
        return '';
    }

    var staticPrefix = detectStaticPrefix();
    var staticRoot = staticPrefix + 'st-ms/';

    function ensureStylesheet(url) {
        var exists = Array.prototype.slice.call(document.querySelectorAll('link[rel="stylesheet"]'))
            .some(function (link) {
                return (link.getAttribute('href') || '').split('?')[0] === url;
            });
        if (!exists) {
            var node = document.createElement('link');
            node.rel = 'stylesheet';
            node.href = url;
            document.head.appendChild(node);
        }
    }

    ensureStylesheet(staticRoot + 'css/auth-modal.css');

    function detectApiBase() {
        var meta = document.querySelector('meta[name="api-base"]');
        if (window.APP_API_BASE) {
            return window.APP_API_BASE;
        }
        if (meta && meta.getAttribute('content')) {
            return meta.getAttribute('content');
        }
        var origin = window.location.origin.replace(/\/+$/, '');
        if (window.location.port && window.location.port !== '80' && window.location.port !== '443') {
            return origin + '/api';
        }
        return window.location.protocol + '//' + window.location.hostname + ':3001/api';
    }

    var apiBase = String(detectApiBase() || '').replace(/\/+$/, '');

    window.APP_CONFIG = Object.assign({}, window.APP_CONFIG || {}, {
        staticPrefix: staticPrefix,
        staticRoot: staticRoot,
        apiBase: apiBase
    });

    function normalizeAssetPath(path) {
        if (!path) {
            return path;
        }

        var original = path;
        var remotePattern = /https?:\/\/(?:www\.)?haitacmanhnhat\.vn\//i;
        var cdnPattern = /^(?:\.\.\/)*cdn-ms\.haitacmanhnhat\.vn\//i;

        if (remotePattern.test(path)) {
            path = path.replace(remotePattern, '');
        }

        if (cdnPattern.test(path)) {
            path = path.replace(cdnPattern, 'st-ms/');
        }

        if (path.charAt(0) === '/') {
            path = path.substring(1);
        }

        if (/^st-ms\//i.test(path)) {
            return staticPrefix + path;
        }

        if (/^(\.\.\/)+st-ms\//i.test(path)) {
            return path;
        }

        return original;
    }

    function fixLegacyAssets() {
        var selectors = [
            'img[src]',
            'source[src]',
            'video[src]',
            'video source[src]',
            'audio[src]',
            'link[rel="stylesheet"][href]',
            'script[src]'
        ];

        selectors.forEach(function (selector) {
            document.querySelectorAll(selector).forEach(function (node) {
                var attr = node.tagName === 'LINK' ? 'href' : 'src';
                var value = node.getAttribute(attr);
                var normalized = normalizeAssetPath(value);
                if (normalized && normalized !== value) {
                    node.setAttribute(attr, normalized);
                }
            });
        });
    }

    function overrideLegacyGlobals() {
        window.DOMAIN = window.location.origin.replace(/\/+$/, '');
        window.cookieDomain = window.location.hostname;

        window.jsonData = Object.assign({}, window.jsonData || {}, {
            script: staticPrefix + 'st-ms/js/app-init.js',
            redirect: staticPrefix + 'qua-nap-web.html'
        });

    }

    function template(strings) {
        var result = '';
        for (var i = 0; i < strings.length; i++) {
            result += strings[i];
            if (arguments[i + 1]) {
                result += arguments[i + 1];
            }
        }
        return result;
    }

    function resolveAsset(path) {
        if (!path) {
            return '';
        }
        if (/^https?:/i.test(path)) {
            return path;
        }
        return staticPrefix + path;
    }

    function resolvePage(path) {
        return resolveAsset(path);
    }

    function buildDesktopHeaderHTML() {
        return template`
<div class="container d-flex w-100 h-100">
    <div class="logo position-relative h-100">
        <div class="wrap-logo position-absolute d-flex flex-column align-items-center">
            <a href="${resolvePage('index.html')}"><img src="${resolveAsset('st-ms/imgs/logo.png')}" alt="" class="logo-img"></a>
        </div>
    </div>
    <div class="nav-bar position-relative">
        <img src="${resolveAsset('st-ms/imgs/menu/bg-menu-nav.png')}" alt="" class="position-absolute top-0">
        <ul class="main-nav d-flex h-100">
            <li class="d-flex justify-content-center align-items-center homepage">
                <a class="nav-item h-100" data-nav-key="home" href="${resolvePage('index.html')}" target="_self" title="Trang chủ"></a>
            </li>
            <li class="d-flex justify-content-center align-items-center news">
                <a class="nav-item h-100" data-nav-key="news" href="${resolvePage('tin-tuc.html')}" target="_self" title="Tin tức"></a>
            </li>
            <li class="d-flex justify-content-center align-items-center hero-item">
                <a class="nav-item h-100" data-nav-key="heroes" href="${resolvePage('danh-sach-tuong.html')}" target="_self" title="Tướng"></a>
            </li>
            <li class="d-flex justify-content-center align-items-center fruit">
                <a class="nav-item h-100 d-flex align-items-center" data-nav-key="fruits" href="javascript:void(0)" title="Trái Ác Quỷ" data-bs-toggle="dropdown">
                    <i class="dropdown-icon position-absolute"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><a href="${resolvePage('trai-ac-quy.html')}" target="_self" class="dropdown-item">Trái Ác Quỷ</a></li>
                    <li><a href="${resolvePage('trai-dung-hop.html')}" target="_self" class="dropdown-item">Trái Dung Hợp</a></li>
                </ul>
            </li>
            <li class="d-flex justify-content-center align-items-center support">
                <a class="nav-item h-100 d-flex align-items-center" data-nav-key="support" href="javascript:void(0)" title="Hỗ trợ" data-bs-toggle="dropdown">
                    <i class="dropdown-icon position-absolute"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><a href="https://www.facebook.com/haitacmanhnhat" target="_blank" rel="noopener" class="dropdown-item">Facebook</a></li>
                    <li><a href="https://discord.com/invite/pRQaVmUj78" target="_blank" rel="noopener" class="dropdown-item">Discord</a></li>
                    <li><a href="https://zalo.me/g/snnzqo202" target="_blank" rel="noopener" class="dropdown-item">Zalo</a></li>
                </ul>
            </li>
            <li class="d-flex justify-content-center align-items-center community">
                <a class="nav-item h-100 d-flex align-items-center" data-nav-key="community" href="javascript:void(0)" title="Cộng Đồng" data-bs-toggle="dropdown">
                    <i class="dropdown-icon position-absolute"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li class="youtube"><a href="https://www.youtube.com/@haitacmanhnhat" target="_blank" rel="noopener" class="dropdown-item">Youtube</a></li>
                    <li class="group"><a href="https://www.facebook.com/groups/dechehaitac" target="_blank" rel="noopener" class="dropdown-item">Group cộng đồng</a></li>
                    <li class="tiktok"><a href="https://www.tiktok.com/@haitacmanhnhat" target="_blank" rel="noopener" class="dropdown-item">Tiktok</a></li>
                    <li class="discord"><a href="https://discord.com/invite/pRQaVmUj78" target="_blank" rel="noopener" class="dropdown-item">Discord</a></li>
                </ul>
            </li>
        </ul>
    </div>
    <div class="login">
        <div class="wrap-login position-absolute h-100">
            <div class="user-info h-100 d-flex align-items-center d-none">
                <div class="btn-group">
                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa-solid fa-user"></i>
                        <span class="display-name"></span>
                    </button>
                    <ul class="dropdown-menu">
                        <li class="dropdown-item d-flex align-items-center">
                            <a href="${resolvePage('id.html')}"><i class="fa-solid fa-user"></i>Quản lý tài khoản</a>
                        </li>
                        <li class="dropdown-item d-flex align-items-center">
                            <a href="${resolvePage('qua-nap-web.html')}" class="d-flex justify-content-between">
                                <i><span class="payment-unit">GEM</span><span class="display-balance">0</span></i> <button>Nạp</button>
                            </a>
                        </li>
                        <li class="dropdown-item d-flex align-items-center">
                            <a href="${resolvePage('lich-su-nap.html')}"><i class="fa-solid fa-clock-rotate-left"></i>Lịch sử nạp</a>
                        </li>
                        <li class="dropdown-item d-flex align-items-center">
                            <a href="${resolvePage('id/doi-mat-khau.html')}"><i class="fa-solid fa-lock-keyhole-open"></i>Đổi mật khẩu</a>
                        </li>
                        <li class="dropdown-item d-flex align-items-center">
                            <a href="${resolvePage('index.html')}"><i class="fa-light fa-right-from-bracket"></i>Đăng xuất</a>
                        </li>
                    </ul>
                </div>
            </div>
            <a href="javascript:void(0)" class="btn-login login-required" data-redirect="${resolvePage('qua-nap-web.html')}"></a>
        </div>
    </div>
</div>`;
    }

    function buildMobileHeaderHTML() {
        return template`
<div class="wrap-logo position-relative">
    <a href="${resolvePage('index.html')}" class="logo position-absolute"></a>
</div>
<ul class="btn-group d-flex align-items-center position-relative">
    <li>
        <a href="${resolvePage('qua-nap-web.html')}" target="_self" class="btn-pay" title="Nạp Thẻ"></a>
    </li>
    <li>
        <a href="javascript:void(0)" target="_self" class="btn-download link-download-client" title="Tải game"></a>
    </li>
    <li class="position-relative">
        <button class="btn swap-menu-id" type="button" data-bs-toggle="collapse" data-bs-target="#mobileMenu" aria-expanded="false" aria-controls="mobileMenu"></button>
        <ul class="collapse menu-mobile position-absolute" id="mobileMenu">
            <li class="nav-item">
                <a class="nav-link homepage" data-nav-key="home" href="${resolvePage('index.html')}" title="Trang chủ">Trang chủ</a>
            </li>
            <li class="nav-item">
                <a class="nav-link news" data-nav-key="news" href="${resolvePage('tin-tuc.html')}" title="Tin tức">Tin tức</a>
            </li>
            <li class="nav-item">
                <a class="nav-link hero-item" data-nav-key="heroes" href="${resolvePage('danh-sach-tuong.html')}" title="Tướng">Tướng</a>
            </li>
            <li class="menu-mobile-bottom">
                <a class="btn btn-link position-relative fruit" data-nav-key="fruits" href="javascript:void(0)" title="Trái Ác Quỷ" data-bs-toggle="collapse" data-bs-target="#mobileFruit" aria-expanded="false" aria-controls="mobileFruit">
                    Trái Ác Quỷ<i class="dropdown-icon position-absolute"></i>
                </a>
                <ul class="collapse social row collapse-normal" id="mobileFruit">
                    <li class="d-flex justify-content-center col-4"><a href="${resolvePage('trai-ac-quy.html')}" target="_self" class="dropdown-item">Trái Ác Quỷ</a></li>
                    <li class="d-flex justify-content-center col-4"><a href="${resolvePage('trai-dung-hop.html')}" target="_self" class="dropdown-item">Trái Dung Hợp</a></li>
                </ul>
            </li>
            <li class="menu-mobile-bottom">
                <a class="btn btn-link position-relative support" href="javascript:void(0)" title="Hỗ trợ" data-bs-toggle="collapse" data-bs-target="#mobileSupport" aria-expanded="false" aria-controls="mobileSupport">
                    Hỗ trợ<i class="dropdown-icon position-absolute"></i>
                </a>
                <ul class="collapse social row collapse-normal" id="mobileSupport">
                    <li class="d-flex justify-content-center col-4"><a href="https://www.facebook.com/haitacmanhnhat" target="_blank" rel="noopener" class="dropdown-item">Facebook</a></li>
                    <li class="d-flex justify-content-center col-4"><a href="https://discord.com/invite/pRQaVmUj78" target="_blank" rel="noopener" class="dropdown-item">Discord</a></li>
                    <li class="d-flex justify-content-center col-4"><a href="https://zalo.me/g/snnzqo202" target="_blank" rel="noopener" class="dropdown-item">Zalo</a></li>
                </ul>
            </li>
            <li class="menu-mobile-bottom">
                <a class="btn btn-link position-relative community" href="javascript:void(0)" title="Cộng Đồng" data-bs-toggle="collapse" data-bs-target="#mobileCommunity" aria-expanded="false" aria-controls="mobileCommunity">
                    Cộng Đồng<i class="dropdown-icon position-absolute"></i>
                </a>
                <ul class="collapse social row collapse-normal collapse-community" id="mobileCommunity">
                    <li class="d-flex justify-content-center col-4 youtube"><a href="https://www.youtube.com/@haitacmanhnhat" target="_blank" rel="noopener" class="dropdown-item">Youtube</a></li>
                    <li class="d-flex justify-content-center col-4 group"><a href="https://www.facebook.com/groups/dechehaitac" target="_blank" rel="noopener" class="dropdown-item">Group cộng đồng</a></li>
                    <li class="d-flex justify-content-center col-4 tiktok"><a href="https://www.tiktok.com/@haitacmanhnhat" target="_blank" rel="noopener" class="dropdown-item">Tiktok</a></li>
                    <li class="d-flex justify-content-center col-4 discord"><a href="https://discord.com/invite/pRQaVmUj78" target="_blank" rel="noopener" class="dropdown-item">Discord</a></li>
                </ul>
            </li>
        </ul>
    </li>
</ul>
<div class="wrap-login-mobile wrap-login position-absolute h-100">
    <div class="user-info h-100 d-flex align-items-center d-none">
        <div class="btn-group">
            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-user"></i>
                <span class="display-name"></span>
            </button>
            <ul class="dropdown-menu">
                <li class="dropdown-item d-flex align-items-center"><a href="${resolvePage('id.html')}"><i class="fa-solid fa-user"></i>Quản lý tài khoản</a></li>
                <li class="dropdown-item d-flex align-items-center">
                    <a href="${resolvePage('qua-nap-web.html')}" class="d-flex justify-content-between">
                        <i><span>GEM</span><span class="display-balance">0</span></i> <button>Nạp</button>
                    </a>
                </li>
                <li class="dropdown-item d-flex align-items-center"><a href="${resolvePage('lich-su-nap.html')}"><i class="fa-solid fa-clock-rotate-left"></i>Lịch sử nạp</a></li>
                <li class="dropdown-item d-flex align-items-center"><a href="${resolvePage('id/doi-mat-khau.html')}"><i class="fa-solid fa-lock-keyhole-open"></i>Đổi mật khẩu</a></li>
                <li class="dropdown-item d-flex align-items-center"><a href="${resolvePage('index.html')}"><i class="fa-light fa-right-from-bracket"></i>Đăng xuất</a></li>
            </ul>
        </div>
    </div>
    <a href="javascript:void(0)" class="btn-login login-required" data-redirect="${resolvePage('qua-nap-web.html')}"></a>
</div>`;
    }

    function buildFooterHTML() {
        return template`
<div class="wrap-content container d-flex align-items-center justify-content-center">
    <a href="${resolvePage('index.html')}" class="logo"></a>
    <div class="info-group">
        <ul class="d-flex">
            <li><a href="${resolvePage('tin-tuc/dieu-khoan-dich-vu.html')}" title="Điều khoản sử dụng" target="_self">Điều khoản sử dụng</a></li>
            <li><a href="${resolvePage('tin-tuc/cai-dat-go-bo.html')}" title="Cài đặt &amp; gỡ bỏ" target="_self">Cài đặt &amp; gỡ bỏ</a></li>
        </ul>
        <p>Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng số 73/GP-PTTH&amp;TTĐT<br>do Cục Phát Thanh Truyền Hình và Thông Tin Điện Tử cấp ngày 09/05/2025</p>
        <p>Quyết định phê duyệt nội dung kịch bản trò chơi điện tử G1 trên mạng số: 112/QĐ-PTTH&amp;TTĐT <br> do Bộ Thông tin và Truyền thông cấp ngày 15/04/2025</p>
    </div>
</div>`;
    }

    function buildLeftMenuHTML() {
        return template`
<div class="position-relative container">
    <div class="left-menu position-absolute">
        <ul>
            <li class="menu-page-1 active d-flex align-items-center"></li>
            <li class="menu-page-2 d-flex align-items-center"></li>
            <li class="menu-page-3 d-flex align-items-center"></li>
        </ul>
    </div>
</div>`;
    }

    function buildRightMenuHTML() {
        return template`
<div class="position-relative">
    <div class="right-menu position-absolute">
        <ul class="menu-group">
            <li class="menu-item">
                <a href="javascript:void(0)" class="link-download-client" target="_self">Tải game</a>
            </li>
            <li class="menu-item">
                <a href="${resolvePage('qua-nap-web.html')}" class="btn-payment btn-pay" target="_self">Nạp thẻ</a>
            </li>
            <li class="menu-item">
                <a href="${resolvePage('tin-tuc/huong-dan-tai-va-cai-dat-game.html')}" target="_self">Hướng dẫn tải</a>
            </li>
            <li class="menu-item">
                <a href="${resolvePage('giftcode.html')}" target="_self">Nhận code</a>
            </li>
            <li class="menu-item social d-flex row m-0">
                <div class="col-12 d-flex flex-wrap justify-content-center">
                    <a href="https://www.facebook.com/haitacmanhnhat" class="facebook" target="_blank" rel="noopener">Facebook</a>
                    <a href="https://www.tiktok.com/@haitacmanhnhat" class="tiktok" target="_blank" rel="noopener">Tiktok</a>
                    <a href="https://www.youtube.com/@haitacmanhnhat" class="youtube" target="_blank" rel="noopener">Youtube</a>
                    <a href="https://www.facebook.com/groups/dechehaitac" class="group" target="_blank" rel="noopener">Facebook group</a>
                    <a href="https://discord.com/invite/pRQaVmUj78" class="discord" target="_blank" rel="noopener">Discord</a>
                    <a href="https://zalo.me/g/snnzqo202" class="zalo" target="_blank" rel="noopener">Zalo</a>
                </div>
            </li>
        </ul>
        <button class="position-absolute turn-in"></button>
        <button class="position-absolute turn-out"></button>
        <button class="position-absolute turn-top"></button>
    </div>
</div>`;
    }

    function setActiveNavigation() {
        var pathname = window.location.pathname.toLowerCase();
        var key = 'home';
        if (pathname.indexOf('/tin-tuc') !== -1 || pathname.indexOf('/su-kien') !== -1 || pathname.indexOf('/update') !== -1) {
            key = 'news';
        } else if (pathname.indexOf('/danh-sach-tuong') !== -1) {
            key = 'heroes';
        } else if (pathname.indexOf('/trai-ac-quy') !== -1 || pathname.indexOf('/trai-dung-hop') !== -1) {
            key = 'fruits';
        }

        document.querySelectorAll('[data-nav-key]').forEach(function (node) {
            var matches = node.getAttribute('data-nav-key') === key;
            node.classList.toggle('active', matches);
            var parent = node.closest('li');
            if (parent) {
                parent.classList.toggle('active', matches);
            }
        });
    }

    function renderSharedLayout() {
        var desktopNav = document.querySelector('.top-nav');
        if (desktopNav) {
            desktopNav.innerHTML = buildDesktopHeaderHTML();
        }

        var mobileNav = document.querySelector('.top-nav-mobile');
        if (mobileNav) {
            mobileNav.innerHTML = buildMobileHeaderHTML();
        }

        var footer = document.querySelector('footer');
        if (footer) {
            footer.innerHTML = buildFooterHTML();
        }

        var leftFixed = document.querySelector('.menu-fixed.left');
        if (leftFixed) {
            leftFixed.innerHTML = buildLeftMenuHTML();
        }

        var rightFixed = document.querySelector('.menu-fixed.right');
        if (rightFixed) {
            rightFixed.innerHTML = buildRightMenuHTML();
        }

        document.querySelectorAll('.wrap-login-mobile').forEach(function (node) {
            if (!node.closest('.top-nav-mobile')) {
                node.parentNode.removeChild(node);
            }
        });

        setActiveNavigation();
    }

    function buildModal() {
        var forgotLink = staticPrefix + 'id/quen-mat-khau.html';
        var modalHtml = template`
<div class="auth-overlay" id="htmnAuthOverlay" aria-hidden="true">
    <div class="auth-modal" role="dialog" aria-modal="true">
        <button class="auth-close" type="button" aria-label="Đóng"><span aria-hidden="true">&times;</span></button>
        <div class="auth-header">
            <div class="auth-brand">
                <span class="auth-logo">HT</span>
                <div class="auth-heading">
                    <h3>Xin chào, Thuyền trưởng!</h3>
                    <p>Đăng nhập để mở khóa quà tặng và sự kiện mỗi ngày.</p>
                </div>
            </div>
            <div class="auth-tabs">
                <button class="auth-tab is-active" data-auth-tab="login" type="button">Đăng nhập</button>
                <button class="auth-tab" data-auth-tab="register" type="button">Đăng ký</button>
            </div>
        </div>
        <div class="auth-body">
            <div class="auth-alert" id="htmnAuthAlert" role="alert"></div>
            <div class="auth-view is-active" data-auth-view="login">
                <div class="auth-title">
                    <h2>Đăng Nhập</h2>
                    <p>Tiếp tục hành trình cùng hạm đội của bạn.</p>
                </div>
                <form id="htmnLoginForm" autocomplete="off">
                    <div class="auth-field">
                        <label for="htmnLoginUsername">Tên đăng nhập</label>
                        <div class="auth-input">
                            <span class="auth-input-icon"><i class="fa-solid fa-user"></i></span>
                            <input id="htmnLoginUsername" name="username" type="text" placeholder="Tên đăng nhập" required>
                        </div>
                    </div>
                    <div class="auth-field">
                        <label for="htmnLoginPassword">Mật khẩu</label>
                        <div class="auth-input">
                            <span class="auth-input-icon"><i class="fa-solid fa-lock"></i></span>
                            <input id="htmnLoginPassword" name="password" type="password" placeholder="Mật khẩu" required>
                        </div>
                    </div>
                    <div class="auth-checkbox">
                        <label for="htmnRemember">
                            <input id="htmnRemember" name="remember" type="checkbox">
                            <span>Lưu thông tin đăng nhập</span>
                        </label>
                    </div>
                    <button type="submit" id="htmnLoginSubmit" class="auth-submit">Đăng nhập</button>
                </form>
                <div class="auth-links">
                    <span>Chưa có tài khoản? <a href="#" data-switch-view="register">Đăng ký ngay</a></span>
                    <a href="` + forgotLink + `">Quên mật khẩu?</a>
                </div>
            </div>
            <div class="auth-view" data-auth-view="register">
                <div class="auth-title">
                    <h2>Đăng Ký</h2>
                    <p>Tạo tài khoản mới để nhận quà, tham gia sự kiện độc quyền.</p>
                </div>
                <form id="htmnRegisterForm" autocomplete="off">
                    <div class="auth-field">
                        <label for="htmnRegisterUsername">Tên đăng nhập</label>
                        <div class="auth-input">
                            <span class="auth-input-icon"><i class="fa-solid fa-user"></i></span>
                            <input id="htmnRegisterUsername" name="username" type="text" placeholder="Tên đăng nhập" required>
                        </div>
                    </div>
                    <div class="auth-field">
                        <label for="htmnRegisterEmail">Email (dùng để khôi phục)</label>
                        <div class="auth-input">
                            <span class="auth-input-icon"><i class="fa-solid fa-envelope"></i></span>
                            <input id="htmnRegisterEmail" name="email" type="email" placeholder="Email">
                        </div>
                    </div>
                    <div class="auth-field">
                        <label for="htmnRegisterPassword">Mật khẩu</label>
                        <div class="auth-input">
                            <span class="auth-input-icon"><i class="fa-solid fa-lock"></i></span>
                            <input id="htmnRegisterPassword" name="password" type="password" placeholder="Mật khẩu" required>
                        </div>
                    </div>
                    <div class="auth-field">
                        <label for="htmnRegisterConfirm">Nhập lại mật khẩu</label>
                        <div class="auth-input">
                            <span class="auth-input-icon"><i class="fa-solid fa-lock"></i></span>
                            <input id="htmnRegisterConfirm" name="passwordConfirm" type="password" placeholder="Nhập lại mật khẩu" required>
                        </div>
                    </div>
                    <div class="auth-checkbox">
                        <label for="htmnAgree">
                            <input id="htmnAgree" name="agree" type="checkbox" required>
                            <span>Tôi đồng ý với Điều khoản &amp; Chính sách sử dụng</span>
                        </label>
                    </div>
                    <button type="submit" id="htmnRegisterSubmit" class="auth-submit">Đăng ký</button>
                </form>
                <div class="auth-links">
                    <span>Đã có tài khoản? <a href="#" data-switch-view="login">Đăng nhập</a></span>
                    <a href="` + forgotLink + `">Quên mật khẩu?</a>
                </div>
                <div class="auth-benefits">
                    <p>Lợi ích dành cho Thuyền trưởng mới:</p>
                    <ul>
                        <li>Nhận quà chào mừng và thông báo sự kiện sớm nhất.</li>
                        <li>Quản lý lịch sử nạp và thông tin nhân vật tiện lợi.</li>
                        <li>Bảo mật tài khoản với email hỗ trợ khôi phục.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>`;

        var wrapper = document.createElement('div');
        wrapper.innerHTML = modalHtml.trim();
        overlay = wrapper.firstElementChild;
        document.body.appendChild(overlay);
        alertBox = overlay.querySelector('#htmnAuthAlert');

        overlay.addEventListener('click', function (event) {
            if (event.target === overlay) {
                closeModal();
            }
        });

        overlay.querySelector('.auth-close').addEventListener('click', closeModal);

        overlay.querySelectorAll('.auth-tab').forEach(function (tab) {
            tab.addEventListener('click', function () {
                switchView(tab.getAttribute('data-auth-tab'));
            });
        });

        overlay.querySelectorAll('[data-switch-view]').forEach(function (link) {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                switchView(link.getAttribute('data-switch-view'));
            });
        });

        submitButtons.login = overlay.querySelector('#htmnLoginSubmit');
        submitButtons.register = overlay.querySelector('#htmnRegisterSubmit');

        overlay.querySelector('#htmnLoginForm').addEventListener('submit', function (event) {
            event.preventDefault();
            handleLogin(event.target);
        });

        overlay.querySelector('#htmnRegisterForm').addEventListener('submit', function (event) {
            event.preventDefault();
            handleRegister(event.target);
        });
    }

    function switchView(view) {
        if (view !== 'login' && view !== 'register') {
            return;
        }
        activeView = view;
        overlay.querySelectorAll('.auth-view').forEach(function (node) {
            var nodeView = node.getAttribute('data-auth-view');
            node.classList.toggle('is-active', nodeView === view);
        });

        overlay.querySelectorAll('.auth-tab').forEach(function (tab) {
            var nodeView = tab.getAttribute('data-auth-tab');
            tab.classList.toggle('is-active', nodeView === view);
        });

        hideAlert();
    }

    function openModal(view) {
        if (!overlay) {
            buildModal();
        }

        if (view) {
            switchView(view);
        }

        overlay.classList.add('is-open');
        overlay.setAttribute('aria-hidden', 'false');

        var focusField = overlay.querySelector(view === 'register' ? '#htmnRegisterUsername' : '#htmnLoginUsername');
        if (focusField) {
            focusField.focus();
        }
    }

    function closeModal() {
        if (!overlay) {
            return;
        }
        overlay.classList.remove('is-open');
        overlay.setAttribute('aria-hidden', 'true');
        hideAlert();
    }

    function showAlert(message, type) {
        if (!alertBox) {
            return;
        }
        alertBox.textContent = message;
        alertBox.classList.add('is-visible');
        alertBox.dataset.type = type || 'info';
    }

    function hideAlert() {
        if (!alertBox) {
            return;
        }
        alertBox.textContent = '';
        alertBox.classList.remove('is-visible');
        delete alertBox.dataset.type;
    }

    function toast(type, message) {
        if (window.Swal && window.Swal.fire) {
            window.Swal.fire({
                toast: true,
                position: 'top-end',
                timer: 2500,
                timerProgressBar: true,
                showConfirmButton: false,
                icon: type,
                title: message
            });
        } else {
            if (type === 'error') {
                window.alert(message);
            } else {
                console.log(message);
            }
        }
    }

    function setSubmitting(view, submitting) {
        var button = submitButtons[view];
        if (!button) {
            return;
        }
        button.disabled = submitting;
        button.textContent = submitting ? 'Đang xử lý...' : (view === 'login' ? 'Đăng nhập' : 'Đăng ký');
    }

    function validateRegister(form) {
        var username = form.username.value.trim();
        var password = form.password.value;
        var confirm = form.passwordConfirm.value;
        var email = (form.email.value || '').trim();
        var agree = form.agree.checked;

        if (username.length < 4) {
            return 'Tên đăng nhập phải có ít nhất 4 ký tự.';
        }

        if (!/^[a-zA-Z0-9_.-]+$/.test(username)) {
            return 'Tên đăng nhập chỉ được chứa chữ, số và các ký tự ".", "-", "_".';
        }

        if (password.length < 6) {
            return 'Mật khẩu phải có ít nhất 6 ký tự.';
        }

        if (password !== confirm) {
            return 'Mật khẩu nhập lại không khớp.';
        }

        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return 'Địa chỉ email không hợp lệ.';
        }

        if (!agree) {
            return 'Bạn cần đồng ý với Điều khoản & Chính sách sử dụng.';
        }

        return null;
    }

    function callApi(endpoint, options) {
        var url = apiBase + endpoint;
        var opts = Object.assign({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }, options || {});

        var authState = getAuthState();
        if (authState && authState.token) {
            opts.headers = Object.assign({}, opts.headers, {
                Authorization: 'Bearer ' + authState.token
            });
        }

        return fetch(url, opts)
            .then(function (response) {
                return response.json().catch(function () {
                    return {};
                }).then(function (data) {
                    if (!response.ok || data.success === false) {
                        if (response.status === 401) {
                            setAuthState(null);
                        }
                        var message = data.message || 'Yêu cầu thất bại, vui lòng thử lại.';
                        var error = new Error(message);
                        error.data = data;
                        throw error;
                    }
                    return data;
                });
            });
    }

    function handleLogin(form) {
        var username = form.username.value.trim();
        var password = form.password.value;

        if (!username) {
            showAlert('Vui lòng nhập tên đăng nhập.', 'error');
            form.username.focus();
            return;
        }

        if (!password) {
            showAlert('Vui lòng nhập mật khẩu.', 'error');
            form.password.focus();
            return;
        }

        hideAlert();
        setSubmitting('login', true);

        callApi('/auth/login', {
            body: JSON.stringify({
                username: username,
                password: password,
                remember: form.remember.checked
            })
        }).then(function (data) {
            setAuthState(data.data);
            toast('success', data.message || 'Đăng nhập thành công.');
            closeModal();
        }).catch(function (error) {
            showAlert(error.message || 'Đăng nhập thất bại.', 'error');
        }).finally(function () {
            setSubmitting('login', false);
        });
    }

    function handleRegister(form) {
        var validationError = validateRegister(form);
        if (validationError) {
            showAlert(validationError, 'error');
            return;
        }

        hideAlert();
        setSubmitting('register', true);

        callApi('/auth/register', {
            body: JSON.stringify({
                username: form.username.value.trim(),
                password: form.password.value,
                passwordConfirm: form.passwordConfirm.value,
                email: form.email.value.trim() || null
            })
        }).then(function (data) {
            toast('success', data.message || 'Đăng ký thành công.');
            setAuthState(data.data);
            closeModal();
        }).catch(function (error) {
            showAlert(error.message || 'Đăng ký thất bại.', 'error');
        }).finally(function () {
            setSubmitting('register', false);
        });
    }

    function getStorage() {
        try {
            return window.sessionStorage;
        } catch (err) {
            return null;
        }
    }

    function getAuthState() {
        var store = getStorage();
        if (!store) {
            return null;
        }

        try {
            var raw = store.getItem(AUTH_STORAGE_KEY);
            if (!raw) {
                return null;
            }
            return JSON.parse(raw);
        } catch (err) {
            return null;
        }
    }

    function isSessionActive(state) {
        if (!state || !state.token || !state.user) {
            return false;
        }

        if (state.expiresAt) {
            var expiresMs = Date.parse(state.expiresAt);
            if (!Number.isNaN(expiresMs) && expiresMs <= Date.now()) {
                return false;
            }
        }

        return true;
    }

    function setAuthState(data) {
        var store = getStorage();
        if (!store) {
            return;
        }
        if (isSessionActive(data)) {
            store.setItem(AUTH_STORAGE_KEY, JSON.stringify(data));
            applyAuthUI(data.user);
        } else {
            store.removeItem(AUTH_STORAGE_KEY);
            applyAuthUI(null);
        }
    }

    function applyAuthUI(user) {
        var wrapLogin = document.querySelectorAll('.wrap-login');
        wrapLogin.forEach(function (wrap) {
            var loginBtn = wrap.querySelector('.btn-login');
            var userInfo = wrap.querySelector('.user-info');
            var displayName = wrap.querySelector('.display-name');
            if (user) {
                if (loginBtn) {
                    loginBtn.classList.add('d-none');
                }
                if (userInfo) {
                    userInfo.classList.remove('d-none');
                }
                if (displayName) {
                    displayName.textContent = user.username;
                }
            } else {
                if (loginBtn) {
                    loginBtn.classList.remove('d-none');
                }
                if (userInfo) {
                    userInfo.classList.add('d-none');
                }
                if (displayName) {
                    displayName.textContent = '';
                }
            }
        });
    }

    function attachLogout() {
        document.querySelectorAll('.user-info .dropdown-menu a').forEach(function (anchor) {
            if ((anchor.textContent || '').toLowerCase().indexOf('đăng xuất') !== -1) {
                anchor.addEventListener('click', function (event) {
                    event.preventDefault();
                    logout();
                });
            }
        });
    }

    function logout() {
        callApi('/auth/logout', {
            method: 'POST'
        }).catch(function () {
            // ignore logout error
        }).finally(function () {
            setAuthState(null);
            toast('success', 'Đã đăng xuất.');
        });
    }

    function bindLoginTriggers() {
        document.querySelectorAll('.btn-login, .login-required').forEach(function (node) {
            node.addEventListener('click', function (event) {
                event.preventDefault();
                event.stopPropagation();
                if (event.stopImmediatePropagation) {
                    event.stopImmediatePropagation();
                }
                openModal('login');
            });
        });
    }

    function bindForgotPasswordForms() {
        document.querySelectorAll('.form-forget-password').forEach(function (form) {
            if (form.dataset.bound === '1') {
                return;
            }
            form.dataset.bound = '1';
            form.addEventListener('submit', function (event) {
                event.preventDefault();

                var username = form.username ? form.username.value.trim() : '';
                var email = form.email ? form.email.value.trim() : '';
                var newPassword = form.newPassword ? form.newPassword.value : '';
                var confirmPassword = form.confirmPassword ? form.confirmPassword.value : '';
                var feedback = form.querySelector('.form-feedback');

                function showFeedback(state, message) {
                    if (!feedback) {
                        toast(state === 'success' ? 'success' : 'error', message);
                        return;
                    }
                    feedback.textContent = message;
                    feedback.classList.remove('d-none', 'alert-info', 'alert-success', 'alert-danger');
                    if (state === 'success') {
                        feedback.classList.add('alert-success');
                    } else if (state === 'pending') {
                        feedback.classList.add('alert-info');
                    } else {
                        feedback.classList.add('alert-danger');
                    }
                }

                if (!username) {
                    showFeedback('error', 'Vui lòng nhập tên tài khoản.');
                    form.username && form.username.focus();
                    return;
                }

                if (!newPassword || newPassword.length < 6) {
                    showFeedback('error', 'Mật khẩu mới phải có ít nhất 6 ký tự.');
                    form.newPassword && form.newPassword.focus();
                    return;
                }

                if (newPassword !== confirmPassword) {
                    showFeedback('error', 'Mật khẩu nhập lại không khớp.');
                    form.confirmPassword && form.confirmPassword.focus();
                    return;
                }

                showFeedback('pending', 'Đang xử lý yêu cầu...');

                callApi('/auth/forgot-password', {
                    body: JSON.stringify({
                        username: username,
                        email: email || null,
                        newPassword: newPassword
                    })
                }).then(function (data) {
                    showFeedback('success', data.message || 'Đổi mật khẩu thành công.');
                    form.reset();
                    setAuthState(null);
                }).catch(function (error) {
                    showFeedback('error', error.message || 'Không thể xử lý yêu cầu.');
                });
            });
        });
    }

    function restoreAuth() {
        var state = getAuthState();
        if (isSessionActive(state)) {
            applyAuthUI(state.user);
        } else {
            setAuthState(null);
        }
    }

    function overrideLoginWidget() {
        window.widget_login = function () {
            openModal('login');
            return false;
        };
        window.iframe_open = function () {
            openModal('login');
            return false;
        };
        window.iframe_destroy = function () {
            closeModal();
            return false;
        };
    }

    function initLeaderboard() {
        var target = document.querySelector('[data-leaderboard="top-power"]');
        if (!target) {
            return;
        }

        callApi('/leaderboard/top-power', {
            method: 'GET'
        }).then(function (data) {
            if (!Array.isArray(data.data)) {
                return;
            }
            target.innerHTML = '';
            data.data.forEach(function (item, index) {
                var row = document.createElement('tr');
                var rankCell = document.createElement('td');
                rankCell.textContent = index < 3 ? '' : (index + 1);
                if (index < 3) {
                    var badge = document.createElement('img');
                    badge.alt = 'Top ' + (index + 1);
                    badge.src = staticRoot + 'imgs/page3/top-' + (index + 1) + '.png';
                    rankCell.appendChild(badge);
                }

                var userCell = document.createElement('td');
                userCell.textContent = item.name;

                var powerCell = document.createElement('td');
                powerCell.textContent = item.power_formatted;

                var serverCell = document.createElement('td');
                serverCell.textContent = item.server || '';
                serverCell.className = 'text-uppercase';

                row.appendChild(rankCell);
                row.appendChild(userCell);
                row.appendChild(powerCell);
                row.appendChild(serverCell);
                target.appendChild(row);
            });
        }).catch(function () {
            // Silently ignore leaderboard errors
        });
    }

    function init() {
        fixLegacyAssets();
        overrideLegacyGlobals();
        renderSharedLayout();
        buildModal();
        bindLoginTriggers();
        bindForgotPasswordForms();
        overrideLoginWidget();
        attachLogout();
        restoreAuth();
        initLeaderboard();
    }

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        init();
    } else {
        document.addEventListener('DOMContentLoaded', init);
    }

})();
