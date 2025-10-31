export default async function bootstrapSite() {
    try {
        const appUrl = import.meta.env.VITE_APP_URL || window.location.origin;
        const url = new URL(appUrl, window.location.origin);
        const origin = `${url.protocol}//${url.host}`;

        window.DOMAIN = origin;
        window.jsonData = window.jsonData || {
            script: '',
            redirect: `${origin}/nap-web`,
        };
        window.cookieDomain = window.cookieDomain || `.${url.hostname}`;
        window.linkAjaxGiftcode = window.linkAjaxGiftcode || `${origin}/giftcode/fetch-code-by-id`;
        window.historyGiftcode = window.historyGiftcode || `${origin}/giftcode/fetch-history`;

        const loadScriptAsset = (relativePath) =>
            new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = new URL(relativePath, import.meta.url).toString();
                script.async = false;
                script.onload = () => resolve();
                script.onerror = () =>
                    reject(new Error(`Không thể tải script ${relativePath}`));
                document.head.appendChild(script);
            });

        const loadSequential = async (paths) => {
            for (const path of paths) {
                // eslint-disable-next-line no-await-in-loop
                await loadScriptAsset(path);
            }
        };

        await loadSequential([
            './vendor/jquery-1.11.0.min.js',
            './vendor/bootstrap.bundle.min.js',
            './vendor/slick.min.js',
            './vendor/select2.full.min.js',
            './vendor/sweetalert2.all.js',
            './vendor/aos.js',
            './vendor/moment.min.js',
            './vendor/daterangepicker.min.js',
            './vendor/letmescroll.js',
            './vendor/jquery.mCustomScrollbar.js',
            './vendor/loadingoverlay.min.js',
        ]);

        const pageId = document.body?.dataset?.page ?? '';
        const moduleSet = new Set([
            './site-global.js',
            './site-custom.js',
            './modules/widget-login.js',
        ]);

        if (['giftcode'].includes(pageId)) {
            moduleSet.add('./modules/giftcode.js');
        }

        if (pageId.startsWith('fruits')) {
            moduleSet.add('./modules/fruits.js');
        }

        if (pageId === 'home') {
            moduleSet.add('./modules/scroll.js');
        }

        await loadSequential([...moduleSet]);
    } catch (error) {
        if (import.meta.env.DEV) {
            console.error('[site] failed to bootstrap legacy scripts', error);
        }
    }
}
