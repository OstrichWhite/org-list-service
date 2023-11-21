const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const corsOption = process.env.BASE_URL
  ? { origin: "http://localhost:3000", credentials: true }
  : { origin: "*" };

const setupMiddleware = ({ app }) => {
  app.use(cors(corsOption));
  app.use(express.json({ limit: "10kb" })); //for incoming requests with JSON payloads
  app.use(cookieParser());
};

module.exports = setupMiddleware;
