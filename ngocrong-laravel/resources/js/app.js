import "../css/app.css";
import "./assets-manifest";
import "./modules/page-loading.js";

const inertiaRoot = document.getElementById("app");

if (inertiaRoot?.dataset?.page) {
    import("./bootstrap");
    import("@inertiajs/vue3").then(({ createInertiaApp, router }) => {
        Promise.all([
            import("laravel-vite-plugin/inertia-helpers"),
            import("vue"),
            import("../../vendor/tightenco/ziggy"),
        ]).then(([helpers, vue, ziggy]) => {
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
                    return createApp({ render: () => h(App, props) })
                        .use(plugin)
                        .use(ZiggyVue)
                        .mount(el);
                },
                progress: {
                    color: "#4B5563",
                },
            });
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
