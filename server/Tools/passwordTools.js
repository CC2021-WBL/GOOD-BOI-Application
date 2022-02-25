const crypto = require('crypto');
const jsonwebtoken = require('jsonwebtoken');
const fs = require('fs');
const PRIV_KEY = fs.readFileSync(__dirname + '/id_rsa_priv.pem', 'utf8');

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
  const expiresIn = '2d';

  const payload = {
    sub: _id,
    roles: user.participantRoles,
    iat: Date.now(),
    exp: Date.now() + 24 * 60 * 60 * 1000,
  };

  const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, {
    expiresIn: expiresIn,
    algorithm: 'RS256',
  });

  return {
    token: 'Bearer ' + signedToken,
    expires: expiresIn,
  };
}

module.exports.validatePassword = validatePassword;
module.exports.generatePassword = generatePassword;
module.exports.issueJWT = issueJWT;
