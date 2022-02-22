const express = require('express');
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
 *         kynologiqueDepartment:
 *           type: string
 *           description: The city of kynologiqueDepartment
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
 * /contests:
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
