const express = require("express");
const router = express.Router();

router.post("/fooddata", (req, res) => {
  try {
    // Send back the data in a JSON response
    res.json([global.food_type, global.food_category]);
  } catch (error) {
    console.error("Error handling request:", error);
    res
      .status(500)

      .json({ error: "An error occurred while processing the request." });
  }
});

module.exports = router;
