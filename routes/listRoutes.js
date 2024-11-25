const express = require("express");
const { createList } = require("../db/controllers/listControllers");
const router = express.Router();

router.post("/createList", createList);

module.exports = router;