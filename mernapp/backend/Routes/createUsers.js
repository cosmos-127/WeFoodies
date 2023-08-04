const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const jwtSecret = "your-secret-key"; // Replace with your own secret key

// Validate user input
const validateUserInput = [
  body("name")
    .notEmpty()
    .trim()
    .isString()
    .withMessage("Name is required and must be a string"),
  body("password")
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("email").notEmpty().isEmail().withMessage("Invalid email format"),
  body("location")
    .optional()
    .isString()
    .withMessage("Location must be a string"),
];

// Create a new user and generate an authentication token
router.post("/createuser", validateUserInput, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const newUser = await User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      location: req.body.location,
    });

    // Generate a JWT token
    const token = jwt.sign({ userId: newUser._id }, jwtSecret, {
      expiresIn: "1h",
    });

    res.status(201).json({ success: true, token }); // Return the token along with success status
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false }); // 500 Internal Server Error
  }
});

module.exports = router;
