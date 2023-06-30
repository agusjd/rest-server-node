const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.connectDb();
    this.middlewares()
    this.routes();
  }

  async connectDb() {
    await dbConnection();
  }
  middlewares() {
    this.app.use(cors());

    this.app.use(express.json())
  }

  routes() {
    this.app.use("/", require("../routes/message"));
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log("Server listening on port " + this.port);
    });
  }
}

module.exports = Server;
