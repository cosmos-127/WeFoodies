const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://WeFoodies:WeFoodies@cluster0.gs5hp9n.mongodb.net/WeFoodies?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    // connecting to the MongoDB database using Mongoose.
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");

    //  First it accesses the underlying native MongoDB collection object using mongoose.connection.db.collection("food_type"). Then, it uses the find({}) method to retrieve all documents in the collection and toArray() to convert the result into an array of objects.
    const fetchedData = await mongoose.connection.db
      .collection("food_type")
      .find({})
      .toArray();
    console.log("All data from WeFoodies collection:");
    // console.log(fetchedData);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw error;
  }
};

module.exports = mongoDB;
