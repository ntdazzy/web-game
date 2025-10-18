function parsePower(value) {
    if (value === null || value === undefined) {
        return 0;
    }
    if (typeof value === 'number') {
        return value;
    }
    const numeric = String(value).replace(/[^0-9]/g, '');
    if (!numeric.length) {
        return 0;
    }
    return parseInt(numeric, 10);
}

function formatNumber(value, locale = 'vi-VN') {
    const formatter = new Intl.NumberFormat(locale);
    return formatter.format(value || 0);
}

module.exports = {
    parsePower,
    formatNumber
};
