const mongoose = require("mongoose");

const insideClassSchema = new mongoose.Schema({
  dogId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Dog",
  },
  dogName: {
    type: String,
  },
  participantID: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Participant",
  },
  resultsId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Result",
  },
});

const classObjectSchema = new mongoose.Schema({
  isFinished: {
    type: Boolean,
    default: false,
  },
  participants: {
    type: [insideClassSchema],
    default: [],
  },
});

const contestClassSchema = new mongoose.Schema({
  0: {
    type: classObjectSchema,
  },
  1: {
    type: classObjectSchema,
  },
  2: {
    type: classObjectSchema,
  },
  3: {
    type: classObjectSchema,
  },
});

const contestSchema = new mongoose.Schema({
  contestName: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100,
  },
  kynologiqueDepartment: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 50,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  applicationOpenDate: {
    type: Date,
  },
  applicationClosedDate: {
    type: Date,
  },
  place: {
    type: String,
  },
  detailAddress: {
    type: String,
  },
  judges: {
    type: [String],
  },
  steward: {
    type: String,
  },
  manager: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Participant",
  },
  feePLN: {
    type: Number,
  },
  numberOfApplications: {
    type: Number,
    default: 0,
  },
  obedienceClasses: {
    type: contestClassSchema,
    required: true,
  },
});

module.exports = mongoose.model("Contest", contestSchema);
