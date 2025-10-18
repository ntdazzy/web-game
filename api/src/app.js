const express = require('express');
const cors = require('cors');
const config = require('./config');
const authRoutes = require('./routes/auth');
const leaderboardRoutes = require('./routes/leaderboard');

const app = express();

app.set('trust proxy', true);

const allowedOrigins = (config.appUrl || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

app.use(cors({
    origin(origin, callback) {
        if (!origin) {
            return callback(null, true);
        }
        if (!allowedOrigins.length || allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        return callback(null, false);
    },
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        message: 'OK',
        timestamp: new Date().toISOString()
    });
});

app.use('/api/auth', authRoutes);
app.use('/api/leaderboard', leaderboardRoutes);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Không tìm thấy tài nguyên.'
    });
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    if (config.env !== 'test') {
        // eslint-disable-next-line no-console
        console.error(err);
    }

    const status = err.status || 500;
    res.status(status).json({
        success: false,
        message: err.message || 'Đã xảy ra lỗi không xác định.'
    });
});

module.exports = app;
