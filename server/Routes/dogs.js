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
  isDogOwnerStaffOrAdmin,
  isDogOwnerAllRolesOrPublic,
  auth,
  blockIfPublic,
  isDogOwnerOrAdmin,
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
      res.status(400).send(error.message);
    }
  },
);

//Update some props of current dog
router.patch(
  '/:dogId',
  blockIfPublic,
  isDogOwnerStaffOrAdmin,
  async (req, res) => {
    try {
      const dog = await updateSomeDogProps(req, res);
      res.status(201).send(dog);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
);

//Update all data of current dog
router.put(
  '/:dogId',
  blockIfPublic,
  isDogOwnerStaffOrAdmin,
  async (req, res) => {
    try {
      const dog = await updateAllDogData(req, res);
      res.status(201).send(dog);
    } catch (error) {
      res.status(400).json(error.message);
    }
  },
);

// Get data of current dog
router.get('/:dogId', isDogOwnerAllRolesOrPublic, async (req, res) => {
  try {
    const dogData = await getDogData(req, res);
    res.status(200).send(dogData);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//Delete current dog
router.delete('/:dogId', blockIfPublic, isDogOwnerOrAdmin, async (req, res) => {
  try {
    const removedDog = await deleteDog(req, res);
    res.status(200).send(removedDog);
  } catch (error) {
    res.status(502).res.send(error.message);
  }
});

//Get results for current dog
router.get(
  '/results/:dogId',
  blockIfPublic,
  isDogOwnerStaffOrAdmin,
  async (req, res) => {
    res.send('get all results for current dog');
  },
);

module.exports = router;
