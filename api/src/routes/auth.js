const express = require('express');
const { body } = require('express-validator');
const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');
const db = require('../db');
const config = require('../config');
const validate = require('../middleware/validate');
const asyncHandler = require('../utils/asyncHandler');
const { hashPassword, verifyPassword } = require('../utils/password');

const router = express.Router();

const usernameRule = (min = 4) => body('username')
    .trim()
    .isLength({ min })
    .withMessage(`Tên đăng nhập phải có ít nhất ${min} ký tự.`)
    .isLength({ max: 50 })
    .withMessage('Tên đăng nhập tối đa 50 ký tự.')
    .matches(/^[a-zA-Z0-9_.-]+$/)
    .withMessage('Tên đăng nhập chỉ được chứa chữ, số và các ký tự ".", "-", "_".');

const passwordRule = body('password')
    .isLength({ min: 6 })
    .withMessage('Mật khẩu phải có ít nhất 6 ký tự.')
    .isLength({ max: 100 })
    .withMessage('Mật khẩu tối đa 100 ký tự.');

function buildAuthResponse(userRow) {
    const payload = {
        sub: userRow.id,
        username: userRow.username
    };

    const token = jwt.sign(payload, config.jwt.secret, {
        expiresIn: config.jwt.expiresIn
    });

    const expiresAt = dayjs().add(config.session.durationDays, 'day').toISOString();

    return {
        token,
        expiresAt,
        user: {
            id: userRow.id,
            username: userRow.username,
            email: userRow.gmail,
            server: userRow.server_login,
            lastLogin: userRow.last_time_login ? dayjs(userRow.last_time_login).toISOString() : null
        }
    };
}

router.post(
    '/register',
    [
        usernameRule(4),
        passwordRule,
        body('passwordConfirm')
            .custom((value, { req }) => value === req.body.password)
            .withMessage('Mật khẩu xác nhận không khớp.'),
        body('email')
            .optional({ checkFalsy: true })
            .isEmail()
            .withMessage('Địa chỉ email không hợp lệ.')
    ],
    validate,
    asyncHandler(async (req, res) => {
        const { username, password, email } = req.body;

        const [existing] = await db.execute(
            'SELECT id FROM account WHERE username = ? LIMIT 1',
            [username]
        );
        if (existing.length) {
            return res.status(409).json({
                success: false,
                message: 'Tên đăng nhập đã được sử dụng.'
            });
        }

        const hashedPassword = await hashPassword(password);

        const [result] = await db.execute(
            `INSERT INTO account (username, password, gmail, active, create_time, update_time)
             VALUES (?, ?, ?, 1, NOW(), NOW())`,
            [username, hashedPassword, email || null]
        );

        const [rows] = await db.execute(
            `SELECT id, username, gmail, server_login, last_time_login, password
             FROM account WHERE id = ? LIMIT 1`,
            [result.insertId]
        );

        const response = buildAuthResponse(rows[0]);

        return res.status(201).json({
            success: true,
            message: 'Đăng ký tài khoản thành công.',
            data: response
        });
    })
);

router.post(
    '/login',
    [
        usernameRule(1),
        body('password')
            .notEmpty()
            .withMessage('Vui lòng nhập mật khẩu.')
    ],
    validate,
    asyncHandler(async (req, res) => {
        const { username, password } = req.body;

        const [rows] = await db.execute(
            `SELECT id, username, password, gmail, active, ban, server_login, last_time_login
             FROM account
             WHERE username = ?
             LIMIT 1`,
            [username]
        );

        if (!rows.length) {
            return res.status(401).json({
                success: false,
                message: 'Sai tên đăng nhập hoặc mật khẩu.'
            });
        }

        const user = rows[0];

        if (user.ban && Number(user.ban) !== 0) {
            return res.status(403).json({
                success: false,
                message: 'Tài khoản của bạn đã bị khóa.'
            });
        }

        if (user.active === 0) {
            return res.status(403).json({
                success: false,
                message: 'Tài khoản của bạn chưa được kích hoạt.'
            });
        }

        const passwordValid = await verifyPassword(password, user.password);
        if (!passwordValid) {
            return res.status(401).json({
                success: false,
                message: 'Sai tên đăng nhập hoặc mật khẩu.'
            });
        }

        await db.execute(
            `UPDATE account
             SET last_time_login = NOW(), update_time = NOW()
             WHERE id = ?`,
            [user.id]
        );

        const response = buildAuthResponse(user);

        return res.json({
            success: true,
            message: 'Đăng nhập thành công.',
            data: response
        });
    })
);

router.post(
    '/forgot-password',
    [
        usernameRule(1),
        body('newPassword')
            .isLength({ min: 6 })
            .withMessage('Mật khẩu mới phải có ít nhất 6 ký tự.')
            .isLength({ max: 100 })
            .withMessage('Mật khẩu mới tối đa 100 ký tự.'),
        body('email')
            .optional({ checkFalsy: true })
            .isEmail()
            .withMessage('Địa chỉ email không hợp lệ.')
    ],
    validate,
    asyncHandler(async (req, res) => {
        const { username, newPassword, email } = req.body;

        const [rows] = await db.execute(
            `SELECT id, username, gmail
             FROM account
             WHERE username = ?
             LIMIT 1`,
            [username]
        );

        if (!rows.length) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy tài khoản.'
            });
        }

        const user = rows[0];

        if (user.gmail) {
            if (!email || email.toLowerCase() !== String(user.gmail).toLowerCase()) {
                return res.status(403).json({
                    success: false,
                    message: 'Email xác nhận không khớp với tài khoản.'
                });
            }
        }

        const hashedPassword = await hashPassword(newPassword);

        await db.execute(
            `UPDATE account
             SET password = ?, gmail = IFNULL(gmail, ?), update_time = NOW()
             WHERE id = ?`,
            [hashedPassword, email || user.gmail, user.id]
        );

        return res.json({
            success: true,
            message: 'Đổi mật khẩu thành công. Vui lòng đăng nhập lại.'
        });
    })
);

router.post(
    '/logout',
    asyncHandler(async (req, res) => {
        return res.json({
            success: true,
            message: 'Đã đăng xuất.'
        });
    })
);

module.exports = router;
