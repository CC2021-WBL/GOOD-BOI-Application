const mongoose = require('mongoose');

const insideClassSchema = new mongoose.Schema(
  {
    dogId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Dog',
    },
    dogName: {
      type: String,
    },
    participantId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Participant',
    },
    resultsId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Result',
    },
  },
  { _id: false },
);

const obedienceClassesSchema = new mongoose.Schema(
  {
    classNumber: {
      type: Number,
    },
    isFinished: {
      type: Boolean,
      default: false,
    },
    participants: {
      type: [insideClassSchema],
      default: [],
    },
  },
  { _id: false },
);

const contestSchema = new mongoose.Schema(
  {
    contestName: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 100,
    },
    kennelClubDepartment: {
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
    address: {
      country: {
        type: String,
        default: 'Polska',
      },
      city: String,
      street: String,
      numberOfHouse: String,
      postalCode: String,
    },
    coordinates: {
      latitude: Number,
      longitude: Number,
    },
    judges: {
      type: [String],
      default: [],
    },
    steward: {
      type: String,
    },
    manager: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Participant',
      required: true,
    },
    feePLN: {
      type: Number,
    },
    amountOfApplications: {
      type: Number,
      default: 0,
    },
    maxAmountOfApplications: {
      type: Number,
      required: true,
    },
    obedienceClasses: {
      type: [obedienceClassesSchema],
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
  },
  { strictPopulate: false },
);

module.exports = mongoose.model('Contest', contestSchema);
