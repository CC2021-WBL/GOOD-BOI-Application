const Dog = require('../Model/Dog');

async function registerDog(req, res) {
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
    if (!savedDog) {
      res.status(400).json({ message: 'inappropriate data' });
    }
    return savedDog;
  } catch (error) {
    res.status(400).json({ message: error });
  }
}

async function updateSomeDogProps(req, res) {
  try {
    const propsToUpdate = Object.keys(req.body);
    if (propsToUpdate.length === 0) {
      res.status(204).json({ message: 'no data to update' });
    }
    const dog = await Dog.findById(req.params.dogId);
    propsToUpdate.forEach((element) => {
      dog[element] = req.body[element];
    });
    await dog.save();
    return dog;
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function updateAllDogData(req, res) {
  try {
    const newData = Object.keys(req.body);
    if (newData.length === 0) {
      res.status(204).json({ message: 'no data to update' });
    }
    const dog = await Dog.findById(req.params.dogId);
    if (!dog) {
      res.status(404).json({ message: 'no dog with current ID in DB' });
    }
    newData.forEach((element) => {
      dog[element] = req.body[element];
    });
    const updatedDog = await dog.save();
    if (!updatedDog) {
      res.status(500).json({ message: 'saving error' });
    } else {
      return updatedDog;
    }
  } catch (error) {
    res.send(error.message);
  }
}

async function getDogData(req, res) {
  try {
    const dogData = await Dog.findById(req.params.dogId);
    if (!dogData) {
      res.status(204).end();
    } else {
      return dogData;
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
}

async function deleteDog(req, res) {
  try {
    const removedDog = await Dog.deleteOne({ _id: req.params.dogId });
    if (!removedDog) {
      res.status(404).json({ message: 'no data with this ID' });
    } else {
      return removedDog;
    }
  } catch (error) {
    res.status(502).res.json({ message: error });
  }
}

module.exports = {
  registerDog,
  updateSomeDogProps,
  updateAllDogData,
  getDogData,
  deleteDog,
};
