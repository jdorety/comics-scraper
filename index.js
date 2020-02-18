const express = require("express");
const server = express();
require("dotenv").config();

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`Listening on port ${port}`));
