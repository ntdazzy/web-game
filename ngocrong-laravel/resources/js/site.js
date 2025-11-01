// Legacy runtime bootstrap derived from src_gốc/st-ms/index.html script stack.
const vendorScriptLoaders = {
    './vendor/jquery-1.11.0.min.js': () =>
        import('./vendor/jquery-1.11.0.min.js?url'),
    './vendor/bootstrap.bundle.min.js': () =>
        import('./vendor/bootstrap.bundle.min.js?url'),
    './vendor/slick.min.js': () => import('./vendor/slick.min.js?url'),
    './vendor/select2.full.min.js': () =>
        import('./vendor/select2.full.min.js?url'),
    './vendor/sweetalert2.all.js': () =>
        import('./vendor/sweetalert2.all.js?url'),
    './vendor/aos.js': () => import('./vendor/aos.js?url'),
    './vendor/moment.min.js': () => import('./vendor/moment.min.js?url'),
    './vendor/daterangepicker.min.js': () =>
        import('./vendor/daterangepicker.min.js?url'),
    './vendor/letmescroll.js': () => import('./vendor/letmescroll.js?url'),
    './vendor/jquery.mCustomScrollbar.js': () =>
        import('./vendor/jquery.mCustomScrollbar.js?url'),
    './vendor/loadingoverlay.min.js': () =>
        import('./vendor/loadingoverlay.min.js?url'),
};

const moduleLoaders = {
    './site-global.js': () => import('./site-global.js'),
    './site-custom.js': () => import('./site-custom.js'),
    './modules/widget-login.js': () => import('./modules/widget-login.js'),
    './modules/giftcode.js': () => import('./modules/giftcode.js'),
    './modules/devilfruits.js': () => import('./modules/devilfruits.js'),
    './modules/scroll.js': () => import('./modules/scroll.js'),
};

const loadScriptAsset = async (relativePath) => {
    const loader = vendorScriptLoaders[relativePath];

    if (!loader) {
        throw new Error(`Không hỗ trợ vendor script: ${relativePath}`);
    }

    const { default: assetUrl } = await loader();

    await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = assetUrl;
        script.async = false;
        script.onload = () => resolve();
        script.onerror = () =>
            reject(new Error(`Không thể tải script ${relativePath}`));
        document.head.appendChild(script);
    });
};

const loadVendorSequential = async (sequence) => {
    for (const path of sequence) {
        // eslint-disable-next-line no-await-in-loop
        await loadScriptAsset(path);
    }
};

const loadModule = async (relativePath) => {
    const loader = moduleLoaders[relativePath];

    if (!loader) {
        throw new Error(`Không hỗ trợ module: ${relativePath}`);
    }

    await loader();
};

const loadModuleSequential = async (sequence) => {
    for (const path of sequence) {
        // eslint-disable-next-line no-await-in-loop
        await loadModule(path);
    }
};

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
        window.linkAjaxGiftcode =
            window.linkAjaxGiftcode ||
            `${origin}/giftcode/fetch-code-by-id`;
        window.historyGiftcode =
            window.historyGiftcode || `${origin}/giftcode/fetch-history`;

        await loadVendorSequential([
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

        if (pageId === 'giftcode') {
            moduleSet.add('./modules/giftcode.js');
        }

        if (pageId.startsWith('devilfruits')) {
            moduleSet.add('./modules/devilfruits.js');
        }

        if (pageId === 'home') {
            moduleSet.add('./modules/scroll.js');
        }

        await loadModuleSequential([...moduleSet]);
    } catch (error) {
        if (import.meta.env.DEV) {
            console.error('[site] failed to bootstrap legacy scripts', error);
        }
    }
}
