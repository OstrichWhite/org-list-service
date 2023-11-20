const express = require("express");

const setupMiddleware = ({ app }) => {
  app.use(express.json({ limit: "10kb" })); //for incoming requests with JSON payloads
};

module.exports = setupMiddleware;
