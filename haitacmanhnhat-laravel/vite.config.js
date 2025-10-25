import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        viteStaticCopy({
            targets: [
                {
                    src: 'resources/legacy/css/**/*',
                    dest: '../assets/css',
                },
                {
                    src: 'resources/legacy/js/**/*',
                    dest: '../assets/js',
                },
            ],
        }),
    ],
});
