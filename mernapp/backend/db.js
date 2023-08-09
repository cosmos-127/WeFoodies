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

    // fetching food_type collection
    const fetchedData_type = await mongoose.connection.db
      .collection("food_type")
      .find({})
      .toArray();
    console.log("food_type data is fetched");
    global.food_type = fetchedData_type;

    // fetching food_category collection
    const fetchedData_category = await mongoose.connection.db
      .collection("food_category")
      .find({})
      .toArray();
    console.log("food_category data is fetched");
    global.food_category = fetchedData_category;
  }

  catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

module.exports = mongoDB;
