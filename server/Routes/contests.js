const express = require('express');
const {
  registerContest,
  updateContest,
  finishClass,
  getContests,
  getContestsForCard,
  getPartcicipantsForClassInContest,
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

//Get participants for current class and contest
router.get('/participants/:contestId/:classId', async (req, res) => {
  const forClassObj = await getPartcicipantsForClassInContest(req, res);
  res.status(200).send(forClassObj);
});

// Middleware to check JWT
router.use(auth);

//Get contests data for ContestCard component
router.get('/card/data', async (req, res) => {
  try {
    const contestsData = await getContestsForCard(req, res);
    res.status(200).send(contestsData);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

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

// Update general contest data
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

// Update is class finished
router.patch(
  '/:contestId/:classNumber',
  blockIfPublic,
  isStaffManagerOrAdmin,
  async (req, res) => {
    const updatedContest = await finishClass(req, res);
    res.status(201).send(updatedContest);
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
