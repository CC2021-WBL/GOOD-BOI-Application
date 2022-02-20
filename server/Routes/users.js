const express = require("express");
const router = express.Router();
const Participant = require("../Model/Participant");
const userControllers = require("../Controllers/usersControllers");

//Submit data of user
router.post("/register", async (req, res) => {
  await userControllers.registerParticipant(req, res);
});

// TODO: Login user
router.post("/login", (req, res) => {
  res.send("login");
});

//Update some data of current user
router.patch("/:userId", async (req, res) => {
  await userControllers.updateUserData(req, res);
});

//Get current user data
router.get("/:userId", async (req, res) => {
  await userControllers.getUserData(req, res);
});

module.exports = router;
