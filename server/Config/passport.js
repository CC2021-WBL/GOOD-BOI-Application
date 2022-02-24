const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Participant = require('../Model/Participant');
const { validatePassword } = require('../Tools/passwordTools');

const customFields = {
  usernameField: 'email',
  passwordField: 'password',
};

const verifyCallback = async (username, password, done) => {
  try {
    const user = await Participant.findOne({ email: username });

    if (!user) {
      return done(null, false);
    }

    const isValid = validatePassword(password, user.hash, user.salt);

    if (isValid) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    done(error);
  }
};

const localStrategy = new LocalStrategy(customFields, verifyCallback);

passport.use(localStrategy);

// ----------------------------- JWT ------------------------------------
const fs = require('fs');
const path = require('path');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const pathToKey = path.join(__dirname, '..', 'Tools', 'id_rsa_pub.pem');

const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

// const passportJWTOptions = {
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // jesli jwt w cookie --> trzeba cookie extractor
//   secretOrKey: PUB_KEY,
//   issuer: 'issuer here',
//   audience: 'audience here',
//   algorithms: ['RS256'],
//   ignoreExpiration: false,
//   passReqToCallback: false,
//   jsonWebTokenOptions: {
//     complete: false,
//     clockTolerance: '',
//     maxAge: '2d',
//     clockTimestamp: '100',
//     nonce: 'string here for OpenID',
//   },
// };

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // jesli jwt w cookie --> trzeba cookie extractor
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

// to do express session???????????????????
/* passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (userId, done) => {
  try {
    const user = await Participant.findById(userId);
    if (user) {
      (user) => {
        done(null, user);
      };
    }
  } catch (error) {
    done(error);
  }
});
 */
