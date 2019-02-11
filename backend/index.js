const Generation = require("./generation");

const generation = new Generation();

console.log("generation", generation);

const nono = generation.newDragon();

console.log("nono", nono);

// setTimeout(() => {
//   const nana = generation.newDragon();
//   console.log("nana", nana);
// }, 10000);
