const mongoose = require("mongoose");

// connect ORM to database server
mongoose.connect("mongodb://localhost:27017/comics", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Book = mongoose.model("Book", {
  publisher: String,
  description: String,
  title: String,
  price: String,
  creators: String,
  release_date: Date,
  diamond_id: String
});

const transformer = new Book({
  publisher: "IDW PUBLISHING",
  description:
    "Megatron is faced with the ultimate decision. He can forge ahead on the path he's started down, or he can take the last chance at doing things by the book. Either way, Cybertron is on the verge of change, and after this, nothing will ever be the same.",
  title: "TRANSFORMERS #17 CVR A RAMONDELLI",
  price: "$3.99",
  creators:
    "(W) Brian Ruckley (A) Anna Malkova, Bethany McGuire-Smith (CA) Livio Ramondelli",
  release_date: "2020-02-19",
  diamond_id: "NOV190598"
});
transformer
  .save()
  .then(() => console.log("transforming sound"))
  .catch(err => console.log(err));

module.exports = mongoose;
