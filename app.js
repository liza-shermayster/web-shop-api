const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const menuRoutes = require("./routes/menu");
const orderRoutes = require("./routes/order");
const contactRoutes = require("./routes/contactUs");
const app = express();

mongoose
  .connect(
    "mongodb+srv://lizaWrite:brdHyKTJNWfUBb5@cluster0-eb692.mongodb.net/node-angular?retryWrites=true",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(err => {
    console.log("Connection failed!", err);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//cors
app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH,DELETE,OPTIONS,PUT"
  );
  next();
});

app.use("/api/user", userRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/contact", contactRoutes);

module.exports = app;

/////////////liza-ilay/brdHyKTJNWfUBb5@cluster0-eb692//
