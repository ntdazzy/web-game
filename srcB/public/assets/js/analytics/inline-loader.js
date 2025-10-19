(function (window, document) {
  var domain = typeof window.DOMAIN === 'undefined' ? 'haitacmanhnhat.vn' : window.DOMAIN;
  window.DOMAIN = domain;
  var analyticsDomain = domain;
  window._ATE_DOMAIN = analyticsDomain;
  window._ATE_CDOMAIN = '.' + analyticsDomain;
  var queue = window._ATE_ = window._ATE_ || [];
  queue.clientId = 'haitacmanhnhat';
  queue.origin = 'mainsite';
  queue.action = 'scc';

  if (document.getElementById('__analytics-lib-script')) {
    return;
  }

  var analyticsScript = document.createElement('script');
  analyticsScript.type = 'text/javascript';
  analyticsScript.id = '__analytics-lib-script';
  var protocol = document.location.protocol === 'https:' ? 'https://' : '//';
  analyticsScript.src = protocol + analyticsDomain + '/analytics-lib/lib.1.0.js?t=' + Math.floor(99999999999 * Math.random());
  var firstScript = document.getElementsByTagName('script')[0];
  if (firstScript && firstScript.parentNode) {
    firstScript.parentNode.insertBefore(analyticsScript, firstScript);
  } else {
    document.head.appendChild(analyticsScript);
  }
})(window, document);
