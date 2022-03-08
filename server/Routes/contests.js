const express = require('express');
const {
  registerContest,
  updateContest,
  finishClass,
  getContests,
} = require('../Controllers/contestControllers');

const {
  isManagerOrAdmin,
  auth,
  blockIfPublic,
  isStaffManagerOrAdmin,
} = require('../Middleware/authMiddleware');
const Contest = require('../Model/Contest');
const router = express.Router();

// #get classes for current contest
router.get('/classes/:contestId', async (req, res) => {
  try {
    const { obedienceClasses } = await Contest.findById(
      req.params.contestId,
    ).select('obedienceClasses');
    if (obedienceClasses) {
      res.status(200).send(obedienceClasses);
    } else {
      res.status(404).json({ message: 'no class for current contest' });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get many contests
router.get('/', async (req, res) => {
  try {
    const contests = await getContests(req, res);
    res.status(200).json(contests);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//Get current contest
router.get('/:contestId', async (req, res) => {
  try {
    const contest = await Contest.findById(req.params.contestId);
    if (!contest) {
      res.status(404).end();
    }
    res.status(200).send(contest);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Middleware to check JWT
router.use(auth);

//Register new contest
router.post(
  '/register/:userId',
  blockIfPublic,
  isManagerOrAdmin,
  async (req, res) => {
    try {
      const savedContest = await registerContest(req, res);
      res.status(201).json(savedContest);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
);

router.patch(
  '/:contestId',
  blockIfPublic,
  isManagerOrAdmin,
  async (req, res) => {
    try {
      const contest = await updateContest(req, res);
      res.status(201).send(contest);
    } catch (error) {
      res.send(error.message);
    }
  },
);

router.patch(
  '/:contestId/:classNumber',
  blockIfPublic,
  isStaffManagerOrAdmin,
  async (req, res) => {
    try {
      const contest = await finishClass(req, res);
      res.status(201).send(contest);
    } catch (error) {
      res.send(error.message);
    }
  },
);

//Delete contest
router.delete(
  '/:contestId',
  blockIfPublic,
  isManagerOrAdmin,
  async (req, res) => {
    try {
      const removedContest = await Contest.deleteOne({
        _id: req.params.contestId,
      });
      res.status(200).send(removedContest);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
);

module.exports = router;
