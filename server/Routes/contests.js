const express = require('express');
const {
  registerContest,
  getContests,
} = require('../Controllers/contestControllers');
const {
  isAdminStrict,
  isManagerOrAdmin,
  auth,
  blockIfPublic,
} = require('../Middleware/authMiddleware');
const Contest = require('../Model/Contest');
const router = express.Router();

// #get classes for current contest -
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

router.get('/', async (req, res) => {
  try {
    const contests = await getContests(req, res);
    res.status(200).json(contests);
  } catch (error) {
    res.status(500).json({ message: error });
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
      res.status(400).json({ message: error });
    }
  },
);

//Delete contest
router.delete('/:contestId', blockIfPublic, isAdminStrict, async (req, res) => {
  try {
    const removedContest = await Contest.deleteOne({
      _id: req.params.contestId,
    });
    res.status(200).send(removedContest);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
