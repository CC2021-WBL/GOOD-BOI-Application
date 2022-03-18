const { ERROR_MSG } = require('../Consts/errorMessages');
const { ROLE_NAME } = require('../Consts/roles');
const { forContestCard } = require('../Consts/selects');
const Contest = require('../Model/Contest');
const Result = require('../Model/Result');
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
      const contestsIdArray = await Result.find({
        participantId: req.user._id,
      }).select({ contestId: 1, _id: 0 });
      data = [];

      for (const contestIdKey of contestsIdArray) {
        const contest = await Contest.findById(
          contestIdKey.contestId.valueOf(),
        ).select(forContestCard);
        data.push(contest);
      }
    } else if (req.query.taker === 'staff') {
      data = await Contest.aggregate([
        {
          $project: {
            contestName: 1,
            kennelClubDepartment: 1,
            startDate: 1,
            endDate: 1,
            address: 1,
            amountOfApplications: 1,
          },
        },
        {
          $match: {
            startDate: {
              $lte: new Date(),
            },
            endDate: {
              $gte: new Date(),
            },
          },
        },
      ]);
    } else {
      data = await Contest.find().select(forContestCard);
    }
    console.log(data);
    if (!data) {
      res.status(404).send(ERROR_MSG[404]);
    } else {
      return data;
    }
  } catch (error) {
    res.status(500).send(ERROR_MSG[500]);
  }
}

module.exports = {
  registerContest,
  updateContest,
  finishClass,
  getContests,
  getContestsForCard,
  getPartcicipantsForClassInContest,
};
