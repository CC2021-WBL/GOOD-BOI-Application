const mongoose = require("mongoose");

const insideClassSchema = new mongoose.Schema({
  inFinished: {
    type: Boolean,
    default: false,
  },
  dogId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Dog",
  },
  dogName: {
    type: String,
  },
  resultsId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Result",
  },
});

const contestClassSchema = new mongoose.Schema({
  0: [insideClassSchema],
  1: [insideClassSchema],
  2: [insideClassSchema],
  3: [insideClassSchema],
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
  participants: {
    type: [String],
  },
  numberOfApplications: {
    type: Number,
  },
  obedienceClasses: {
    type: contestClassSchema,
    required: true,
  },
});

module.exports = mongoose.model("Contest", contestSchema);
