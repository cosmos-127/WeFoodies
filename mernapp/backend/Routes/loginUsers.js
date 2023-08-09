const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../models/User"); // Import the User model
const jwt = require("jsonwebtoken");
const secretKey = "your-secret-key"; // Replace with your actual secret key

// Route to handle user login
router.post(
  "/loginuser",
  [
    // Validate email and password using express-validator
    body("email").isEmail().normalizeEmail(),
    body("password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password } = req.body;

      // Find the user data based on the provided email
      const userData = await User.findOne({ email });

      // If no user found, return an authentication error
      if (!userData) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Check if the provided password matches the stored password
      const isPasswordValid = await userData.comparePassword(password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Create a payload for the JWT
      const payload = {
        user: {
          id: userData.id,
        },
      };

      // Generate a JWT token with a 1-hour expiration
      const authToken = jwt.sign(payload, secretKey, { expiresIn: "1h" });

      // Respond with success, user data, and the generated token
      res.json({
        success: true,
        user: { name: userData.name, email: userData.email },
        authToken,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "An error occurred" });
    }
  }
);

module.exports = router;
