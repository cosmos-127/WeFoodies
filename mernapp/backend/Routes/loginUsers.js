const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
// Sign the JWT with a secret key
const secretKey = "your-secret-key"; // Replace with your actual secret key

router.post(
  "/loginuser",
  [
    // Validate email and password
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
      const userData = await User.findOne({ email });

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

      const authToken = jwt.sign(payload, secretKey, { expiresIn: "1h" }); // Token expires in 1 hour

      res.json({
        success: true,
        userData: { name: userData.name, email: userData.email },
        authToken,
      });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
