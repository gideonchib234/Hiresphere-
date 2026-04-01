const express = require("express");
const {register, login, getme, verifyOtpAndReset } = require("../controllers/authcontroller");
const {protect} = require("../Middleware/Authmiddleware");
const upload = require("../Middleware/uploadmiddleware")

const router = express.Router()

router.post("/Register", register);
router.post("/login", login);
router.post("/getMe", protect, getme);

router.post("/upload-image", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }
    const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    res.status(200).json({ imageUrl });
});
router.put("/forgotpassword", verifyOtpAndReset);
module.exports = router;