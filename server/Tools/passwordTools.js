const crypto = require('crypto');
const jsonwebtoken = require('jsonwebtoken');
require('dotenv').config();
const PRIV_KEY = process.env.PRIV_KEY;

function generateHash(password, salt) {
  const hash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
    .toString('hex');
  return hash;
}

function generatePassword(password) {
  const salt = crypto.randomBytes(32).toString('hex');
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

function issueJWT(user) {
  const _id = user._id;

  const payload = {
    sub: _id,
    roles: user.participantRoles,
    iat: Date.now(),
    exp: Date.now() + 24 * 60 * 60 * 1000,
  };

  const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, {
    algorithm: 'RS256',
  });

  return {
    token: 'Bearer ' + signedToken,
  };
}

module.exports.validatePassword = validatePassword;
module.exports.generatePassword = generatePassword;
module.exports.issueJWT = issueJWT;
