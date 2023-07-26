const express = require("express");
const app = express();
const mongoDB = require("./db");
const port = 5000;

// ... Your other route and middleware setup ...
app.use(express.json());
app.use("/api", require("./Routes/createUsers"));


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
