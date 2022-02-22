const Contest = require('../Model/Contest');

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
    obedienceClasses: req.body.obedienceClasses,
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

module.exports = {
  registerContest,
};
