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

      const userToSend = {
        userId: user._id,
        userName: user.participantName,
        userSurname: user.participantSurname,
        roles: user.portalRoles,
      };

      const cookieOptions = {
        maxAge: 24 * 60 * 60 * 1000 * 2,
        secure: true,
        httpOnly: true,
      };

      res.cookie('jwt', jwt.token, cookieOptions);
      res.status(200).json({
        success: true,
        user: userToSend,
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
