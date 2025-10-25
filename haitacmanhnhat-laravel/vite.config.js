import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import path from 'node:path';
import fs from 'node:fs/promises';

function legacyAssetsPlugin() {
    const sourceDir = path.resolve(__dirname, 'resources/assets');
    const publicDir = path.resolve(__dirname, 'public/assets');

    const copyAssets = async () => {
        await fs.rm(publicDir, { recursive: true, force: true });
        await fs.mkdir(publicDir, { recursive: true });
        await fs.cp(sourceDir, publicDir, { recursive: true });
    };

    const debounce = (fn, delay = 120) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => fn(...args), delay);
        };
    };

    const handleChange = debounce(async (server) => {
        await copyAssets();
        server.ws.send({ type: 'full-reload' });
    }, 150);

    return [
        {
            name: 'haitac-legacy-assets:serve',
            apply: 'serve',
            async configureServer(server) {
                await copyAssets();

                server.watcher.add(sourceDir);
                server.watcher.on('add', () => handleChange(server));
                server.watcher.on('change', () => handleChange(server));
                server.watcher.on('unlink', () => handleChange(server));
            },
        },
        {
            name: 'haitac-legacy-assets:build',
            apply: 'build',
            async buildStart() {
                await copyAssets();
            },
            async closeBundle() {
                await copyAssets();
            },
        },
    ];
}

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        ...legacyAssetsPlugin(),
    ],
});
