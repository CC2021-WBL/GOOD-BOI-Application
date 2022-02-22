const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Participant = require("../Model/Participant");
const { validatePassword } = require("../Tools/passwordTools");

const customFields = {
  usernameField: "email",
  passwordField: "password",
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

// to do express session???????????????????
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (userId, done) => {
  try {
    const user = await Participant.findById(userId);
    (user) => {
      done(null, user);
    };
  } catch (error) {
    done(error);
  }
});
