/* eslint-disable no-unused-vars */
const express = require('express');
const router = express.Router();
const Participant = require('../Model/Participant');
const userDbFunc = require('../Controllers/usersControllers');
const passport = require('passport');
const passwordTools = require('../Tools/passwordTools');
const { loginAuthentication } = require('../Tools/loginAuth');
const auth = passport.authenticate('jwt', { session: false });

//Submit data of user
router.post('/register', async (req, res) => {
  try {
    const savedUser = await userDbFunc.registerParticipant(req, res);
    const jwt = passwordTools.issueJWT(savedUser);
    res.status(201).json({
      success: true,
      user: savedUser,
      token: jwt.token,
      expiresIn: jwt.expires,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// TODO: Login user
router.post('/login', async (req, res) => {
  await loginAuthentication(req, res);
});

//Logout
router.get('/logout', (req, res) => {
  req.logout();
  res.end();
  //res.redirect('/');
});

//Update some data of current user
router.patch('/:userId', auth, async (req, res) => {
  try {
    const updatedUser = await userDbFunc.updateUserData(req, res);
    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get current user data
router.get('/:userId', auth, async (req, res) => {
  try {
    const userData = await userDbFunc.getUserData(req, res);
    res.status(200).send(userData);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get('/dogs/:userId', async (req, res) => {
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
});

module.exports = router;
