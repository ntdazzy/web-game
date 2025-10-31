export default async function bootstrapSite() {
    try {
        window.DOMAIN = window.location.origin;
        window.jsonData =
            window.jsonData ||
            {
                script: '',
                redirect: `${window.location.origin}/qua-nap-web`,
            };
        window.cookieDomain = window.cookieDomain || `.${window.location.hostname}`;
        window.linkAjaxGiftcode = window.linkAjaxGiftcode || `${window.location.origin}/giftcode/fetch-code-by-id`;
        window.historyGiftcode = window.historyGiftcode || `${window.location.origin}/giftcode/fetch-history`;

        await import('./vendor/jquery-1.11.0.min.js');

        await Promise.all([
            import('./vendor/bootstrap.bundle.min.js'),
            import('./vendor/slick.min.js'),
            import('./vendor/select2.full.min.js'),
            import('./vendor/sweetalert2.all.js'),
            import('./vendor/aos.js'),
            import('./vendor/moment.min.js'),
            import('./vendor/daterangepicker.min.js'),
            import('./vendor/letmescroll.js'),
            import('./vendor/jquery.mCustomScrollbar.js'),
            import('./vendor/loadingoverlay.min.js'),
        ]);

        await Promise.all([
            import('./site-global.js'),
            import('./site-custom.js'),
            import('./modules/widget-login.js'),
            import('./modules/giftcode.js'),
            import('./modules/fruits.js'),
            import('./modules/scroll.js'),
        ]);
    } catch (error) {
        if (import.meta.env.DEV) {
            console.error('[site] failed to bootstrap legacy scripts', error);
        }
    }
}
