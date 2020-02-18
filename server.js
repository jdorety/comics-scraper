const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("./util/mongoose");

const server = express();

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log("whoop whoop");
});

server.use(cors());
server.use(helmet());
server.use(express.json());

server.get("/", async (req, res) => {
  try {
    const query = await db.model("Book").find();

    res.status(200).send({ message: "Hello world!", test: query });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: "DB not configured properly", error: err });
  }
});

module.exports = server;
