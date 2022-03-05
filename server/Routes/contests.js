const express = require('express');
const {
  registerContest,
  updateContest,
  finishClass,
} = require('../Controllers/contestControllers');
const Contest = require('../Model/Contest');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const contests = await Contest.find();
    if (!contests) {
      res.status(404).end();
    }
    return res.json(contests);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

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

router.post('/register/:userId', async (req, res) => {
  try {
    const savedContest = await registerContest(req, res);
    res.status(201).json(savedContest);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

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

router.patch('/:contestId', async (req, res) => {
  try {
    const contest = await updateContest(req, res);
    res.status(201).send(contest);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

router.patch('/:contestId/:classNumber', async (req, res) => {
  try {
    const contest = await finishClass(req, res);
    res.status(201).send(contest);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

router.delete('/:contestId', async (req, res) => {
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
