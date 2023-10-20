const { Router } = require("express");
const { userRouter } = require("./countriesApi/controller");
const router = Router();

Router.use(userRouter);

module.exports = { router };
