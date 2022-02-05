const express = require('express');
const router = express.Router();
const Dog = require('../ServerModel/Dog');
const Participant = require('../ServerModel/Participant');

// Get data of current dog
router.get('/dog-data', async (req, res) => {
  try {
    const dogData = await Dog.findById(req.body._id);
    res.json(dogData);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//Delete current dog - mock option
router.delete('/:dogId', async (req, res) => {
  try {
    const removedDog = await Dog.remove({ _id: req.params.dogId });
    res.json(removedDog);
  } catch (error) {
    res.json({ message: error });
  }
});

//Update current dog- mock option, updates just current value, not overwrites whole document
router.patch('/:dogId', async (req, res) => {
  try {
    const updatedDog = await Dog.updateOne(
      { _id: req.params.dogId },
      { $set: { dogName: req.body.title } },
    );
    res.json(updatedDog);
  } catch (error) {
    res.json({ message: error });
  }
});

// Submit data from dog-form
router.post('/dog-form', async (req, res) => {
  const dog = new Dog({
    dogName: req.body.dogName,
    kennelName: req.body.kennelName,
    pkr: req.body.pkr,
    registrationNumber: req.body.registrationNumber,
    breed: req.body.breed,
    dateOfBirth: req.body.dateOfBirth,
    color: req.body.color,
    chipOrTattoo: req.body.chipOrTattoo,
    sex: req.body.sex,
    owner: req.body.owner,
    results: req.body.results,
  });
  try {
    const savedDog = await dog.save();
    res.status(201).json(savedDog);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

//Submit data of user
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
    res.statuse(201).send(savedUser);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;
