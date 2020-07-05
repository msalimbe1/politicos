const { Quote, validate } = require("../models/quote");

const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const quotes = await Quote.find();
  console.log("Getting all quotes...");
  res.send(quotes);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const quote = await Quote.findById(id);
  res.send(quote);
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error);

  const { body } = req;

  const newQuote = new Quote({ ...body });

  await newQuote.save();

  return res.status(200).send(newQuote);
});

module.exports = router;
