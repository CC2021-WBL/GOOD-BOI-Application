const Participant = require('../Model/Participant');
const { generatePassword } = require('../Tools/passwordTools');

async function registerParticipant(req, res) {
  const saltHash = generatePassword(req.body.password);
  const salt = saltHash.salt;
  const hash = saltHash.hash;

  const participant = new Participant({
    email: req.body.email,
    hash: hash,
    salt: salt,
    phoneNumber: req.body.phoneNumber,
    participantName: req.body.participantName,
    participantSurname: req.body.participantSurname,
    address: req.body.address,
  });
  try {
    const savedUser = await participant.save();
    if (!savedUser) {
      res.status(400).end();
    } else {
      return savedUser;
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getUserData(req, res) {
  try {
    let data;
    if (req.query.select) {
      data = await Participant.findSomethingByUserId(
        req.params.userId,
        req.query.select,
      );
    } else {
      data = await Participant.findById(req.params.userId);
    }
    if (!data) {
      res.status(204).json({ message: 'not found user with that ID' });
    } else {
      return data;
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
}

async function updateUserData(req, res) {
  try {
    const propsToUpdate = Object.keys(req.body);
    if (propsToUpdate.length === 0) {
      res.status(204).json({ message: 'no data to update' });
    }
    const user = await Participant.findById(req.params.userId);
    propsToUpdate.forEach((element) => {
      user[element] = req.body[element];
    });
    const updatedUser = await user.save();
    if (!updatedUser) {
      res.send(400).end();
    } else {
      return updatedUser;
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function updateDogsArray(req, res, newDog) {
  try {
    const user = await Participant.findById(req.params.userId);
    const dogObject = {
      dogId: newDog._id.valueOf(),
      dogName: newDog.dogName,
    };
    user.dogs.push(dogObject);
    const updatedUser = await user.save();
    if (!updatedUser) {
      res.send(500).end();
    } else {
      return updatedUser;
    }
  } catch (error) {
    res.send(500).send(error.message);
  }
}

module.exports = {
  registerParticipant,
  getUserData,
  updateUserData,
  updateDogsArray,
};
