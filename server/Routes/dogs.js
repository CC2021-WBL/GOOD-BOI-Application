const router = require('express').Router();
const {
  registerDog,
  updateSomeDogProps,
  updateAllDogData,
  getDogData,
  deleteDog,
} = require('../Controllers/dogsControllers');
const {
  updateDogsArray,
  changeDogDataInParticipants,
} = require('../Controllers/usersControllers');
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
    const savedDog = await registerDog(req, res);
    if (savedDog) {
      await updateDogsArray(req, res, savedDog);
    }
    res.status(201).send(savedDog);
  },
);

//Update some props of current dog
router.patch(
  '/:dogId',
  blockIfPublic,
  isDogOwnerStaffOrAdmin,
  async (req, res) => {
    try {
      const dogObject = await updateSomeDogProps(req, res);

      if (dogObject.prevDogName !== dogObject.updatedDog.dogName) {
        await changeDogDataInParticipants(res, dogObject.updatedDog);
      }
      res.status(201).send(dogObject.updatedDog);
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
      const dogObject = await updateAllDogData(req, res);
      if (dogObject.prevDogName !== dogObject.updatedDog.dogName) {
        const response = await changeDogDataInParticipants(
          res,
          dogObject.updatedDog,
        );
        console.log(response);
      }
      res.status(201).send(dogObject.updatedDog);
    } catch (error) {
      res.status(400).json(error.message);
    }
  },
);

// Get data of current dog
router.get('/:dogId', isDogOwnerAllRolesOrPublic, async (req, res) => {
  const dogData = await getDogData(req, res);
  if (dogData) {
    res.status(200).send(dogData);
  }
});

//Delete current dog
router.delete('/:dogId', blockIfPublic, isDogOwnerOrAdmin, async (req, res) => {
  const removedDog = await deleteDog(req, res);
  res.status(200).send(removedDog);
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
