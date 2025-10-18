const express = require('express');
const db = require('../db');
const asyncHandler = require('../utils/asyncHandler');
const { parsePower, formatNumber } = require('../utils/format');

const router = express.Router();

router.get(
    '/top-power',
    asyncHandler(async (req, res) => {
        const limitInput = parseInt(req.query.limit, 10);
        const limit = Number.isNaN(limitInput) ? 10 : Math.min(Math.max(limitInput, 1), 50);

        const [rows] = await db.execute(
            `SELECT p.id, p.name, p.power, a.server_login
             FROM player p
             LEFT JOIN account a ON a.id = p.account_id
             WHERE p.name IS NOT NULL AND p.name <> ''
             ORDER BY CAST(REPLACE(REPLACE(p.power, ',', ''), '.', '') AS UNSIGNED) DESC
             LIMIT ?`,
            [limit]
        );

        const data = rows.map((row) => {
            const powerValue = parsePower(row.power);
            return {
                id: row.id,
                name: row.name,
                power: powerValue,
                power_formatted: formatNumber(powerValue),
                server: row.server_login ? `s${row.server_login}` : null
            };
        });

        return res.json({
            success: true,
            data
        });
    })
);

module.exports = router;
