const router = require('express').Router();
const Participant = require('../ServerModel/Participant');
//const User = require('../ServerModel/User');

router.post('/register', async (req, res) => {
  const participant = new Participant({
    email: req.body.email,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
    participantName: req.body.participantName,
    participantSurname: req.body.participantSurname,
    adress: req.body.adress,
    portalRoles: req.body.portalRoles,
  });
  try {
    const savedUser = await participant.save();
    res.send(savedUser);
    res.send('Widzi sciezke');
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;

/* new UserModel({
    name: req.body.name,
    password: req.body.password,
  }); */

//from participantModel:
/* const user = new ParticipantModel({
    email: req.body.email,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
    participantName: req.body.participantName,
    participantSurname: req.body.participantSurname,
    adress: req.body.adress,
    portalRoles: req.body.portalRoles,
  });
  try {
    const saveduser = await user.save();
    res.send(saveduser);
  } catch (error) {
    res.status(400).send(error);
  } */
