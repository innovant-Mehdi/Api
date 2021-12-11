const express = require("express");
const userController = require("../controller/User");

const UserRouter = express.Router();

UserRouter.post("/login", userController.login);
UserRouter.post("/register", userController.register);
module.exports = UserRouter;
