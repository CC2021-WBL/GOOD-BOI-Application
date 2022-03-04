const { forContestCard } = require('../Consts/selects');
const Contest = require('../Model/Contest');
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

// not optimal! works but could be written better, in progress
async function getContests(req, res) {
  let data;
  try {
    if (req.query.taker) {
      switch (req.query.taker) {
        case 'card':
          data = await Contest.find().select(forContestCard);
          break;
        default:
          break;
      }
    } else {
      data = await Contest.find();
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

//TEST PHASE
/* async function getContests(req, res) {
  let data;
  try {
    if (req.query.taker) {
      switch (req.query.taker) {
        case 'card':
          if (req.query.user) {
            data = await Contest.find({
              obedienceClasses: {
                participants: { participantId: req.query.user },
              },
            }).select(forContestCard);
          } else {
            data = await Contest.find().select(forContestCard);
          }

          break;

        default:
          break;
      }
    } else {
      data = await Contest.find();
    }
    if (!data) {
      res.status(404).json({ message: 'not found contests' });
    } else {
      return data;
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
} */

module.exports = {
  registerContest,
  getContests,
};
