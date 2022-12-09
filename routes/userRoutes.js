const express = require("express");
const userRouter = express.Router();
const { body } = require("express-validator");
const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "BMSPROJECT";
const { validationResult } = require("express-validator");

// ROUTE 1: Create a user using POST "/users/signup". No Login Required
userRouter.post(
  "/signup",
  [
    body("username", "Enter a valid Name").isLength({ min: 3 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password must be at least 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let success = false; // flag variable 

    // If there are errors, return Bad requests and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;
    try {
      //Check whether the user with this email already exists
      const existingUser = await userModel.findOne({ email: email });
      if (existingUser) {
        success = false;
        return res.status(403).json({
          success,
          message: "Sorry a user with this email already exists",
        });
      }

      //Encrypt Password
      const hashedPassword = await bcrypt.hash(password, 10);

      //Create a new user
      const result = await userModel.create({
        email: email,
        password: hashedPassword,
        username: username,
      });

      //Token Creation for New Signed-Up users
      const token = jwt.sign(
        {
          email: result.email,
          id: result._id,
        },

        SECRET_KEY
      );
      success = true;
      res.status(201).json({
        success,
        token: token,
      });
    } 
    
    catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Something went wrong!",
      });
    }
  }
);

// ROUTE 2: Authenticate a user using POST "/users/signin". No Login Required
userRouter.post(
  "/signin",
  [
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false; // flag variable

    // If there are errors, return Bad requests and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      success = false;
      return res.status(400).json({ success, errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      //Check whether the user with this email already exists
      const existingUser = await userModel.findOne({
        email: email,
      });
      if (!existingUser) {
        success = false;
        return res.status(404).json({
          success,
          message: "User not found",
        });
      }

      const matchPassword = await bcrypt.compare(
        password,
        existingUser.password
      );

      // Matching the password
      if (!matchPassword) {
        success = false;
        return res.status(400).json({
          success,
          message: "Invalid Credentials",
        });
      }
      const token = jwt.sign(
        {
          email: existingUser.email,
          id: existingUser._id,
        },
        SECRET_KEY
      );
      success = true;
      res.status(201).json({
        success,
        token: token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Something went wrong",
      });
    }
  }
);

module.exports = userRouter;
