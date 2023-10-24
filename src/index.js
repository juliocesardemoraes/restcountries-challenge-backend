const express = require("express");
const router = require("./countriesApi/controller");
const app = express();
const cors = require("cors");

// Enable CORS for all routes
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // You can specify the allowed origins here
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(router);
app.use(cors(corsOptions));
app.use(express.json());

app.listen(3000);

module.exports = app;
