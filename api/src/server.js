const app = require('./app');
const config = require('./config');
const db = require('./db');

async function bootstrap() {
    try {
        await db.query('SELECT 1');
        // eslint-disable-next-line no-console
        console.log(`[mysql] Connected to ${config.db.database} at ${config.db.host}:${config.db.port}`);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('[mysql] Unable to connect to database:', error.message);
        process.exit(1);
    }

    app.listen(config.port, () => {
        // eslint-disable-next-line no-console
        console.log(`[server] API is running on http://localhost:${config.port}`);
    });
}

process.on('unhandledRejection', (reason) => {
    // eslint-disable-next-line no-console
    console.error('[unhandledRejection]', reason);
});

process.on('uncaughtException', (error) => {
    // eslint-disable-next-line no-console
    console.error('[uncaughtException]', error);
});

bootstrap();
