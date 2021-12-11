const express = require("express");

const UserRouter = express.Router();

UserRouter.post("/login", userController.login);
UserRouter.post("/register", userController.register);
module.exports = UserRouter;
