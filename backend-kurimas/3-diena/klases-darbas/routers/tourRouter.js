const express = require("express");
const toursController = require("../controller/toursController");

const { getAllTours, getTour, postTour, updateTour } = toursController;

const tourRouter = express.Router();

// aprasome routes
tourRouter.route(`/`).get(getAllTours).post(deleteMidleware, postTour);
tourRouter.route(`/:id`).get(getTour).patch(updateTour);

module.exports = tourRouter;
