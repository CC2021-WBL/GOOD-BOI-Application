const fs = require('fs');
const crypto = require('crypto');
const encryptWithPrivateKey = require('./encrypt').encryptWithPrivateKey;
// const decryptWithPublicKey = require('./decrypt');

const hash = crypto.createHash('sha256');

// const publicKey = fs.readFileSync(__dirname + '/id_rsa_pub.pem', 'utf8');
// const privateKey = fs.readFileSync(__dirname + '/id_rsa_priv.pem', 'utf8');

const myData = {
  name: 'Matylda',
  surname: 'Borutka',
};

const myDataString = JSON.stringify(myData);

// setting the value of hash object
hash.update(myDataString);

//convert to hexadecimal format
const hashedData = hash.digest('hex');

const senderPrivateKey = fs.readFileSync(
  __dirname + '/id_rsa_priv.pem',
  'utf8',
);

const signedMessage = encryptWithPrivateKey(senderPrivateKey, hashedData);

const packageOfDataToSend = {
  algorithm: 'sha256',
  originalData: myData,
  signedAndEncryptedData: signedMessage,
};

module.exports.packageOfDataToSend = packageOfDataToSend;
