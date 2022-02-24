const base64url = require('base64url');
const crypto = require('crypto');
const signDocument = crypto.createSign('RSA-SHA256');
const verifyFunction = crypto.createVerify('RSA-SHA256');
const fs = require('fs');

// ISSUANCE PART

const headerObj = {
  alg: 'RS256',
  typ: 'JWT',
};

const payloadObj = {
  sub: 'IDnumber',
  name: 'Matylda',
  surname: 'Borutka',
  roles: ['participant', 'staff'],
  iat: Date.now(),
};

const headerObjString = JSON.stringify(headerObj);
const payloadObjString = JSON.stringify(payloadObj);

const headerInBase64Url = base64url(headerObjString);
const payloadInBase64Url = base64url(payloadObjString);

// hashing data
signDocument.write(headerInBase64Url + '.' + payloadInBase64Url);
signDocument.end();

// signing data with private key
const PRIV_KEY = fs.readFileSync(__dirname + '/id_rsa_priv.pem', 'utf8');
const signatureInBase64 = signDocument.sign(PRIV_KEY, 'base64');
const signatureInBase64Url = base64url.fromBase64(signatureInBase64);

// VERIFICATION

// const JWT =
//   'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.NHVaYe26MbtOYhSKkoKYdFVomg4i8ZJd8_-RU8VNbftc4TSMb4bXP3l3YlNWACwyXPGffz5aXHc6lty1Y2t4SWRqGteragsVdZufDn5BlnJl9pdR_kdVFUsra2rWKEofkZeIC4yWytE58sMIihvo9H1ScmmVwBcQP6XETqYd0aSHp1gOa9RdUPDvoXQ5oqygTqVtxaDr6wUFKrKItgBMzWIdNZ6y7O9E0DhEPTbE9rfBo6KTFsHAZnMg4k68CDp2woYIaXbmYTWcvbzIuHO7_37GT79XdIwkm95QJ7hYC9RiwrV7mesbY4PAahERJawntho0my942XheVLmGwLMBkQ';

// const jwtParts = JWT.split('.');

// const headerJwt = jwtParts[0];
// const payloadJwt = jwtParts[1];
// const signatureJwt = jwtParts[2];

verifyFunction.write(headerInBase64Url + '.' + payloadInBase64Url);
verifyFunction.end();
const jwtSignInBase64 = base64url.toBase64(signatureInBase64Url);

const PUB_KEY = fs.readFileSync(__dirname + '/id_rsa_pub.pem', 'utf8');

const isSignatureValid = verifyFunction.verify(
  PUB_KEY,
  jwtSignInBase64,
  'base64',
);

console.log(isSignatureValid);
