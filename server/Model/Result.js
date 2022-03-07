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
    default: null,
  },
  evaluation: {
    type: String,
    default: null,
  },
  specialState: {
    type: String,
    default: null,
  },
  exercises: {
    type: [mongoose.SchemaTypes.Mixed],
    default: [],
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

resultSchema.index({ contestId: 1, dogId: 1 }, { unique: true });

module.exports = mongoose.model('Result', resultSchema);
