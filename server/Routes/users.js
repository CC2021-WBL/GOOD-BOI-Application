const express = require('express');
const router = express.Router();
const Participant = require('../Model/Participant');
const userDbFunc = require('../Controllers/usersControllers');
const passwordTools = require('../Tools/passwordTools');
const { loginAuthentication } = require('../Tools/loginAuth');
const {
  isUserOrAdmin,
  justUserStaffOrAdmin,
  auth,
  blockIfPublic,
} = require('../Middleware/authMiddleware');

//Submit data of user
router.post('/register', async (req, res) => {
  try {
    const savedUser = await userDbFunc.registerParticipant(req, res);
    const jwt = passwordTools.issueJWT(savedUser);
    res.status(201).json({
      success: true,
      user: savedUser,
      token: jwt.token,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Login user
router.post('/login', async (req, res) => {
  await loginAuthentication(req, res);
});

//Logout
router.get('/logout', (req, res) => {
  const cookieOptions = {
    maxAge: 1000,
    secure: true,
    httpOnly: true,
  };
  res
    .status(205)
    .cookie('jwt', 'delete', cookieOptions)
    .json({ message: 'logout' });
});

// Middleware to check JWT
router.use(auth);

//Update some data of current user
router.patch('/:userId', blockIfPublic, isUserOrAdmin, async (req, res) => {
  try {
    const updatedUser = await userDbFunc.updateUserData(req, res);
    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get current user data
router.get('/:userId', async (req, res) => {
  try {
    const userData = await userDbFunc.getUserData(req, res);
    res.status(200).send(userData);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//Get dogs from current user
router.get(
  '/dogs/:userId',
  blockIfPublic,
  justUserStaffOrAdmin,
  async (req, res) => {
    try {
      const dogs = await Participant.findById(req.params.userId).select('dogs');
      if (dogs) {
        res.status(200).send(dogs);
      } else {
        res.status(404).json({ message: 'no dogs for current user' });
      }
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
);

module.exports = router;
