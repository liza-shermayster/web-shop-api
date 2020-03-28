const express = require("express");
const menuItemsSchema = require("../models/menuDB");
const router = express.Router();

router.post("/items", (req, res) => {
  const menuItem = new menuItemsSchema({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    img: "assets/img/apple-1589869_640.jpg"
  });
  menuItem.save();
  res.status(201).json({
    message: "Post added successfully"
  });
});

router.get("/", (_, res) => {
  menuItemsSchema.find().then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      menuItems: documents
    });
  });
});
module.exports = router;
