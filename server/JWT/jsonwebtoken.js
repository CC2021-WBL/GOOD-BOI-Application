// czy będzie potrzeba??? const base64url = require('base64url');

const jwt = require('jsonwebtoken');
const fs = require('fs');

const PRIV_KEY = fs.readFileSync(__dirname + '/id_rsa_priv.pem', 'utf8');
const PUB_KEY = fs.readFileSync(__dirname + '/id_rsa_pub.pem', 'utf8');

const payloadObj = {
  sub: 'IDnumber',
  name: 'Matylda',
  surname: 'Borutka',
  roles: ['participant', 'staff'],
  iat: Date.now(),
  exp: Date.now() + 24 * 60 * 60 * 1000,
};

const signedJWT = jwt.sign(payloadObj, PRIV_KEY, { algorithm: 'RS256' });

console.log(signedJWT);

jwt.verify(signedJWT, PUB_KEY, { algorithms: ['RS256'] }, (err, payload) => {
  console.log(err || payload);
});
