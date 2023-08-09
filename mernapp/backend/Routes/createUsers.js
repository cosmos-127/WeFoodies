const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../models/User"); // Assuming you have a User model
const jwt = require("jsonwebtoken");
const jwtSecret = "your-secret-key"; // Replace with your own secret key

// Define validation rules for user input
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

// Route to create a new user and generate an authentication token
router.post("/createuser", validateUserInput, async (req, res) => {
  try {
    // Validate user input using express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    // Create a new user using the User model
    const newUser = await User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      location: req.body.location,
    });

    // Check if user creation was successful
    if (!newUser) {
      return res.status(500).json({ success: false, error: "User creation failed" });
    }

    // Generate a JWT token for the newly created user
    const token = jwt.sign({ userId: newUser._id }, jwtSecret, {
      expiresIn: "1h",
    });

    // Return success status and the generated token
    res.status(201).json({ success: true, token });
  } catch (error) {
    console.error(error);

    // Handle potential errors, such as duplicate email or other issues
    if (error.code === 11000) {
      // Duplicate key error (e.g., duplicate email)
      res.status(400).json({ success: false, error: "Email already exists" });
    } else {
      // Other errors
      res.status(500).json({ success: false, error: "An error occurred" });
    }
  }
});

module.exports = router;
