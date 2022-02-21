const express = require("express");
const router = express.Router();
const Participant = require("../Model/Participant");
const userDbFunc = require("../Controllers/usersControllers");

//Submit data of user
router.post("/register", async (req, res) => {
  try {
    const savedUser = await userDbFunc.registerParticipant(req, res);
    res.status(201).send(savedUser);
  } catch (error) {
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
    const updatedUser = await userDbFunc.updateUserData(req, res);
    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get current user data
router.get("/:userId", async (req, res) => {
  try {
    const userData = await userDbFunc.getUserData(req, res);
    res.status(200).send(userData);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
