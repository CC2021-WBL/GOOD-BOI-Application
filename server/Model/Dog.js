const mongoose = require('mongoose');

const DogSchema = mongoose.Schema({
  dogName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
    trim: true,
  },
  kennelName: {
    type: String,
    minlength: 2,
    maxlength: 100,
    trim: true,
  },
  pkr: {
    type: String,
    unique: true,
  },
  registrationNumber: {
    type: String,
    unique: true,
  },
  breed: {
    type: String,
    minlength: 2,
    maxlength: 70,
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
    type: String,
    minlength: 2,
    maxlength: 30,
  },
  sex: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  results: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Result' }],
  participants: {
    type: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Participant' }],
    required: true,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

module.exports = mongoose.model('Dog', DogSchema);
