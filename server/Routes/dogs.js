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
    console.log(dogObject);
    user.dogs.push(dogObject);
    console.log(user.dogs);
    // await user.save();
    res.status(201).json(savedDog);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
});

//Update some props of current dog
router.patch("/:dogId", async (req, res) => {
  try {
    const propsToUpdate = Object.keys(req.body);
    if (propsToUpdate.length === 0) {
      res.status(204).json({ message: "no data to update" });
    }
    const dog = await Dog.findById(req.params.dogId);
    propsToUpdate.forEach((element) => {
      dog[element] = req.body[element];
    });
    await dog.save();
    res.status(201).send(dog);
  } catch (error) {
    res.json({ message: error });
  }
});

//Update all data of current dog
router.put("/:dogId", async (req, res) => {
  try {
    const newData = Object.keys(req.body);
    if (newData.length === 0) {
      res.status(204).json({ message: "no data to update" });
    }
    const dog = await Dog.findById(req.params.dogId);
    if (!dog) {
      res.status(404).json({ message: "no dog with current ID in DB" });
    }
    newData.forEach((element) => {
      dog[element] = req.body[element];
    });
    await dog.save();
    res.status(201).send(dog);
  } catch (error) {
    res.json({ message: error });
  }
});

// Get data of current dog
router.get("/:dogId", async (req, res) => {
  try {
    const dogData = await Dog.findById(req.params.dogId);
    if (!dogData) {
      res.status(204).end();
    }
    res.status(200).send(dogData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

//Delete current dog
router.delete("/:dogId", async (req, res) => {
  try {
    const removedDog = await Dog.deleteOne({ _id: req.params.dogId });
    if (!removedDog) {
      res.status(404).json({ message: "no data with this ID" });
    }
    res.send(removedDog);
  } catch (error) {
    res.status(502).res.json({ message: error });
  }
});

//Get results for current dog
router.get("/results/:dogId", async (req, res) => {
  res.send("get all results for current dog");
});

module.exports = router;
