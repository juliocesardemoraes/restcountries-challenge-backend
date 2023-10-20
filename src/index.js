const express = require("express");
const router = require("./countriesApi/controller");
const app = express();
const cors = require("cors");

app.use(router);
app.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);
app.use(express.json());

app.listen(3000);

module.exports = app;
