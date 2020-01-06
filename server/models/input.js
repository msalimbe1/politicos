const mongoose = require("mongoose");
const Joi = require("joi");
const { Schema } = mongoose;
Joi.objectId = require("joi-objectid")(Joi);

const inputSchema = new Schema({
  author: { type: String, required: true, trim: true },
  texts: [{ type: String, trim: true }],
  dates: [{ type: Date, default: Date.now }],
  titles: [{ type: String, required: true, trim: true }],
  sources: [{ type: String, trim: true }],
  links: [{ type: String, trim: true }],
  tags: [{ type: String, trim: true }],
  views: { type: Number, required: true, default: 0 },
  submmited: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now }
});

const Input = mongoose.model("Input", inputSchema);

function validateInputSchema(quote) {
  const schema = {
    author: Joi.string().required(),
    texts: Joi.array().required(),
    dates: Joi.array().required(),
    titles: Joi.array().required(),
    sources: Joi.array().required(),
    links: Joi.array().required()
  };

  return Joi.validate(input, schema);
}

module.exports.Input = Input;
module.exports.validate = validateInputSchema;
