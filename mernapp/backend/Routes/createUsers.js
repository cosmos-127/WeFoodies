const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../models/User");

router.post(
  "/createuser",
  [
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
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }

      await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        location: req.body.location,
      });

      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
