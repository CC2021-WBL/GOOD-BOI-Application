const mongoose = require('mongoose');

const DogSchema = mongoose.Schema({
  dogName: { type: String },
  kennelName: { type: String },
  pkr: { type: String },
  registrationNumber: { type: String },
  breed: { type: String },
  dateOfBirth: { type: Date },
  color: { type: String },
  chipOrTattoo: { type: Number },
  sex: { type: String },
  owner: { type: String },
  results: [String],
});
