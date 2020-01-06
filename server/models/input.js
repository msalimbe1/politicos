const mongoose = require("mongoose");
const Joi = require("joi");
const { Schema } = mongoose;
Joi.objectId = require("joi-objectid")(Joi);

const inputSchema = new Schema({
  left: { type: String, required: true, trim: true },
  right: { type: String, required: true, trim: true },
  author: { type: String, required: true, trim: true },
  position: { type: String, required: true, trim: true },
  source: [{ type: String, trim: true }],
  tags: [{ type: String, trim: true }],
  links: [{ type: String, trim: true }],
  views: { type: Number, required: true, default: 0 },
  submmited: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now }
});

const Input = mongoose.model("Input", inputSchema);

function validateInputSchema(quote) {
  const schema = {
    left: Joi.string().required(),
    left: Joi.string().required(),
    author: Joi.string().required(),
    sources: Joi.array().required(),
    tags: Joi.array().required()
  };

  return Joi.validate(input, schema);
}

module.exports.Input = Input;
module.exports.validate = validateInputSchema;
