const Joi = require('joi');

const personDataSchema = Joi.object().keys({
  email: Joi.string().min(6).required().email(),
  phoneNumber: Joi.number().min(9).required(),
  password: Joi.string().min(6).required(),
  participantName: Joi.string().min(6).required(),
  participantSurname: Joi.string().min(6).required(),
  address: Joi.string().min(6).required(),
});

module.exports = {
  '/register': personDataSchema,
};
