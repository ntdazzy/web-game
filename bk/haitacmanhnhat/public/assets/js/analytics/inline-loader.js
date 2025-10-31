(function (window, document) {
    var analyticsEnabled =
        typeof window.__ENABLE_ANALYTICS__ === "undefined"
            ? true
            : !!window.__ENABLE_ANALYTICS__;
    if (!analyticsEnabled) {
        return;
    }

    var domainSource = window.DOMAIN;
    if (typeof domainSource !== "string" || domainSource.trim() === "") {
        domainSource =
            typeof window.__PRIMARY_DOMAIN__ === "string" &&
                window.__PRIMARY_DOMAIN__.trim() !== ""
                ? window.__PRIMARY_DOMAIN__.trim()
                : window.location && window.location.hostname
                    ? window.location.hostname
                    : "";
    }
    var domain = domainSource || "localhost";
    window.DOMAIN = domain;
    var analyticsDomain = domain;
    window._ATE_DOMAIN = analyticsDomain;
    var cookieDomain =
        typeof window.cookieDomain === "string" && window.cookieDomain !== ""
            ? window.cookieDomain
            : "." + String(analyticsDomain || "").replace(/^\.+/, "");
    window._ATE_CDOMAIN = cookieDomain;
    var queue = (window._ATE_ = window._ATE_ || []);
    queue.clientId = "haitacmanhnhat";
    queue.origin = "mainsite";
    queue.action = "scc";

    if (document.getElementById("__analytics-lib-script")) {
        return;
    }

    var analyticsScript = document.createElement("script");
    analyticsScript.type = "text/javascript";
    analyticsScript.id = "__analytics-lib-script";
    var protocol = document.location.protocol === "https:" ? "https://" : "//";
    analyticsScript.src =
        protocol +
        analyticsDomain +
        "/analytics-lib/lib.1.0.js?t=" +
        Math.floor(99999999999 * Math.random());
    var firstScript = document.getElementsByTagName("script")[0];
    if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(analyticsScript, firstScript);
    } else {
        document.head.appendChild(analyticsScript);
    }
})(window, document);
