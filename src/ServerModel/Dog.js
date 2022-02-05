const mongoose = require('mongoose');

const DogSchema = mongoose.Schema({
  dogName: {
    type: String,
    required: true,
  },
  kennelName: {
    type: String,
  },
  pkr: {
    type: String,
  },
  registrationNumber: {
    type: String,
  },
  breed: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  chipOrTattoo: {
    type: Number,
  },
  sex: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  results: [String],
});

module.exports = mongoose.model('Dog', DogSchema);
