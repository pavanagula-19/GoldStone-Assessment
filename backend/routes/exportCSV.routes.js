const express = require("express");
const { exportCSV } = require("../controllers/exportCSV.controller");

const exportCSVRouter = express.Router();

exportCSVRouter.get('/', exportCSV)


module.exports = { exportCSVRouter }