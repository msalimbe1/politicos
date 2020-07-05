const express = require("express");
const quotes = require("../routes/quotes");
const users = require("../routes/users");
const error = require("../middleware/error");
const auth = require("../routes/auth");

module.exports = function (app, env) {
  app.use(express.json());

  app.use("/api/quotes", quotes);
  app.use("/api/users", users);
  app.use("/api/auth", auth);

  app.use(error);
  if (env !== "test") console.log("[routes] api endpoints loaded");
};
