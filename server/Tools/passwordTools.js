const crypto = require("crypto");

function generateHash(password, salt) {
  const hash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");
  return hash;
}

function generatePassword(password) {
  const salt = crypto.randomBytes(32).toString("hex");
  const hash = generateHash(password, salt);

  return {
    salt: salt,
    hash: hash,
  };
}

function validatePassword(password, hash, salt) {
  const hashToVerify = generateHash(password, salt);
  return hash === hashToVerify;
}

module.exports.validatePassword = validatePassword;
module.exports.generatePassword = generatePassword;
