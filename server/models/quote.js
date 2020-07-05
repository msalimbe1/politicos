const mongoose = require("mongoose");
const Joi = require("joi");
const { Schema } = mongoose;

const quoteSchema = new Schema({
  text: { type: String, required: true, trim: true },
  author: { type: String, required: true, trim: true },
  subtitle: { type: String, trim: true },
  link: { type: String, trim: true },
  date: { type: Date },
  timestamp: { type: Date, default: Date.now },
});

const Quote = mongoose.model("Quote", quoteSchema);

function validateQuoteSchema(input) {
  const schema = {
    text: Joi.string().required(),
    author: Joi.string().required(),
    subtitle: Joi.string(),
    link: Joi.string(),
    date: Joi.date(),
  };

  return Joi.validate(input, schema);
}

module.exports.Quote = Quote;
module.exports.validate = validateQuoteSchema;
