(function (window, document, tagName, dataLayerName, containerId) {
    window[dataLayerName] = window[dataLayerName] || [];
    window[dataLayerName].push({
        "gtm.start": new Date().getTime(),
        event: "gtm.js",
    });
    var firstScript = document.getElementsByTagName(tagName)[0];
    if (!firstScript) {
        return;
    }
    var gtmScript = document.createElement(tagName);
    var dataLayerSuffix =
        dataLayerName !== "dataLayer" ? "&l=" + dataLayerName : "";
    gtmScript.async = true;
    gtmScript.src =
        "https://www.googletagmanager.com/gtm.js?id=" +
        containerId +
        dataLayerSuffix;
    firstScript.parentNode.insertBefore(gtmScript, firstScript);
})(window, document, "script", "dataLayer", "GTM-P3Q6G85M");
