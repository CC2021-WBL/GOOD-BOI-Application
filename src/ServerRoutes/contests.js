const express = require('express');
const Contest = require('../ServerModel/Contest');

const router = express.Router();

// Get all contests
router.get('/', async (req, res) => {
  try {
    const contests = await Contest.find();
    res.json(contests);
  } catch (error) {
    res.json({ message: error });
  }
  res.status(500).send('data for contests page');
});

//Get current contest
router.get('/:contestId', (req, res) => {
  res.send('data for current contest');
});

module.exports = router;
