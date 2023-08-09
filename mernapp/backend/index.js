const express = require("express");
const app = express();
const mongoDB = require("./db");
const port = 5000;

// The provided code is trying to set up CORS (Cross-Origin Resource Sharing) headers in a Node.js application using the Express framework.
app.use((req, res, next) => {
  // Set CORS headers to allow requests from http://localhost:3000
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  // Allow specific headers
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  // Allow specific HTTP methods
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  next();
});

// ... Your other route and middleware setup ...
app.use(express.json());
// This line adds middleware to the Express application. Specifically, it's using the express.json() middleware to parse incoming JSON data. When a client sends JSON data in the request body, this middleware will parse that data and make it accessible in your route handlers as req.body.
app.use("/api", require("./Routes/createUsers"));
// This line mounts a route handler for creating users under the "/api" route.
app.use("/api", require("./Routes/loginUsers"));
app.use("/api", require("./Routes/displayData"));


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
