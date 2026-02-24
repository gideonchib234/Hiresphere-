const express = require("express");
const {register, login, getme } = require("../controllers/authcontroller");
const {protect} = require("../Middleware/Authmiddleware");

const router = express.Router()

router.post("/Register", register);
router.post("/login", login);
router.post("/getMe", protect, getme);

module.exports = router;