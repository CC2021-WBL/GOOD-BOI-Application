const crypto = require('crypto');

function encryptWithPrivateKey(privateKey, message) {
  const bufferMessage = Buffer.from(message, 'utf8');

  return crypto.privateEncrypt(privateKey, bufferMessage);
}

module.exports.encryptWithPrivateKey = encryptWithPrivateKey;
