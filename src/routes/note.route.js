const express = require("express");
const router = express.Router();
const Ctrl = require("../controllers/note.controller");

router.get("/", Ctrl.getNote);

module.exports = router;
