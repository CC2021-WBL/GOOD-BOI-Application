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
    address: req.body.adress,
  });
  try {
    const savedUser = await participant.save();
    res.status(201).send(savedUser);
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
});

//Login user
router.post("/login", (req, res) => {
  res.send("login");
});

//Update some data of current user
router.patch("/:userId", async (req, res) => {
  try {
    const user = await Participant.findById(req.params.userId);
    user.phoneNumber = req.body.phoneNumber;
    await user.save();
  } catch (error) {
    res.send(error.message);
  }
});

//Get current user data
router.get("/:userId", async (req, res) => {
  try {
    const user = await Participant.findById(req.params.userId);
    console.log(user);
    res.status(200).send(user);
  } catch (error) {
    res.send(error.message);
  }
});

router.get("/test/test", async (req, res) => {
  try {
    const user = await Participant.findByName("Matylda");
    res.send(user);
  } catch (error) {
    console.log(error);

    res.send(error.message);
  }
});

router.get('/dogs/:userId', async (req,res)=>{
  try{
    const dogs=await Participant.findById(req.params.userId).select("dogs");
    if(dogs){
  res.status(200).send(dogs);} else {res.status(404).json({ message: 'no dogs for current user' });}
} catch (error) {
  res.status(500).json({ message: error });
      }
});

module.exports = router;
