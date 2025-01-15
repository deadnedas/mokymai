const {
  getAllTours,
  getTourById,
  update,
  getToursByCat,
  filterTours,
} = require("../models/tourModel");

exports.getAllTours = async (req, res) => {
  try {
    const tours = await getAllTours();

    res.status(200).json({
      status: "success",
      data: tours,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.getToursByCategoryId = async (req, res) => {
  try {
    const { categoryid } = req.params;

    if (!categoryid || isNaN(categoryid)) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid or missing ID",
      });
    }

    const tours = await getToursByCat(categoryid);

    res.status(200).json({
      status: "success",
      data: tours,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const { id } = req.params;
    const tour = await getTourById(id);

    if (!tour) {
      return res.status(404).json({
        status: "fail",
        message: "Invalid ID",
      });
    }
    res.status(200).json({
      status: "success",
      data: tour,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.postTour = (req, res) => {
  //   console.log(req.body);
  const newID = tours[tours.length - 1].id + 1;
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
      status: "success",
      data: newTour,
    });
  });
};

exports.updateTour = async (req, res) => {
  const { id } = req.params;
  const tour = req.body;

  const newTour = await update(id, tour);

  res.status(200).json({
    status: "success",
    data: newTour,
  });
};

exports.getFilteredTours = async (req, res) => {
  try {
    const filter = req.query;
    const filteredTours = filterTours(filter);

    console.log(filteredTours);
    
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};
