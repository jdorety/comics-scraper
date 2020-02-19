const mongoose = require("mongoose");

const Book = mongoose.model("Book", {
  publisher: String,
  description: String,
  title: String,
  price: String,
  creators: String,
  release_date: Date,
  diamond_id: String,
  cover_hq: String,
  cover_thumb: String
});

module.exports = { Book };
