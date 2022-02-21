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

<<<<<<< HEAD
// POST -

// update result - mock - only dogName
// co powinienem dostawać ? jakie klucze powininny być do zmiany ? itd
=======
// update result - mock - works only with DB id in req params, only dogName.
>>>>>>> 0a2147c51a203caecbc9e12c0424e7b3dbbf9bab
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

module.exports = router;
