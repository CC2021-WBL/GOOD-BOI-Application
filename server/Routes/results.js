const router = require('express').Router();
const Result = require('../Model/Result');
const {
  updateSomeResults,
  registerResults,
  getResultSummaryAndName,
} = require('../Controllers/resultsControllers');
const {
  auth,
  justUserStaffOrAdmin,
  blockIfPublic,
  justStaffManagerOrAdmin,
  isUserOrAdmin,
} = require('../Middleware/authMiddleware');
/**
 * @swagger
 * components:
 *   schemas:
 *     Result:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the result
 *           example: '3845029d-e97d-41ed-997f-2299d09ef648'
 *         contestId:
 *           type: string
 *           description: The id of the contest
 *           example: 'a0347677-c3c9-4edc-9d46-fed4a958fdc2'
 *         contestName:
 *           type: string
 *           description: The name of the contest
 *           example: 'Piętnasty zjazd dobrych chłopaków'
 *         obedienceClass:
 *           type: number
 *           description: Obedience class
 *           example: 0
 *         dogId:
 *           type: string
 *           description: The id of the dog taken from pkr
 *           example: 'VIII-40407'
 *         dogName:
 *           type: string
 *           description: The name of the dog
 *           example: 'Woof'
 *         participantId:
 *           type: string
 *           description: The id of the participant/user
 *           example: 'matylda1234'
 *         summaryResult:
 *           type: number
 *           description: Summary result in contest
 *           example: 130
 *         evaluation:
 *           type: string
 *           description: Rating, evaluation of dog
 *           example: 'doskonała'
 *         specialState:
 *           type: string
 *           description: Disqualified or other special state
 *           example: 'dyskwalifikacja'
 *         exercises:
 *           type: array
 *           description: Exercises with results
 *           example: '[]'
 *
 *
 *
 */

/**
 * @swagger
 * /results:
 *   get:
 *     summary: Returns the list of results
 *     responses:
 *       200:
 *         description: The list of all results
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Result'
 *
 */

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

router.use(auth);

// get - current, individual result
router.get(
  '/individual/:resultsId/:userId',
  blockIfPublic,
  justUserStaffOrAdmin,
  async (req, res) => {
    try {
      const results = await Result.findById(req.params.resultsId);
      if (results.participantId === req.user._id.valueOf()) {
        res.status(200).send(results);
      } else {
        res.status(401).json({ success: false, message: 'unauthorized' });
      }
    } catch (error) {
      res.json({ message: error });
      res.status(500).send('data for results page');
    }
  },
);

// post - create results for current competing part
router.post(
  '/register/:userId',
  blockIfPublic,
  isUserOrAdmin,
  async (req, res) => {
    try {
      const result = await registerResults(req, res);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  },
);

// update some results
router.patch(
  '/:resultsId',
  blockIfPublic,
  justStaffManagerOrAdmin,
  async (req, res) => {
    try {
      const result = await updateSomeResults(req, res);
      res.status(201).send(result);
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  },
);

module.exports = router;
