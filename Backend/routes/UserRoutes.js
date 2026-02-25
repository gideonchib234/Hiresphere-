const express = require("express");
const {updateProfile, deleteResume, getPublicProfile,} = require("../controllers/usercontroller");
const {protect} = require("../Middleware/Authmiddleware");
const upload = require("../Middleware/uploadmiddleware");

const router = express.Router();

router.put("/profile", protect, updateProfile);
router.post("/resume", protect, deleteResume);

router.get("/profile/:userId", getPublicProfile);

module.exports = router;
