const router = require('express').Router();
const {
  registerDog,
  updateSomeDogProps,
  updateAllDogData,
  getDogData,
  deleteDog,
} = require('../Controllers/dogsControllers');
const { updateDogsArray } = require('../Controllers/usersControllers');
const Dog = require("../Model/Dog");

// Submit data from dog-form
router.post('/register/:userId', async (req, res) => {
  try {
    const savedDog = await registerDog(req, res);
    await updateDogsArray(req, res, savedDog);
    res.status(201).json(savedDog);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

//Update some props of current dog
router.patch('/:dogId', async (req, res) => {
  try {
    const dog = await updateSomeDogProps(req, res);
    res.status(201).send(dog);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

//Update all data of current dog
router.put('/:dogId', async (req, res) => {
  try {
    const dog = await updateAllDogData(req, res);
    res.status(201).send(dog);
  } catch (error) {
    res.json({ message: error });
  }
});

// Get data of current dog
router.get('/:dogId', async (req, res) => {
  try {
    const dogData = await getDogData(req, res);
    res.status(200).send(dogData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

//Delete current dog - mock option
router.delete('/:dogId', async (req, res) => {
  try {
    const removedDog = await deleteDog(req, res);
    res.status(200).send(removedDog);
  } catch (error) {
    res.status(502).res.json({ message: error });
  }
});

//Get results for current dog
router.get('/results/:dogId', async (req, res) => {
  res.send('get all results for current dog');
});

// Get data of current dog
router.get('/', async (req, res) => {
  console.log('dogos?')
  try {
    const dogData = await Dog.find();
    console.log(dogData)
    res.status(200).send(dogData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

module.exports = router;
