const Joi = require("joi");

function validateFlightSearchPayload(data) {
  const schema = Joi.object({
    departureDate: Joi.string().required(),
    departureLocation: Joi.string().required(),
    arrivalLocation: Joi.string().required(),
  });
  return schema.validate(data);
}

module.exports = { validateFlightSearchPayload };
