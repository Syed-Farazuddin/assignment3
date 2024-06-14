const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
  rating: {
    type: Number,
  },
  description: {
    type: String,
  },
});

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
