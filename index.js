const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const todoHandler = require("./routehandler/todoHandler");
const userHandler = require("./routehandler/userHandler");

//express app initialization
const app = express();
require("dotenv").config();
app.use(express.json());

//database connect with mongoose
mongoose
  .connect("mongodb://localhost/todos", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("successfully connected"))
  .catch(() => console.log(err));

//application routes
app.use("/todo", todoHandler);
app.use("/user", userHandler);

//default error handiling
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
}

app.listen(3000, () => {
  console.log("app listening at port 3000");
});
