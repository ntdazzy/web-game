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

    const resolveSourceRoot = async (absolutePath) => {
        const stats = await fs.stat(absolutePath);

        if (! stats.isDirectory()) {
            return {
                source: absolutePath,
                watch: [absolutePath],
            };
        }

        const entries = await fs.readdir(absolutePath, { withFileTypes: true });
        const nested = entries.length === 1 && entries[0].isDirectory()
            ? path.resolve(absolutePath, entries[0].name)
            : null;

        if (nested && path.basename(absolutePath) === path.basename(nested)) {
            return {
                source: nested,
                watch: [absolutePath, nested],
            };
        }

        return {
            source: absolutePath,
            watch: [absolutePath],
        };
    };

    const existingMappings = async () => {
        const result = [];

        for (const mapping of mappings) {
            const source = path.resolve(projectRoot, mapping.source);

            try {
                await fs.access(source);
            } catch {
                continue;
            }

            try {
                const resolved = await resolveSourceRoot(source);
                result.push({ ...mapping, source: resolved.source, watch: resolved.watch });
            } catch {
                // ignore missing directories
            }
        }

        return result;
    };

    const syncAssets = async () => {
        const usableMappings = await existingMappings();

        await fs.mkdir(publicRoot, { recursive: true });

        const activeTargets = new Set();

        for (const { source, target } of usableMappings) {
            const destination = path.resolve(projectRoot, 'public', target);
            activeTargets.add(destination);

            await fs.rm(destination, { recursive: true, force: true });
            await fs.mkdir(path.dirname(destination), { recursive: true });
            await fs.cp(source, destination, { recursive: true });
        }

        const existingTargets = await fs.readdir(publicRoot, { withFileTypes: true }).catch((error) => {
            if (error.code === 'ENOENT') {
                return [];
            }

            throw error;
        });

        for (const entry of existingTargets) {
            const location = path.resolve(publicRoot, entry.name);
            if (! activeTargets.has(location)) {
                await fs.rm(location, { recursive: true, force: true });
            }
        }
    };

    let copyQueue = Promise.resolve();
    const queueAssetSync = () => {
        copyQueue = copyQueue
            .catch(() => {})
            .then(() => syncAssets());

        return copyQueue;
    };

    const debounce = (fn, delay = 120) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => fn(...args), delay);
        };
    };

    const handleChange = debounce((server) => {
        queueAssetSync()
            .then(() => {
                server.ws.send({ type: 'full-reload' });
            })
            .catch((error) => {
                console.error('[haitac-legacy-assets] Failed to sync assets', error);
            });
    }, 150);

    return [
        {
            name: 'haitac-legacy-assets:serve',
            apply: 'serve',
            async configureServer(server) {
                await syncAssets();

                let watcherReady = false;
                const usableMappings = await existingMappings();
                for (const { watch } of usableMappings) {
                    for (const watchPath of watch) {
                        server.watcher.add(watchPath);
                    }
                }

                server.watcher.on('ready', () => {
                    watcherReady = true;
                });

                const triggerIfReady = () => {
                    if (! watcherReady) {
                        return;
                    }

                    handleChange(server);
                };

                server.watcher.on('add', triggerIfReady);
                server.watcher.on('change', triggerIfReady);
                server.watcher.on('unlink', triggerIfReady);
            },
        },
        {
            name: 'haitac-legacy-assets:build',
            apply: 'build',
            async buildStart() {
                await syncAssets();
            },
            async closeBundle() {
                await syncAssets();
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
        watch: {
            ignored: [
                '**/public/assets/**',
            ],
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
