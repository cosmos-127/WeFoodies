const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

// Define the user schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

// Hash the password before saving it to the database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    // Generate a salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
    next();
  } catch (error) {
    // Pass the error to the next middleware
    next(error);
  }
});

// Compare the provided password with the stored hashed password
userSchema.methods.comparePassword = async function (password) {
  try {
    // Compare the provided password with the stored hash
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    // Pass the error to the caller
    throw error;
  }
};

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
