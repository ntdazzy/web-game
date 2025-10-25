import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import path from 'node:path';
import fs from 'node:fs/promises';

function legacyAssetsPlugin() {
    const projectRoot = __dirname;
    const publicRoot = path.resolve(projectRoot, 'public/assets');

    const mappings = [
        { source: 'resources/css/legacy', target: 'assets/css' },
        { source: 'resources/js/legacy', target: 'assets/js' },
        { source: 'resources/data/legacy', target: 'assets/data' },
        { source: 'resources/static/fonts', target: 'assets/fonts' },
        { source: 'resources/static/webfonts', target: 'assets/webfonts' },
        { source: 'resources/static/images', target: 'assets/images' },
        { source: 'resources/static/imgs', target: 'assets/imgs' },
        { source: 'resources/static/videos', target: 'assets/videos' },
        { source: 'resources/static/files', target: 'assets/files' },
        { source: 'resources/static/dl', target: 'assets/dl' },
        { source: 'resources/static/stms', target: 'assets/stms' },
    ];

    const existingMappings = async () => {
        const result = [];

        for (const mapping of mappings) {
            const source = path.resolve(projectRoot, mapping.source);

            try {
                await fs.access(source);
                result.push({ ...mapping, source });
            } catch {
                // ignore missing directories
            }
        }

        return result;
    };

    const copyAssets = async () => {
        const usableMappings = await existingMappings();

        await fs.rm(publicRoot, { recursive: true, force: true });
        await fs.mkdir(publicRoot, { recursive: true });

        for (const { source, target } of usableMappings) {
            const destination = path.resolve(projectRoot, 'public', target);
            await fs.mkdir(path.dirname(destination), { recursive: true });
            await fs.cp(source, destination, { recursive: true });
        }
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

                const usableMappings = await existingMappings();
                for (const { source } of usableMappings) {
                    server.watcher.add(source);
                }

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
    server: {
        host: '127.0.0.1',
        port: 5173,
        strictPort: true,
        hmr: {
            host: '127.0.0.1',
            port: 5173,
        },
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        ...legacyAssetsPlugin(),
    ],
});
