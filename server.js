const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).send({ message: "Hello world!" });
});

module.exports = server;
