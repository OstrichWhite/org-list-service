require("dotenv").config();
const { runSteps } = require("./helpers");
const express = require("express");
const dbConnect = require("./setups/dbConnect");
const setupServer = require("./setups/setupServer");
const setupApp = require("./setups/setupApp");

const app = express();

const main = () => runSteps([dbConnect, setupApp, setupServer], { app });

main();
