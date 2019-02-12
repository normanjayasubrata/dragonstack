const express = require("express");
const GenerationEngine = require("./engine");

const app = express();
const engine = new GenerationEngine();


engine.start();

app.get("/dragon/create", (req, res) => {
  res.json({
    dragon: engine.generation.newDragon()
  });
});



module.exports = app;