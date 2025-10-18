const { validationResult } = require('express-validator');

module.exports = function validate(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const list = errors.array({ onlyFirstError: true });
        return res.status(400).json({
            success: false,
            message: list[0]?.msg || 'Dữ liệu không hợp lệ.',
            errors: list
        });
    }
    return next();
};
