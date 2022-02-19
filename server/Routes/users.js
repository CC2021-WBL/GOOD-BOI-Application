const express = require("express");
const router = express.Router();
const Participant = require("../Model/Participant");

//Submit data of user
router.post("/register", async (req, res) => {
  const participant = new Participant({
    email: req.body.email,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
    participantName: req.body.participantName,
    participantSurname: req.body.participantSurname,
    address: req.body.address,
  });
  try {
    const savedUser = await participant.save();
    res.status(201).send(savedUser);
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
});

// TODO: Login user
router.post("/login", (req, res) => {
  res.send("login");
});

//Update some data of current user
router.patch("/:userId", async (req, res) => {
  try {
    const propsToUpdate = Object.keys(req.body);
    if (propsToUpdate.length === 0) {
      res.status(204).json({ message: "no data to update" });
    }
    const user = await Participant.findById(req.params.userId);
    propsToUpdate.forEach((element) => {
      user[element] = req.body[element];
    });
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//Get current user data
router.get("/:userId", async (req, res) => {
  try {
    /* let user = {};
    if ((req.query.select = "roles")) {
      user = await Participant.findRolesByUserId(req.params.userId);
    } else {
      user = await Participant.findById(req.params.userId);
    } */
    const user = await Participant.findById(req.params.userId);
    if (!user) {
      res.status(204).json({ message: "not found user with that ID" });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get("/address/:userId", async (req, res) => {
  try {
    const user = await Participant.findById(req.params.userId).select(
      "address"
    );
    if (!user) {
      res.status(204).json({ message: "not found user or his address" });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
