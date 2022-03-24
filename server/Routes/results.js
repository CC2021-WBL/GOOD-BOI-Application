const router = require('express').Router();
const Result = require('../Model/Result');
const {
  updateSomeResults,
  registerResults,
  getResultSummaryAndName,
} = require('../Controllers/resultsControllers');
const { addResultToDog } = require('../Controllers/dogsControllers');
const {
  addApplicationDataToContest,
} = require('../Controllers/contestControllers');

const {
  auth,
  isUserStaffOrAdmin,
  blockIfPublic,
  isStaffManagerOrAdmin,
  isUserOrAdmin,
} = require('../Middleware/authMiddleware');
const Contest = require('../Model/Contest');
const { ERROR_MSG } = require('../Consts/errorMessages');
const { checkContestAndCurrentClassExist } = require('../Tools/checkingTools');

//get - leaderboard with summary results from current class in current contest
router.get('/general/:contestId/:classId', async (req, res) => {
  try {
    const summResultsAndName = await getResultSummaryAndName(req, res);
    res.status(200).send(summResultsAndName);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.use(auth);

// get - current, individual result
router.get(
  '/individual/:resultsId/:userId',
  blockIfPublic,
  isUserStaffOrAdmin,
  async (req, res) => {
    try {
      const results = await Result.findById(req.params.resultsId);
      if (results.participantId.valueOf() === req.user._id.valueOf()) {
        res.status(200).send(results);
      } else {
        res.status(403).json({
          success: false,
          message: ERROR_MSG[403],
        });
      }
    } catch (error) {
      res.status(500).json({ message: ERROR_MSG });
    }
  },
);

// get individual result based on dogId and contestId
router.get(
  '/individual/bydog/:dogId/:contestId',
  blockIfPublic,
  isStaffManagerOrAdmin,
  async (req, res) => {
    try {
      const results = await Result.find({
        dogId: req.params.dogId,
        contestId: req.params.contestId,
      });
      if (results) {
        res.status(200).send(results);
      } else {
        res.status(404).json({
          success: false,
          message: ERROR_MSG[404],
        });
      }
    } catch (error) {
      res.status(500).json({ message: ERROR_MSG });
    }
  },
);

// post - create results for current competing part, add dog to contest (with resultsID), and result to Dog
router.post(
  '/register/:userId',
  blockIfPublic,
  isUserOrAdmin,
  async (req, res) => {
    let contest;
    try {
      contest = await Contest.findById(req.body.contestId);
    } catch (error) {
      res.status(500).json({ message: ERROR_MSG[500] });
    }

    if (checkContestAndCurrentClassExist(req, contest) === false) {
      res.status(404).send(ERROR_MSG[404]).end();
    } else if (
      contest.amountOfApplications >= contest.maxAmountOfApplications
    ) {
      res.status(409).send('no vacancies, the start list is full');
    } else {
      const savedResult = await registerResults(req, res);
      await addApplicationDataToContest(
        req,
        res,
        savedResult._id.valueOf(),
        contest,
      );
      await addResultToDog(req, res, savedResult._id.valueOf());
      res.status(201).json(savedResult);
    }
  },
);

// update some results
router.patch(
  '/:resultsId',
  blockIfPublic,
  isStaffManagerOrAdmin,
  async (req, res) => {
    try {
      const result = await updateSomeResults(req, res);
      res.status(201).send(result);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
);

module.exports = router;
