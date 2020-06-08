const express = require("express");
const inputs = require("../routes/inputs");
// const home = require("../routes/home");
const error = require("../middleware/error");

module.exports = function (app, env) {
  app.use(express.json());

  app.use("/api/inputs", inputs);

  app.use(error);
  if (env !== "test") console.log("[routes] api endpoints loaded");
};
