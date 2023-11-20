const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const setupMiddleware = ({ app }) => {
  app.use(cors({ origin: "*" }));
  app.use(express.json({ limit: "10kb" })); //for incoming requests with JSON payloads
  app.use(cookieParser());
};

module.exports = setupMiddleware;
