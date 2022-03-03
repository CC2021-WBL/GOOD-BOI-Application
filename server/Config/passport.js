const Participant = require('../Model/Participant');
const fs = require('fs');
const path = require('path');
const { cookieExtractor } = require('../Tools/cookieExtractor');
const JwtStrategy = require('passport-jwt').Strategy;

const pathToKey = path.join(__dirname, '..', 'Tools', 'id_rsa_pub.pem');

const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

const jwtOptions = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: PUB_KEY,
  algorithms: ['RS256'],
  ignoreExpiration: false,
  jsonWebTokenOptions: {
    maxAge: '2 days',
  },
};

const jwtVerifyCallback = async (payload, done) => {
  try {
    const user = await Participant.findOne({ _id: payload.sub });
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    done(error, false);
  }
};

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerifyCallback);

module.exports = (passport) => {
  passport.use(jwtStrategy);
};
