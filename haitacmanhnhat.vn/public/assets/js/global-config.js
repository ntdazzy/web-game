(function (window, document) {
  var appConfig = window.__APP_CONFIG__ || {};
  var origin = appConfig.origin || window.location.origin;
  origin = origin.replace(/\/$/, '');

  var endpoints = {
    linkAjaxGiftcode: origin + '/giftcode/fetch-code-by-id',
    historyGiftcode: origin + '/giftcode/fetch-history',
    loginWidgetSrc: origin + '/assets/stms/js/widget.login.js'
  };

  window.__ENDPOINTS__ = endpoints;
  window.linkAjaxGiftcode = endpoints.linkAjaxGiftcode;
  window.historyGiftcode = endpoints.historyGiftcode;
  window.loginWidgetSrc = endpoints.loginWidgetSrc;
  window.MAINSITE_ID = origin;

  if (!document.getElementById('__login-widget-script')) {
    var script = document.createElement('script');
    script.id = '__login-widget-script';
    script.src = endpoints.loginWidgetSrc;
    script.defer = true;
    document.head.appendChild(script);
  }
})(window, document);
