const router = require('express').Router();
const Result = require('../Model/Result');
const {
  updateSomeResults,
  registerResults,
  getResultSummaryAndName,
} = require('../Controllers/resultsControllers');

// get - current, individual result
router.get('/:resultsId', async (req, res) => {
  try {
    const results = await Result.findById(req.params.resultsId);
    res.status(200).send(results);
  } catch (error) {
    res.json({ message: error });
    res.status(500).send('data for results page');
  }
});

// post - create results for current competing part
router.post('/', async (req, res) => {
  try {
    const result = await registerResults(req, res);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

// update some results
router.patch('/:resultsId', async (req, res) => {
  try {
    const result = await updateSomeResults(req, res);
    res.status(201).send(result);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

//get - leaderboard with summary results from current class in current contest
router.get('/general/:contestId/:classId', async (req, res) => {
  try {
    const summResultsAndName = await getResultSummaryAndName(req, res);
    res.status(200).send(summResultsAndName);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

module.exports = router;
