const { ERROR_MSG } = require('../Consts/errorMessages');
const Result = require('../Model/Result');

async function registerResults(req, res) {
  const result = new Result({
    contestId: req.body.contestId,
    contestName: req.body.contestName,
    obedienceClass: req.body.obedienceClass,
    dogId: req.body.dogId,
    dogName: req.body.dogName,
    participantId: req.body.participantId,
    exercises: req.body.exercises,
  });
  let savedResult;
  try {
    savedResult = await result.save();
  } catch (error) {
    res.status(409).json({ message: 'Pies już jest zgłoszony na dane zawody' });
  }
  if (savedResult) {
    return savedResult;
  }
}

async function updateSomeResults(req, res) {
  try {
    const resultsToUpdate = Object.keys(req.body);
    if (resultsToUpdate.length === 0) {
      res.status(204).json({ message: 'no data to update' });
    }
    const result = await Result.findById(req.params.resultsId);
    resultsToUpdate.forEach((element) => {
      result[element] = req.body[element];
    });
    const updatedRasult = await result.save();
    if (!updatedRasult) {
      res.status(400).json({ message: ERROR_MSG[400] });
    } else {
      return result;
    }
  } catch (error) {
    res.status(500).json({ message: ERROR_MSG[500] });
  }
}

async function getResultSummaryAndName(req, res) {
  try {
    const results = await Result.find({
      contestId: req.params.contestId,
    })
      .where({ obedienceClass: req.params.classId })
      .select(['dogName', 'summaryResult']);
    if (!results) {
      res.status(404).json({ message: ERROR_MSG[404] });
    } else {
      return results;
    }
  } catch (error) {
    res.status(500).json({ message: ERROR_MSG[500] });
  }
}

module.exports = {
  updateSomeResults,
  registerResults,
  getResultSummaryAndName,
};
