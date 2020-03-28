const express = require("express");
const ContactSchema = require("../models/contactUs");
const router = express.Router();

router.post("/", (req, res, next) => {
  const contact = new ContactSchema({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  });
  contact
    .save()
    .then(result => {
      res.status(200).json({
        message: "Contact save successfully",
        result: result
      });
    })

    .catch(err => {
      return res.status(500).json({
        error: err
      });
    });
});

router.get("/", (req, res, next) => {
  contactSchema.find().then(documents => {
    res.status(200).json({
      message: "Contact data fetched successfully",
      contact: documents
    });
  });
});
module.exports = router;
