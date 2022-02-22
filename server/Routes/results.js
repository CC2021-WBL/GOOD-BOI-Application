const router = require('express').Router();
const Result = require('../Model/Result');
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
// get current, individual result
router.get('/:resultsId', async (req, res) => {
  try {
    const results = await Result.findById(req.params.resultsId);
    res.json(results);
    return;
  } catch (error) {
    res.json({ message: error });
  }
  res.status(500).send('data for results page');
});

// POST - create results for current competing part // waiting for IDs to get to Schema otherwise wont work
// to test chenge schema types in Results to string instead of mongoose.SchemaTypes.ObjectIds
router.post('/', async (req, res) => {
  const result = new Result({
    contestId: req.body.contestId,
    contestName: req.body.contestName,
    obedienceClass: req.body.obedienceClass,
    dogId: req.body.dogId,
    dogName: req.body.dogName,
    participantId: req.body.participantId,
  });
  try {
    const savedResult = await result.save();
    res.status(201).json(savedResult);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

// update result - mock - only dogName
// co powinienem dostawać ? jakie klucze powininny być do zmiany ? itd
router.patch('/:resultsId', async (req, res) => {
  try {
    const updatedResults = await Result.updateOne(
      { resultsId: req.params.resultsId },
      { $set: { dogName: req.body.dogName } },
    );
    res.json(updatedResults);
  } catch (error) {
    res.json({ message: error });
  }
});

// TODO: get leaderboard with summary results from current class in current contest

router.get('/general/:contestId/:classId', async (req, res) => {
  try {
    const results = await Result.find({
      contestId: req.params.contestId,
    })
      .where({ obedienceClass: 0 })
      .select('summaryResult');

    res.json(results);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
