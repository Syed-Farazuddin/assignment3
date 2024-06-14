const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/moengage")
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = connectDB();
