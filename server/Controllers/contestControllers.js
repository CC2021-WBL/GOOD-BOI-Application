const { ROLE_NAME } = require('../Consts/roles');
const { forContestCard } = require('../Consts/selects');
const Contest = require('../Model/Contest');
const { isManager } = require('../Tools/autorizationAdditionalTools');
const { createClassesObjectArray } = require('../Tools/ModelTools');

async function registerContest(req, res) {
  const contest = new Contest({
    contestName: req.body.contestName,
    kennelClubDepartment: req.body.kennelClubDepartment,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    applicationOpenDate: req.body.applicationOpenDate,
    applicationClosedDate: req.body.applicationClosedDate,
    address: req.body.address,
    judges: req.body.judges,
    steward: req.body.steward,
    manager: req.params.userId,
    feePLN: req.body.feePLN,
    maxAmountOfApplications: req.body.maxAmountOfApplications,
    obedienceClasses: createClassesObjectArray(req.body.obedienceClasses),
  });
  try {
    const savedContest = await contest.save();
    if (!savedContest) {
      res.status(400).json({ message: 'inappropriate data' });
    }
    return savedContest;
  } catch (error) {
    res.status(400).json({ message: error });
  }
}

async function updateContest(req, res) {
  try {
    const propsToUpdate = Object.keys(req.body);
    if (propsToUpdate.length === 0) {
      res.status(204).json({ message: 'no data to update' });
    }
    const contest = await Contest.findById(req.params.contestId);
    contest.updatedAt = new Date();
    propsToUpdate.forEach((element) => {
      if (element === 'obedienceClasses') {
        contest[element] = createClassesObjectArray(req.body[element]);
      } else {
        contest[element] = req.body[element];
      }
    });
    await contest.save();
    return contest;
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function finishClass(req, res) {
  try {
    const { contestId, classNumber } = req.params;
    const contest = await Contest.findById(contestId);
    const obedienceClass = contest.obedienceClasses.find(
      (obedienceClass) => obedienceClass.classNumber == classNumber,
    );
    obedienceClass.isFinished = !obedienceClass.isFinished;
    contest.updatedAt = new Date();
    await contest.save();
    return contest;
  } catch (error) {
    res.status(400).send(error.message);
  }
}

//TODO: add selection to get participants just for current contest
async function getPartcicipantsForClassInContest(req, res) {
  try {
    const data = await Contest.findById(req.params.contestId).select(
      'obedienceClasses',
    );
    if (!data) {
      res.status(404).json({ message: 'not found participants' });
    } else {
      return data;
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

async function getContests(req, res) {
  let data;
  try {
    data = await Contest.find();
    if (!data) {
      res.status(404).json({ message: 'not found contests' });
    } else {
      return data;
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

//TODO: WORK IN PROGRESS - to add selectors of roles, itd
async function getContestsForCard(req, res) {
  let data;
  try {
    if (req.query.taker === ROLE_NAME.MANAGER && isManager(req)) {
      data = await Contest.find()
        .where(ROLE_NAME.MANAGER)
        .equals(req.user._id)
        .select(forContestCard);
    } else if (req.query.taker === 'participant') {
      data = await Contest.find()
        .where('participantId')
        .equals(req.user._id)
        .select(forContestCard);
    } else {
      data = await Contest.find().select(forContestCard);
    }
    if (!data) {
      res.status(404).json({ message: 'not found contests' });
    } else {
      return data;
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

async function addResultToContest(req, res, resultId) {
  try {
    const contest = await Contest.findById(req.body.contestId);
    const obedienceClass = contest.obedienceClasses.find(
      (obedienceClass) => obedienceClass.classNumber == req.body.obedienceClass,
    );
    const participant = obedienceClass.participants.find(
      (participant) =>
        participant.participantId.valueOf() === req.body.participantId,
    );
    participant.resultsId = resultId;
    const updatedContest = await contest.save();
    if (!updatedContest) {
      res.status(500).send({ message: 'contest not found' });
    } else {
      return updatedContest;
    }
  } catch (error) {
    res.status(500).send({ message: 'contest not found' });
  }
}

async function addDogToContest(req, res, resultsId) {
  try {
    const contest = await Contest.findById(req.body.contestId);
    if (!contest) {
      res.status(404).send({
        message:
          'Requested contest does not exist, please try again in few minutes.',
      });
    }

    if (!contest.obedienceClasses) {
      res.status(404).send({
        message:
          'Requested contest does not have needed obedience class, please try again in few minutes.',
      });

      contest.obedienceClasses
        .find(
          (obedienceClass) =>
            obedienceClass.classNumber == req.body.obedienceClass,
        )
        .participants.push({
          dogId: req.body.dogId,
          dogName: req.body.dogName,
          participantId: req.body.participantId,
          resultsId: resultsId,
        });
    }
    const updatedContest = await contest.save();
    if (!updatedContest) {
      res.status(500).send({
        message:
          'Shoot! An error occurred on the server, contest was not updated. Please do not panic.',
      });
    } else {
      return updatedContest;
    }
  } catch (error) {
    res
      .status(503)
      .send({ message: 'The requested service is not available.' });
  }
}

module.exports = {
  registerContest,
  updateContest,
  finishClass,
  getContests,
  addResultToContest,
  addDogToContest,
  getContestsForCard,
  getPartcicipantsForClassInContest,
};
