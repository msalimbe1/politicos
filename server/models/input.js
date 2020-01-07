const mongoose = require("mongoose");
const Joi = require("joi");
const { Schema } = mongoose;
Joi.objectId = require("joi-objectid")(Joi);

const inputSchema = new Schema({
  authors: [{ type: String, required: true, trim: true }],
  avatars: [{ type: String, required: true, trim: true }],
  titles: [{ type: String, required: true, trim: true }],
  texts: [{ type: String, trim: true }],
  dates: [{ type: Date, default: Date.now }],
  media: [{ type: String, trim: true }],
  links: [{ type: String, trim: true }],
  tags: [{ type: String, trim: true }],
  views: { type: Number, required: true, default: 0 },
  submmited: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now }
});

const Input = mongoose.model("Input", inputSchema);

function validateInputSchema(input) {
  const schema = {
    authors: Joi.array().required(),
    avatars: Joi.array().required(),
    titles: Joi.array().required(),
    texts: Joi.array().required(),
    dates: Joi.array().required(),
    media: Joi.array().required(),
    links: Joi.array().required(),
    tags: Joi.array().required()
  };

  return Joi.validate(input, schema);
}

module.exports.Input = Input;
module.exports.validate = validateInputSchema;
