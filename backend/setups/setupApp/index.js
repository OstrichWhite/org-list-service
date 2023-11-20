const { runSteps } = require("../../helpers");
const setupRouter = require("./setupRouter");

const setupApp = (context) => runSteps([setupRouter], context);

module.exports = setupApp;
