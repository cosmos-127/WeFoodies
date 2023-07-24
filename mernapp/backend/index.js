const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db"); // Adjust the path to your db.js file

// ... Your other route and middleware setup ...


// Connect to MongoDB before starting the server
mongoDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error starting the server:", error.message);
  });
