const mongoose = require('mongoose');

const insideClassSchema = new mongoose.Schema({
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
});

const obedienceClassesSchema = new mongoose.Schema({
  0: {
    isFinished: {
      type: Boolean,
      default: false,
    },
    participants: {
      type: [insideClassSchema],
      default: [],
    },
  },
  1: {
    isFinished: {
      type: Boolean,
      default: false,
    },
    participants: {
      type: [insideClassSchema],
      default: [],
    },
  },
  2: {
    isFinished: {
      type: Boolean,
      default: false,
    },
    participants: {
      type: [insideClassSchema],
      default: [],
    },
  },
  3: {
    isFinished: {
      type: Boolean,
      default: false,
    },
    participants: {
      type: [insideClassSchema],
      default: [],
    },
  },
});

const contestSchema = new mongoose.Schema({
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
    type: obedienceClassesSchema,
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

module.exports = mongoose.model('Contest', contestSchema);
