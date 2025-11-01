import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";

const fontFileRegex = /\.(woff2?|ttf|eot|svg)$/i;

export default defineConfig({
    plugins: [
        laravel({ input: ["resources/js/app.js"], refresh: true }),
        vue(),
    ],
    build: {
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    const name = assetInfo?.name ?? "";

                    if (fontFileRegex.test(name) && (name.startsWith("fa-") || name.startsWith("slick"))) {
                        return "assets/fonts/[name][extname]";
                    }

                    return "assets/[name]-[hash][extname]";
                },
            },
        },
    },
});
