const express = require("express");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

// load env variables
dotenv.config();
const port = process.env.PORT;
const dir = path.join(__dirname, "/data/carrier-data.json");

// create server
const app = express();

//converts json data into a js obj and puts it into req.body
app.use(express.json());

const carriers = JSON.parse(fs.readFileSync(dir));
console.log(carriers);

// show all cariers
app.post(`/carier`, (req, res) => {
  const newID = carriers[carriers.length - 1].id + 1;
  console.log(req.body);
  const postcodes = {
    id: newID,
    ...req.body,
  };
  carriers.push(postcodes);

  fs.writeFile(dir, JSON.stringify(tasks), (err) => {
    if (err) {
      return res.status(500).json({
        status: "fail",
        message: "Error writing file",
      });
    }

    res.status(201).json({
      status: "Success",
      data: postcodes,
    });
  });
});

// run server
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
