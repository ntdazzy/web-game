<script>
  (function () {
    const ORIGIN = window.__APP_CONFIG__?.origin || <?= json_encode(app_origin()) ?> || window.location.origin;
    const linkAjaxGiftcode = ORIGIN + '/giftcode/fetch-code-by-id';
    const historyGiftcode  = ORIGIN + '/giftcode/fetch-history';
    const loginWidgetSrc   = ORIGIN + '/assets/stms/js/widget.login.js';

    const endpoints = { linkAjaxGiftcode, historyGiftcode, loginWidgetSrc };
    window.__ENDPOINTS__ = endpoints;
    window.linkAjaxGiftcode = linkAjaxGiftcode;
    window.historyGiftcode = historyGiftcode;
    window.loginWidgetSrc = loginWidgetSrc;
    window.MAINSITE_ID = ORIGIN;

    if (!document.getElementById('__login-widget-script')) {
      const s = document.createElement('script');
      s.id = '__login-widget-script';
      s.src = loginWidgetSrc;
      s.defer = true;
      document.head.appendChild(s);
    }
  })();
</script>
