const express = require("express");
const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Receiving data from the user's login, creating object : user-login and password
router.post("/signUp", (req, res, next) => {
  // Saving a password on the server side
  bcrypt.hash(req.body.password, 10).then(hash => {
    // Create a new  object on server-side
    const user = new User({
      email: req.body.email,
      password: hash
    });
    // Saving data
    user
      .save()
      .then(result => {
        const token = jwt.sign(
          { email: result.email, userId: result._id },
          "secret_key"
        );
        res.status(201).json({
          message: "User created!",
          result: result,
          token: token
        });
      })
      .catch(err => {
        console.log(err);
        return res.status(500).json({
          err
        });
      });
  });
});
// Create a connection

router.post("/login", (req, res, next) => {
  let fetchedUser;

  // Search matching email and password

  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
      // variable receives email and password data      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed??"
        });
      }
      // Create a token including the user's email and password
      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id },
        "secret_key"
      );
      res.status(200).json({
        token: token,
        user: fetchedUser._doc.email
      });
    })
    .catch(err => {
      return res.status(401).json({
        message: "Auth failed"
      });
    });
});

module.exports = router;
