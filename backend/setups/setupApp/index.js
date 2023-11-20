const { runSteps } = require("../../helpers");
const setupMiddleware = require("./setupMiddleware");
const setupRouter = require("./setupRouter");

const setupApp = (context) => runSteps([setupMiddleware, setupRouter], context);

module.exports = setupApp;
