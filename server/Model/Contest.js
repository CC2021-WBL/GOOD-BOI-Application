const mongoose = require('mongoose');

const contestSchema = new mongoose.Schema({
  contestName: {
    type: String,
    required: true,
  },
  kynologiqueDepartment: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: { type: Date },
  applicationOpenDate: { type: Date },
  applicationClosedDate: { type: Date },
  place: { type: String },
  detailAddress: { type: String },
  judges: { type: [String] },
  steward: { type: String },
  manager: { type: String },
  feePLN: { type: Number },
  participants: { type: [String] },
  applicationsNumber: { type: Number },
  obedienceClasses: { type: [String] },
});

module.exports = mongoose.model('Contest', contestSchema);
