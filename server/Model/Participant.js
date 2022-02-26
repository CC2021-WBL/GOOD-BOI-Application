const mongoose = require('mongoose');

const ParticipantDogSchema = new mongoose.Schema(
  {
    dogId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Dog',
      required: true,
    },
    dogName: {
      type: String,
    },
  },
  { _id: false },
);

const ParticipantSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    maxlength: 255,
    /* validate: {
      validator: (v) => v.inculdes('@'),
      message: (props) => `${props.value} should contain the @ symbol`,
    }, */
  },
  hash: {
    type: String,
  },
  salt: {
    type: String,
  },
  phoneNumber: {
    type: Number,
    minlength: 7,
    maxlength: 20,
  },
  participantName: {
    type: String,
    required: true,
    minlength: 2,
  },
  participantSurname: {
    type: String,
    required: true,
    minlength: 2,
  },
  address: {
    country: String,
    city: String,
    street: String,
    numberOfHouse: String,
    postalCode: String,
  },
  dogs: {
    type: [ParticipantDogSchema],
    default: [],
  },
  portalRoles: {
    type: [String],
    default: ['participant'],
    enum: ['staff', 'participant', 'manager', 'admin'],
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

ParticipantSchema.methods.sayHi = function () {
  console.log(`Hi, my name is ${this.participantName}`);
};

ParticipantSchema.statics.findSomethingByUserId = function (
  participantId,
  dataToFind,
) {
  return this.findById(participantId).select(dataToFind);
};

module.exports = mongoose.model('Participant', ParticipantSchema);
