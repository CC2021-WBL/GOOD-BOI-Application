const crypto = require('crypto');

function decryptWithPublicKey(publicKey, encryptedMessage) {
  return crypto.publicDecrypt(publicKey, encryptedMessage);
}

module.exports.decryptWithPublicKey = decryptWithPublicKey;
