const bcrypt = require('bcryptjs');

async function hashPassword(password) {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
}

async function verifyPassword(plainText, storedHash) {
    if (!storedHash) {
        return false;
    }
    if (storedHash.startsWith('$2a$') || storedHash.startsWith('$2b$') || storedHash.startsWith('$2y$')) {
        return bcrypt.compare(plainText, storedHash);
    }
    return plainText === storedHash;
}

module.exports = {
    hashPassword,
    verifyPassword
};
