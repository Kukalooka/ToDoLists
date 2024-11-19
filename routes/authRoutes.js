const express = require("express");
const { register, login, validate } = require("../db/controllers/authControllers");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/validate", validate)

module.exports = router;