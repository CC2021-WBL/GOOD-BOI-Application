const Result = require('../Model/Result');

async function registerResults(req, res) {
  const result = new Result({
    contestId: req.body.contestId,
    contestName: req.body.contestName,
    obedienceClass: req.body.obedienceClass,
    dogId: req.body.dogId,
    dogName: req.body.dogName,
    participantId: req.body.participantId,
  });
  try {
    const savedResult = await result.save();
    return savedResult;
  } catch (error) {
    res.status(400).json({ message: error });
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
    await result.save();
    return result;
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getResultSummaryAndName(req, res) {
  try {
    const results = await Result.find({
      contestId: req.params.contestId,
    })
      .where({ obedienceClass: 0 })
      .select(['dogName', 'summaryResult']);

    res.json(results);
  } catch (error) {
    res.json({ message: error });
  }
}

module.exports = {
  updateSomeResults,
  registerResults,
  getResultSummaryAndName,
};
