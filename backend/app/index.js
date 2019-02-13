const express = require("express");
const GenerationEngine = require("./generation/engine");

//Router Declaration
const dragonApi = require("./api/dragon");
const generationApi = require("./api/generation");

const app = express();
const engine = new GenerationEngine();

app.locals.engine = engine;

//Router uses
app.use("/dragon", dragonApi);
app.use("/generation", generationApi);

engine.start();

module.exports = app;
