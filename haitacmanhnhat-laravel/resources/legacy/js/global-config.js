(function (window, document) {
    var appConfig = window.__APP_CONFIG__ || {};
    var origin = appConfig.origin || window.location.origin || '';
    origin = origin.replace(/\/$/, '');

    var analyticsEnabled = !!appConfig.enableAnalytics;
    window.__ENABLE_ANALYTICS__ = analyticsEnabled;

    var primaryDomain = '';
    if (typeof appConfig.primaryDomain === 'string' && appConfig.primaryDomain.trim() !== '') {
        primaryDomain = appConfig.primaryDomain.trim();
    } else {
        try {
            primaryDomain = new URL(origin).hostname;
        } catch (error) {
            primaryDomain = window.location.hostname || '';
        }
    }

    if (!primaryDomain) {
        primaryDomain = window.location.hostname || '';
    }

    window.__PRIMARY_DOMAIN__ = primaryDomain;

    var analyticsDomain = '';
    if (typeof appConfig.analyticsDomain === 'string' && appConfig.analyticsDomain.trim() !== '') {
        analyticsDomain = appConfig.analyticsDomain.trim();
    } else if (primaryDomain) {
        analyticsDomain = primaryDomain;
    }

    if (!analyticsDomain) {
        analyticsDomain = window.location.hostname || '';
    }

    window.DOMAIN = analyticsDomain;

    var normalizedCookieDomain = null;
    if (typeof appConfig.cookieDomain === 'string' && appConfig.cookieDomain.trim() !== '') {
        normalizedCookieDomain = appConfig.cookieDomain.trim();
    } else if (primaryDomain) {
        normalizedCookieDomain = '.' + primaryDomain.replace(/^\.+/, '');
    }

    if (normalizedCookieDomain) {
        window.cookieDomain = normalizedCookieDomain;
    }

    var host = window.location.host || primaryDomain || '';
    host = (host || '').replace(/^\/*/, '').replace(/\/+$/, '');

    var endpoints = {
        linkAjaxGiftcode: host ? host + '/giftcode/fetch-code-by-id' : '/giftcode/fetch-code-by-id',
        historyGiftcode: host ? host + '/giftcode/fetch-history' : '/giftcode/fetch-history',
        loginWidgetSrc: origin + '/assets/js/auth/widget.login.js'
    };

    window.__ENDPOINTS__ = endpoints;
    window.linkAjaxGiftcode = endpoints.linkAjaxGiftcode;
    window.historyGiftcode = endpoints.historyGiftcode;
    window.loginWidgetSrc = endpoints.loginWidgetSrc;
    window.MAINSITE_ID = host || origin;

    if (!document.getElementById('__login-widget-script')) {
        var script = document.createElement('script');
        script.id = '__login-widget-script';
        script.src = endpoints.loginWidgetSrc;
        script.defer = true;
        document.head.appendChild(script);
    }
})(window, document);
