const { ERROR_MSG } = require('../Consts/errorMessages');
const { ROLE_NAME } = require('../Consts/roles');
const { forContestCard } = require('../Consts/selects');
const Contest = require('../Model/Contest');
const Result = require('../Model/Result');
const { isManager } = require('../Tools/autorizationAdditionalTools');
const { createGeolocationUrl } = require('../Tools/geolocationTools');
const { createClassesObjectArray } = require('../Tools/ModelTools');
const mongoose = require('mongoose');
const fetch = require('node-fetch');

const requestOptionsGET = {
  method: 'GET',
  redirect: 'follow',
};

async function registerContest(req, res) {
  const urlToFetchCoords = createGeolocationUrl(req.body.address);
  let coordinates;
  try {
    const response = await fetch(urlToFetchCoords, requestOptionsGET);

    if (!response) {
      coordinates = {
        latitude: 51.796,
        longitude: 19.426,
      };
    } else {
      const geoData = await response.json();
      const coordinatesArr = geoData.features[0].geometry.coordinates;
      coordinates = {
        latitude: coordinatesArr[1],
        longitude: coordinatesArr[0],
      };
    }
  } catch (error) {
    coordinates = {
      latitude: 51.796,
      longitude: 19.426,
    };
  }

  const contest = new Contest({
    contestName: req.body.contestName,
    kennelClubDepartment: req.body.kennelClubDepartment,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    applicationOpenDate: req.body.applicationOpenDate,
    applicationClosedDate: req.body.applicationClosedDate,
    address: req.body.address,
    coordinates: coordinates,
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
      res.status(400).send(ERROR_MSG[400]);
    }
    return savedContest;
  } catch (error) {
    res.status(500).send(ERROR_MSG[500]);
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
    const updatedContest = await contest.save();
    if (!updatedContest) {
      res.status(400).json({ message: ERROR_MSG[400] });
    } else {
      return updatedContest;
    }
  } catch (error) {
    res.status(500).json({ message: ERROR_MSG[500] });
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
    const updatedContest = await contest.save();
    if (!updatedContest) {
      res.status(500).json({ message: ERROR_MSG[500] });
    } else {
      return updatedContest;
    }
  } catch (error) {
    res.status(500).json({ message: ERROR_MSG[500] });
  }
}

async function getPartcicipantsForClassInContest(req, res) {
  try {
    const contest = await Contest.findById(
      new mongoose.Types.ObjectId(req.params.contestId),
    ).populate({
      path: 'obedienceClasses',
      populate: {
        path: 'participants',
        populate: {
          path: 'resultsId',
          model: 'Result',
        },
      },
    });
    const obedienceClass = contest.obedienceClasses.find(
      (obedienceClass) => obedienceClass.classNumber == req.params.classId,
    );

    const forClassObj = {
      participants: obedienceClass.participants,
      isFinished: obedienceClass.isFinished,
    };

    if (!forClassObj) {
      res.status(404).send(ERROR_MSG[404]);
    } else {
      return forClassObj;
    }
  } catch (error) {
    res.status(500).send(ERROR_MSG[500]);
  }
}

async function getContests(req, res) {
  let data;
  try {
    data = await Contest.find();
    if (!data) {
      res.status(404).send(ERROR_MSG[404]);
    } else {
      return data;
    }
  } catch (error) {
    res.status(500).send(ERROR_MSG[500]);
  }
}

async function getContestsForCard(req, res) {
  let data;
  try {
    if (req.query.taker === ROLE_NAME.MANAGER && isManager(req)) {
      data = await Contest.find()
        .where(ROLE_NAME.MANAGER)
        .equals(req.user._id)
        .select(forContestCard)
        .sort({ startDate: 1 });
    } else if (req.query.taker === 'participant') {
      const contestsIdArray = await Result.find({
        participantId: req.user._id,
      }).select({ contestId: 1, _id: 0 });

      if (!contestsIdArray) {
        res.status(404).send(ERROR_MSG[404]);
      } else {
        data = [];

        for (const contestIdKey of contestsIdArray) {
          const contest = await Contest.findById(
            contestIdKey.contestId.valueOf(),
          ).select(forContestCard);
          data.push(contest);
        }
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
    } else if (req.query.taker === 'landing') {
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
              $gte: new Date(),
            },
          },
        },
        {
          $sort: {
            startDate: 1,
          },
        },
        {
          $limit: 3,
        },
      ]);
    } else {
      data = await Contest.find().select(forContestCard).sort({ startDate: 1 });
    }
    if (!data) {
      res.status(404).send(ERROR_MSG[404]);
    } else {
      return data;
    }
  } catch (error) {
    res.status(500).send(ERROR_MSG[500]);
  }
}

async function addApplicationDataToContest(req, res, resultsId, contest) {
  try {
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

    contest.amountOfApplications += 1;

    const updatedContest = await contest.save();
    if (!updatedContest) {
      res.status(500).send(ERROR_MSG[500]);
    } else {
      return updatedContest;
    }
  } catch (error) {
    res.status(503).send(ERROR_MSG[503]);
  }
}

module.exports = {
  registerContest,
  updateContest,
  finishClass,
  getContests,
  addApplicationDataToContest,
  getContestsForCard,
  getPartcicipantsForClassInContest,
};
