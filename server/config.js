export const PORT = 3000;

const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {})
    .then(() => {
      console.log("Database connection successful");
    })
    .catch((error) => {
      console.log("Database connection error:", error);
    });
};

module.exports = { connect };
