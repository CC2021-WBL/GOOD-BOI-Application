const router = require("express").Router();
const Dog = require("../Model/Dog");
const Participant = require("../Model/Participant");

// Submit data from dog-form
router.post("/register/:userId", async (req, res) => {
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
    participants: req.params.userId,
    results: req.body.results,
  });
  try {
    const savedDog = await dog.save();
    const user = await Participant.findById(req.params.userId);
    const dogObject = {
      dogId: savedDog._id.valueOf(),
      dogName: savedDog.dogName,
    };
    user.dogs.push(dogObject);
    await user.save();
    res.status(201).json(savedDog);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

//Update current dog- mock option, updates just current value, not overwrites whole document / patch lub put
router.patch("/:dogId", async (req, res) => {
  try {
    const updatedDog = await Dog.updateOne(
      { _id: req.params.dogId },
      { $set: { dogName: req.body.title } }
    );
    res.json(updatedDog);
  } catch (error) {
    res.json({ message: error });
  }
});

// Get data of current dog
router.get("/:dogId", async (req, res) => {
  try {
    const dogData = await Dog.findById(req.params.dogId);
    res.send(dogData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

//Delete current dog - mock option
router.delete("/:dogId", async (req, res) => {
  try {
    const removedDog = await Dog.remove({ _id: req.params.dogId });
    res.json(removedDog);
  } catch (error) {
    res.json({ message: error });
  }
});

//Get results for current dog
router.get("/results/:dogId", async (req, res) => {
  res.send("get all results for current dog");
});

module.exports = router;
