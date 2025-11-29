require('dotenv').config();
const mongoose = require("mongoose");
exports.connectDB = (mongoose) => {
  try {
    const dbUrl = process.env.DATABASE || "mongodb://localhost:27017/ecommerce";
    mongoose.connect(dbUrl);
    console.log("Database Connected Successfully");
  } catch (err) {
    console.log("Database Not Connected");
  }
}