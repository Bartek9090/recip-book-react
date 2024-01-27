const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

router.get("/hello0", (req, res) => {
  res.send("Hello World!");
});

app.use("functions/api", router);

module.exports.handler = serverless(app);
