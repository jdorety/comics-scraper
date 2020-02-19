const server = require("./server");
require("dotenv").config();

// .env variable required for deployment (Heroku, in this case)
const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`Listening on port ${port}`));
