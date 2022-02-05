const router = require('express').Router();
const User = require('../ServerModel/User');

router.post('/register', async (req, res) => {
  const participant = new User({
    name: req.body.name,
    password: req.body.password,
  });
  try {
    const savedUser = await participant.save();
    res.statuse(201).send(savedUser);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;
