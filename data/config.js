const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// connection url
const url = "mongodb://localhost:27017";

// database name
const dbName = "comics";

// set mongo options
const options = { useUnifiedTopology: true };

// create new MongoClient
const client = new MongoClient(url, options);

client.connect(err => {
  assert.equal(null, err);
  console.log("connected to server!");

  const db = client.db(dbName);

  client.close();
});

module.exports = db;
