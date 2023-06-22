const express = require('express');
const { getAllUsers, updateUser } = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.get("/get", getAllUsers) // GET ALL USERS
userRouter.patch("/update/:id", updateUser) // UPDATE SINGLE USER

module.exports = userRouter;