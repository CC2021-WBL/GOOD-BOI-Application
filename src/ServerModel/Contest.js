const mongoose = require('mongoose');

const contestSchema = new mongoose.Schema({
  contestName: {
    type: String,
    required: true,
  },
  kynologiqueDepartment: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  applicationOpenDate: { type: Date },
  applicationClosedDate: { type: Date },
  place: { type: String },
  detailAdress: { type: String },
  judges: { type: [String] },
  steward: { type: String },
  manager: { type: String },
  feePLN: { type: Number },
  participants: { type: [String] },
  obedienceClasses: { type: [String] },
});

module.exports = mongoose.model('Contest', contestSchema);
