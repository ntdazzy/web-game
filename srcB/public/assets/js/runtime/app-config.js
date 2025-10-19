(function (window, document) {
  var configElement = document.getElementById('app-config-data');
  if (!configElement) {
    return;
  }

  var raw = configElement.textContent || configElement.innerText || '{}';
  try {
    var parsed = JSON.parse(raw);
    if (typeof parsed === 'object' && parsed !== null) {
      window.__APP_CONFIG__ = parsed;
    } else {
      window.__APP_CONFIG__ = {};
    }
  } catch (error) {
    window.__APP_CONFIG__ = {};
  }
})(window, document);
