const express = require("express");
const inputs = require("../routes/inputs");
const home = require("../routes/home");
const error = require("../middleware/error");

module.exports = function(app) {
  app.use(express.json());

  app.use("/api/inputs", inputs);

  app.use(error);
};
