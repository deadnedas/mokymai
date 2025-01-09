const express = require("express");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

// load env variables
dotenv.config();
const port = process.env.PORT;
const dir = path.join(__dirname, "/data/tours-simple.json");

// create server
const app = express();

//converts json data into a js obj and puts it into req.body
app.use(express.json());

const tours = JSON.parse(fs.readFileSync(dir));
// console.log(tours);

app.get(`/api/v1/tours`, (req, res) => {
  res.status(200).json({
    status: `success`,
    toursCount: tours.length,
    data: tours,
  });
});

app.get(`/api/v1/tours/:id`, (req, res) => {
  const id = +req.params.id;

  const tour = tours.find((tour) => {
    return tour.id === id;
  });
  if (!tour) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
  res.status(200).json({
    status: "Success",
    data: tour,
  });
});

app.post(`/api/v1/tours`, (req, res) => {
  //   console.log(req.body);
  const newID = routs[tours.length - 1].id + 1;
  const newTour = {
    id: newID,
    ...req.body,
  };
  tours.push(newTour);

  fs.writeFile(dir, JSON.stringify(tours), (err) => {
    if (err) {
      return res.status(500).json({
        status: "fail",
        message: "Error writing file",
      });
    }

    res.status(201).json({
      status: "Success",
      data: newTour,
    });
  });
});

// run server
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
