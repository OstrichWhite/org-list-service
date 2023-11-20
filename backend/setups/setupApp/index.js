const { runSteps } = require("../../helpers");
const errorHandler = require("./errorHandler");
const setupMiddleware = require("./setupMiddleware");
const setupRouter = require("./setupRouter");

const setupApp = (context) =>
  runSteps([setupMiddleware, setupRouter, errorHandler], context);

module.exports = setupApp;
