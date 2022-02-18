const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  contestId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Contest',
    required: true,
  },
  contestName: {
    type: String,
    required: true,
  },
  obedienceClass: {
    type: Number,
    required: true,
  },
  dogId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Dog',
    required: true,
  },
  dogName: {
    type: String,
    required: true,
  },
  participantId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Participant',
    required: true,
  },
  summaryResult: {
    type: Number,
  },
  prize: {
    type: String,
  },
  specialState: {
    type: String,
  },
  exercises: {
    type: [mongoose.SchemaTypes.Mixed],
  },
});

module.exports = mongoose.model('Result', resultSchema);
