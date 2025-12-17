import "../css/app.css";
import "./assets-manifest";
import "./modules/page-loading.js";
import "./modules/header-dropdown.js";
import "./modules/turnstile.js";

const inertiaRoot = document.getElementById("app");

if (inertiaRoot?.dataset?.page) {
    Promise.all([
        import("./bootstrap"),
        import("@inertiajs/vue3"),
        import("laravel-vite-plugin/inertia-helpers"),
        import("vue"),
        import("../../vendor/tightenco/ziggy"),
        import("./modules/scale-vanilla.js"),
    ]).then(([_, inertia, helpers, vue, ziggy, scaleVanilla]) => {
        const { createInertiaApp, router } = inertia;
        const { resolvePageComponent } = helpers;
        const { createApp, h } = vue;
        const { ZiggyVue } = ziggy;
        const appName = import.meta.env.VITE_APP_NAME || "Laravel";

        if (router) {
            const getOverlay = () => window.__pageLoadingOverlay;
            router.on("start", () => getOverlay()?.show?.());
            router.on("finish", () => getOverlay()?.hide?.());
            router.on("error", () => getOverlay()?.hide?.());
        }

        createInertiaApp({
            title: (title) => `${title} - ${appName}`,
            resolve: (name) =>
                resolvePageComponent(
                    `./Pages/${name}.vue`,
                    import.meta.glob("./Pages/**/*.vue")
                ),
            setup({ el, App, props, plugin }) {
                const mounted = createApp({ render: () => h(App, props) })
                    .use(plugin)
                    .use(ZiggyVue)
                    .mount(el);
                scaleVanilla?.initScaleForInertia?.();
                return mounted;
            },
            progress: {
                color: "#4B5563",
            },
        });
    });
} else {
    import("./site")
        .then(({ default: bootstrapSite }) => bootstrapSite?.())
        .catch((error) => {
            if (import.meta.env.DEV) {
                console.error("[site] bootstrap failed", error);
            }
        });
}
