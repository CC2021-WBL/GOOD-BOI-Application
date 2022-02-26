const express = require('express');
const { registerContest } = require('../Controllers/contestControllers');
const Contest = require('../Model/Contest');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Contest:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the contest
 *           example: '3845029d-e97d-41ed-997f-2299d09ef648'
 *         contestName:
 *           type: string
 *           description: The name of the contest
 *           example: 'Piętnasty zjazd dobrych chłopaków'
 *         kennelClubDepartment:
 *           type: string
 *           description: The city of kennelClubDepartment
 *           example: 'Warszawa'
 *         startDate:
 *           type: string
 *           format: date-time
 *           example: '1985-04-12T23:20:50.52Z'
 *
 *
 */

/**
 * @swagger
 * /api/contests:
 *   get:
 *     summary: Returns the list of contests
 *     responses:
 *       200:
 *         description: The list of all contests
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contest'
 *
 */

/**
 * @swagger
 * /api/contests/classes/6219286509b1d60f7893e4a7:
 *  get:
 *    summary: Returns the list of classes in current contest
 *    responses:
 *      200:
 *        description: The list of all classes in current contest
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Contest'
 */

// Get all contests
// router.get("/", async (req, res) => {
//   try {
//     const contests = await Contest.find();
//     res.json(contests);
//   } catch (error) {
//     res.json({ message: error });
//   }
//   res.status(500).send("data for contests page");
// });
//
// //Get current contest
// router.get("/:contestId", async (req, res) => {
//   try {
//     const contest = await Contest.findById();
//     if (!contest) {
//       res.status(404).end();
//     }
//     res.status(200).send(contest);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

// #get classes for current contest -
router.get('/classes/:contestId', async (req, res) => {
  try {
    const classes = await Contest.findById(req.params.contestId).select(
      'obedienceClasses',
    );
    if (classes) {
      res.status(200).send(classes);
    } else {
      res.status(404).json({ message: 'no class for current contest' });
    }
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
