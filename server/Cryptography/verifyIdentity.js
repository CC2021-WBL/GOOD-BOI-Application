const crypto = require('crypto');
const fs = require('fs');
const decryptWithPublicKey = require('./decrypt').decryptWithPublicKey;

//mock data from sender
const receivedData = require('./signMessage').packageOfDataToSend;

//public key from sender
const publicKey = fs.readFileSync(__dirname + '/id_rsa_pub.pem', 'utf8');

// create same hash function as sender with given in data algorithm
const hash = crypto.createHash(receivedData.algorithm);

// decryptedMessage --> to zahashowana wiadomość
const decryptedMessage = decryptWithPublicKey(
  publicKey,
  receivedData.signedAndEncryptedData,
);

const decryptedMessageHex = decryptedMessage.toString();

// do porównania z decryptedMessage która jest zahashowana --> hashujemy oryginalną wiadomość napisaną normalnym tekstem
const hashOfOriginal = hash.update(JSON.stringify(receivedData.originalData));
// formatowanie do heksadycimal format
const hashOfOriginalHex = hashOfOriginal.digest('hex');

if (hashOfOriginalHex === decryptedMessageHex) {
  console.log('succes');
} else {
  console.log(
    'message was manipulated or sender was not a sender who should it be',
  );
}
