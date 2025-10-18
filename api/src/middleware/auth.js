const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Không tìm thấy thông tin đăng nhập.'
        });
    }

    try {
        const payload = jwt.verify(token, config.jwt.secret);
        req.user = payload;
        return next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Phiên đăng nhập đã hết hạn hoặc không hợp lệ.'
        });
    }
};
