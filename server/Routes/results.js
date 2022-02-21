const router = require("express").Router();
const Result = require("../Model/Result");

// get current, individual result
router.get("/:competingPairsId", async (req, res) => {
  try {
    const results = await Result.find();
    res.json(results);
    return;
  } catch (error) {
    res.json({ message: error });
  }
  res.status(500).send("data for results page");
  aa;
});

// POST - create results for current competing part // waiting for IDs to get to Schema otherwise wont work
// to test chenge schema types in Results to string instead of mongoose.SchemaTypes.ObjectIds
router.post("/", async (req, res) => {
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
router.patch("/:competingPairsId", async (req, res) => {
  try {
    const updatedResults = await Result.updateOne(
      { competingPairsId: req.params.competingPairsId },
      { $set: { dogName: req.body.dogName } }
    );
    res.json(updatedResults);
  } catch (error) {
    res.json({ message: error });
  }
});

// TODO: get leaderboard with summary results from current class in current contest

module.exports = router;
