const router = require('express').Router();
const {
  registerDog,
  updateSomeDogProps,
  updateAllDogData,
  getDogData,
  deleteDog,
} = require('../Controllers/dogsControllers');
const { updateDogsArray } = require('../Controllers/usersControllers');
const {
  isUserOrAdmin,
  justDogOwnerStaffOrAdmin,
  dogOwnerAllRolesOrPublic,
  auth,
  blockIfPublic,
  justDogOwnerOrAdmin,
} = require('../Middleware/authMiddleware');

// Middleware to check JWT
router.use(auth);

// Submit data from dog-form
router.post(
  '/register/:userId',
  blockIfPublic,
  isUserOrAdmin,
  async (req, res) => {
    try {
      const savedDog = await registerDog(req, res);
      await updateDogsArray(req, res, savedDog);
      res.status(201).json(savedDog);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
);

//Update some props of current dog
router.patch(
  '/:dogId',
  blockIfPublic,
  justDogOwnerStaffOrAdmin,
  async (req, res) => {
    try {
      const dog = await updateSomeDogProps(req, res);
      res.status(201).send(dog);
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  },
);

//Update all data of current dog
router.put(
  '/:dogId',
  blockIfPublic,
  justDogOwnerStaffOrAdmin,
  async (req, res) => {
    try {
      const dog = await updateAllDogData(req, res);
      res.status(201).send(dog);
    } catch (error) {
      res.json({ message: error.message });
    }
  },
);

// Get data of current dog
router.get('/:dogId', dogOwnerAllRolesOrPublic, async (req, res) => {
  try {
    const dogData = await getDogData(req, res);
    res.status(200).send(dogData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//Delete current dog
router.delete(
  '/:dogId',
  blockIfPublic,
  justDogOwnerOrAdmin,
  async (req, res) => {
    try {
      const removedDog = await deleteDog(req, res);
      res.status(200).send(removedDog);
    } catch (error) {
      res.status(502).res.json({ message: error.message });
    }
  },
);

//Get results for current dog
router.get(
  '/results/:dogId',
  blockIfPublic,
  justDogOwnerStaffOrAdmin,
  async (req, res) => {
    res.send('get all results for current dog');
  },
);

module.exports = router;
