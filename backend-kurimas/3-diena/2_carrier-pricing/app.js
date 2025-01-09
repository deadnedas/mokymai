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

// const tasks = JSON.parse(fs.readFileSync(dir));
// console.log(tasks);

app.post(`/addition/:1Number/:2Number`, (req, res)=>{
    const sum=
})

// run server
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
