const express = require("express");
const { createList, getLists} = require("../db/controllers/listControllers");
const router = express.Router();

router.post("/createList", createList);
router.get("/getLists", getLists);

module.exports = router;