const express = require("express");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

// load env variables
dotenv.config();
const port = process.env.PORT;
const dir = path.join(__dirname, "/data/tasks.json");

// create server
const app = express();

//converts json data into a js obj and puts it into req.body
app.use(express.json());

const tasks = JSON.parse(fs.readFileSync(dir));
console.log(tasks);

// Retrieve all tasks
app.get(`/todos`, (req, res) => {
  res.status(200).json({
    status: `success`,
    data: tasks,
  });
});

// alpha
app.put(`/alpha`, (req, res) => {
  const sortedKeys = Object.keys(req.body).sort();
  const sortedObject = sortedKeys.reduce((acc, key) => {
    acc[key] = req.body[key];
    return acc;
  }, {});
  console.log(sortedObject);
});

// flatten
app.put(`/flatten`, (req, res) => {
  for (const [key, value] of Object.entries(req.body)) {
    console.log(`Key: ${key}, Value: ${value}`);
  }
});

// run server
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
