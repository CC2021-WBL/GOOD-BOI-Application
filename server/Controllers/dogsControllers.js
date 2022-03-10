const Dog = require('../Model/Dog');
const Participant = require('../Model/Participant');

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
    participants: [req.params.userId],
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
    dog.updatedAt = new Date();
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
    res.status(500).send(error.message);
  }
}

async function getDogData(req, res) {
  let dogData;
  try {
    if (req.access && req.access === 'public') {
      dogData = await Dog.findById(req.params.dogId).select([
        'dogName',
        'kennelName',
        'breed',
      ]);
    } else {
      dogData = await Dog.findById(req.params.dogId);
    }

    if (!dogData) {
      res.status(204).end();
    } else {
      return dogData;
    }
  } catch (error) {
    res.status(500).send(error.message);
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
    res.status(502).json(error.message);
  }
}

async function updateResultsArray(req, res, newResult) {
  try {
    const dog = Participant.findById(req.params.userId).dogs.dogId.valueOf();
    console.log(dog);
    const resultObject = {
      dogId: dog._id.valueOf(),
      result: newResult.result,
    };
    dog.push(resultObject);
    const updatedDog = await dog.save();
    if (!updatedDog) {
      res.send(500).end();
    } else {
      return updatedDog;
    }
  } catch (error) {
    res.send(500).send({ message: 'coś nie pykło' });
  }
}

module.exports = {
  registerDog,
  updateSomeDogProps,
  updateAllDogData,
  getDogData,
  deleteDog,
  updateResultsArray,
};
