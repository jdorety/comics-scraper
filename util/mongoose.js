const mongoose = require("mongoose");

const dbUrl = process.env.MONGODB_URI || "mongodb://localhost:27017";

// connect ORM to database server
mongoose.connect(`${dbUrl}/comics`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("succesfully opened database");
});
module.exports = mongoose;
