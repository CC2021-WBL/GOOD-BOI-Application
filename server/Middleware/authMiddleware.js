/* eslint-disable no-unused-vars */

const Participant = require('../Model/Participant');
const { validatePassword } = require('../Tools/passwordTools');

module.exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).json({ message: 'user is not recognized' });
  }
};

module.exports.isAdmin = (req, res, next) => {};

module.exports.isManager = (req, res, next) => {};

module.exports.isStaff = (req, res, next) => {};

/* module.exports.loginAuthentication = async (req, res, next) => {
  try {
    const user = await Participant.findOne({ email: req.body.email });

    if (!user) {
      res.status(401).json({ success: false, message: 'could not find user' });
    }

    const isValid = validatePassword(req.body.password, user.hash, user.salt);

    if (isValid) {
    }
  } catch (error) {}
}; */
