const mongoose = require('mongoose');

const ParticipantSchema = new mongoose.Schema({
  /*  participantId: {
    type: mongoose.SchemaTypes.ObjectId,
  }, */
  email: {
    type: String,
    required: true,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  phoneNumber: {
    type: Number,
  },
  participantName: {
    type: String,
    required: true,
    min: 2,
  },
  participantSurname: {
    type: String,
    required: true,
    min: 2,
  },
  adress: {
    type: mongoose.SchemaTypes.Mixed,
    required: true,
  },
  dogs: {
    type: [mongoose.SchemaTypes.Mixed],
  },
  portalRoles: {
    type: [String],
  },
});

module.exports = mongoose.model('Participant', ParticipantSchema);
