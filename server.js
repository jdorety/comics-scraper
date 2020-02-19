const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const db = require("./util/mongoose");
const { Book } = require("./data/models");

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.get("/", async (req, res) => {
  try {
    const books = await Book.find().exec();
    res.status(200).send({ books: books });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: "DB not configured properly", error: err });
  }
});

server.post("/test", async (req, res) => {
  try {
    const { book } = req.body;
    comicBook = new Book(book);
    const response = await comicBook.save();
    res.status(201).json({ message: response });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "there were an error" });
  }
});

module.exports = server;
