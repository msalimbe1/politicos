const express = require("express");
// const quotes = require("../routes/quotes");
const home = require("../routes/home");
const error = require("../middleware/error");

module.exports = function(app) {
  app.use(express.json());

  app.use("/", home);
  // app.use("/api/quotes", quotes);

  app.use(error);
};
