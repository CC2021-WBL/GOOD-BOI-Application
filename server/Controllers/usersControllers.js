const { ERROR_MSG } = require('../Consts/errorMessages');
const { forProfilePage } = require('../Consts/selects');
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
      res.status(400).json({ message: ERROR_MSG[400] });
    } else {
      return savedUser;
    }
  } catch (error) {
    res.status(500).json({ message: ERROR_MSG[500] });
  }
}

async function getUserData(req, res) {
  try {
    let data;
    if (req.user && req.user._id.valueOf() === req.params.userId) {
      if (req.query.select) {
        data = await Participant.findSomethingByUserId(
          req.params.userId,
          req.query.select,
        );
      } else if (req.query.taker && req.query.taker === 'profile') {
        data = await Participant.findSomethingByUserId(
          req.params.userId,
          forProfilePage,
        );
      } else {
        data = await Participant.findById(req.params.userId);
      }
    } else {
      data = await Participant.findById(req.params.userId).select([
        'participantName',
        'participantSurname',
      ]);
    }
    if (!data) {
      res.status(404).json({ message: ERROR_MSG[404] });
    } else {
      return data;
    }
  } catch (error) {
    res.status(500).json({ message: ERROR_MSG[500] });
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
    user.updatedAt = new Date();
    const updatedUser = await user.save();
    if (!updatedUser) {
      res.status(400).json({ message: ERROR_MSG[400] });
    } else {
      return updatedUser;
    }
  } catch (error) {
    res.status(500).json({ message: ERROR_MSG[500] });
  }
}

async function updateDogsArray(req, res, newDog) {
  try {
    const user = await Participant.findById(req.params.userId);
    if (!user) {
      res.status(404).json({ message: ERROR_MSG[404] });
    }
    const dogObject = {
      dogId: newDog._id.valueOf(),
      dogName: newDog.dogName,
    };
    user.dogs.push(dogObject);
    user.updatedAt = new Date();
    const updatedUser = await user.save();
    if (!updatedUser) {
      res.status(500).json({ message: ERROR_MSG[500] });
    } else {
      return updatedUser;
    }
  } catch (error) {
    res.status(500).json({ message: ERROR_MSG[500] });
  }
}

async function changeDogDataInParticipants(res, dogData) {
  try {
    if (dogData.participants && dogData.participants.length > 0) {
      for (const participantId of dogData.participants) {
        const participant = await Participant.findById(participantId);
        participant.dogs.forEach((dog) => {
          if (dog.dogId.valueOf() === dogData._id.valueOf()) {
            dog.dogName = dogData.dogName;
            dog.pkr = dogData.pkr;
          }
        });
        participant.updatedAt = new Date();
        const updatedParticipant = await participant.save();
        if (!updatedParticipant) {
          res.status(500).end();
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  registerParticipant,
  getUserData,
  updateUserData,
  updateDogsArray,
  changeDogDataInParticipants,
};
