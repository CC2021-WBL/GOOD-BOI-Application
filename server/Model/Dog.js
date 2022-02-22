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
    type: Number,
    minlength: 4,
    maxlength: 30,
  },
  sex: {
    type: String,
    required: true,
    enum: ['pies', 'suka'],
  },
  owner: {
    type: String,
    required: true,
  },
  results: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Result' }],
});

module.exports = mongoose.model('Dog', DogSchema);
