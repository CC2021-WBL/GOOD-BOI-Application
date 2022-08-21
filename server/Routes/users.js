const express = require('express');
const router = express.Router();
const Participant = require('../Model/Participant');
const userDbFunc = require('../Controllers/usersControllers');
const { loginAuthentication } = require('../Tools/loginAuth');
const {
  isUserOrAdmin,
  isUserStaffOrAdmin,
  auth,
  blockIfPublic,
} = require('../Middleware/authMiddleware');
const { ERROR_MSG } = require('../Consts/errorMessages');

//Submit data of user
router.post('/register', async (req, res) => {
  const savedUser = await userDbFunc.registerParticipant(req, res);
  if (savedUser) {
    res.status(201).json({
      success: true,
      user: savedUser,
    });
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

router.get('/jwt', blockIfPublic, async (req, res) => {
  const userData = await userDbFunc.getUserDataByJwt(req, res);
  res.status(200).send(userData);
});

//Update some data of current user
router.patch('/:userId', blockIfPublic, isUserOrAdmin, async (req, res) => {
  const updatedUser = await userDbFunc.updateUserData(req, res);
  if (updatedUser) {
    res.status(200).send(updatedUser);
  }
});

//Get current user data
router.get('/:userId', async (req, res) => {
  const userData = await userDbFunc.getUserData(req, res);
  if (userData) {
    res.status(200).send(userData);
  }
});

//Get dogs from current user
router.get(
  '/dogs/:userId',
  blockIfPublic,
  isUserStaffOrAdmin,
  async (req, res) => {
    try {
      const dogs = await Participant.findById(req.params.userId).select('dogs');
      if (dogs) {
        res.status(200).send(dogs);
      } else {
        res.status(404).json({ message: ERROR_MSG[404] });
      }
    } catch (error) {
      res.status(500).json({ message: ERROR_MSG[500] });
    }
  },
);

module.exports = router;
