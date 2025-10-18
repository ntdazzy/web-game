const mysql = require('mysql2/promise');
const config = require('./config');

const pool = mysql.createPool({
    host: config.db.host,
    port: config.db.port,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    timezone: '+00:00',
    charset: 'utf8mb4_general_ci'
});

pool.on('connection', () => {
    if (config.env !== 'test') {
        // eslint-disable-next-line no-console
        console.log('[mysql] connection established');
    }
});

module.exports = pool;
