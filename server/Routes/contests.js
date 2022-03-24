const express = require('express');
const { ERROR_MSG } = require('../Consts/errorMessages');
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
      res.status(404).json({ message: ERROR_MSG[404] });
    }
  } catch (error) {
    res.status(500).json({ message: ERROR_MSG[500] });
  }
});

// Get many contests
router.get('/', async (req, res) => {
  const contests = await getContests(req, res);
  res.status(200).json(contests);
});

//Get current contest
router.get('/:contestId', async (req, res) => {
  try {
    const contest = await Contest.findById(req.params.contestId);
    if (!contest) {
      res.status(404).json({ message: ERROR_MSG[404] });
    }
    res.status(200).send(contest);
  } catch (error) {
    res.status(500).json({ message: ERROR_MSG[500] });
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
    res.status(500).json({ message: ERROR_MSG[500] });
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
      res.status(400).json({ message: ERROR_MSG[400] });
    }
  },
);

// Update general contest data
router.patch(
  '/:contestId',
  blockIfPublic,
  isManagerOrAdmin,
  async (req, res) => {
    const contest = await updateContest(req, res);
    res.status(201).send(contest);
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
      res.status(500).json({ message: ERROR_MSG[500] });
    }
  },
);

module.exports = router;
