(function () {
    'use strict';

    var currentScript = document.currentScript || (function () {
        var scripts = document.getElementsByTagName('script');
        return scripts[scripts.length - 1];
    })();

    var rawSrc = currentScript ? currentScript.getAttribute('src') || '' : '';
    var staticPrefix = '';
    var marker = 'st-ms/js/shared-head.js';

    if (rawSrc) {
        var idx = rawSrc.indexOf(marker);
        if (idx !== -1) {
            staticPrefix = rawSrc.substring(0, idx);
        }
    }

    if (typeof window.__STATIC_PREFIX__ === 'string' && !staticPrefix) {
        staticPrefix = window.__STATIC_PREFIX__;
    }
    window.__STATIC_PREFIX__ = staticPrefix;

    function ensureMeta(selector, onCreate) {
        if (!document.querySelector(selector)) {
            var meta = document.createElement('meta');
            onCreate(meta);
            document.head.appendChild(meta);
        }
    }

    function ensureStylesheet(path) {
        if (!path) {
            return;
        }
        if (!Array.prototype.slice.call(document.querySelectorAll('link[rel="stylesheet"]'))
            .some(function (link) {
                var href = link.getAttribute('href') || '';
                return href.indexOf(path) !== -1;
            })) {
            currentScript.insertAdjacentHTML('beforebegin', '<link rel="stylesheet" href="' + staticPrefix + path + '">');
        }
    }

    function ensureScript(path) {
        if (!path) {
            return;
        }
        if (!Array.prototype.slice.call(document.getElementsByTagName('script'))
            .some(function (script) {
                var src = script.getAttribute('src') || '';
                return src.indexOf(path) !== -1;
            })) {
            currentScript.insertAdjacentHTML('beforebegin', '<script src="' + staticPrefix + path + '"></' + 'script>');
        }
    }

    ensureMeta('meta[charset]', function (meta) {
        meta.setAttribute('charset', 'UTF-8');
    });

    ensureMeta('meta[name="viewport"]', function (meta) {
        meta.setAttribute('name', 'viewport');
        meta.setAttribute('content', 'width=device-width, initial-scale=1.0');
    });

    ensureMeta('meta[http-equiv="X-UA-Compatible"]', function (meta) {
        meta.setAttribute('http-equiv', 'X-UA-Compatible');
        meta.setAttribute('content', 'IE=edge');
    });

    var cssFiles = [
        'st-ms/css/bootstrap.min.css',
        'st-ms/css/all.min.css',
        'st-ms/css/slick.css',
        'st-ms/css/slick-theme.css',
        'st-ms/css/daterangepicker.css',
        'st-ms/css/letmescroll.css',
        'st-ms/css/select2.min.css',
        'st-ms/css/aos.css',
        'st-ms/css/auth-modal.css'
    ];

    cssFiles.forEach(ensureStylesheet);

    var styleKey = currentScript ? currentScript.getAttribute('data-page-style') || '' : '';
    var pageStyleMeta = document.querySelector('meta[name="page-style"]');
    if (!styleKey && pageStyleMeta) {
        styleKey = pageStyleMeta.getAttribute('content') || '';
    }
    if (styleKey) {
        ensureStylesheet('st-ms/css/style' + styleKey + '.css');
        ensureStylesheet('st-ms/css/responsive' + styleKey + '.css');
    }

    if (!document.querySelector('link[rel="shortcut icon"]')) {
        var favicon = document.createElement('link');
        favicon.setAttribute('rel', 'shortcut icon');
        favicon.setAttribute('href', staticPrefix + 'st-ms/imgs/32x32.png');
        document.head.appendChild(favicon);
    }

    var scriptFiles = [
        'st-ms/js/jquery-1.11.0.min.js',
        'st-ms/js/bootstrap.bundle.min.js',
        'st-ms/js/select2.full.min.js',
        'st-ms/js/moment.min.js',
        'st-ms/js/daterangepicker.min.js',
        'st-ms/js/slick.min.js',
        'st-ms/js/letmescroll.js',
        'st-ms/js/loadingoverlay.min.js',
        'st-ms/js/sweetalert2.all.js',
        'st-ms/js/aos.js'
    ];

    scriptFiles.forEach(ensureScript);
})();
