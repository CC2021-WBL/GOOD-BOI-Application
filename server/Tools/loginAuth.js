const Participant = require('../Model/Participant');
const { validatePassword, issueJWT } = require('./passwordTools');

module.exports.loginAuthentication = async (req, res) => {
  try {
    const user = await Participant.findOne({ email: req.body.email });

    if (!user) {
      res.status(401).json({ success: false, message: 'could not find user' });
    }

    const isValid = validatePassword(req.body.password, user.hash, user.salt);

    if (isValid) {
      const jwt = issueJWT(user);
      res.status(200).json({
        success: true,
        user: user,
        token: jwt.token,
        expiresIn: jwt.expires,
      });
    } else {
      res.status(401).json({ success: false, message: 'wrong password' });
    }
  } catch (error) {
    //next(error);
    res.status(500).end();
  }
};
