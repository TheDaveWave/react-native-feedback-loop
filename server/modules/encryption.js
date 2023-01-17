const bcrypt = require("bcrypt");
const SALT_FACTOR = 10;

function encryptPassword(password) {
    const salt = bcrypt.genSaltSync(SALT_FACTOR);
    return bcrypt.hashSync(password, salt);
}

function comparePassword(candidatePassword, storedPassword) {
    return bcrypt.compareSync(candidatePassword, storedPassword);
}

module.exports = {
    encryptPassword,
    comparePassword,
}