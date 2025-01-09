const fs = require("fs");
const path = require("path");

//load env variables
const dir = path.join(__dirname, "/data/tours-simple.json");

const tours = JSON.parse(fs.readFileSync(dir));

module.exports = tours;
