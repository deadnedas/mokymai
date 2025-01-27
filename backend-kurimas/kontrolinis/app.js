const express = require("express");
const bookstoreRouter = require("./routers/bookstoreRouter");

//create server
const app = express();

app.use(express.json());

app.use("/api/v1/bookstore", bookstoreRouter);

module.exports = app;
