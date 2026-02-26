const User = require("../models/user");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { sendEmail } = require("../utils/mailer");

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "60d" });
};

const register = async (req, res) => {
    try {
        const { name, email, password, role, avatar } = req.body;
        const ExistingUser = await User.findOne({ email });
        if (ExistingUser) return res.status(400).json({ message: "User Already exists" });

        const user = await User.create({ name, email, password, role, avatar });

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            role: user.role,
            token: generateToken(user._id),
            companyName: user.companyName || "",
            companyLogo: user.companyLogo || "",
            companyDescription: user.companyDescription || "",
            resume: user.resume || "",
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });
        const isMatch = await user.matchPassword(password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            role: user.role,
            token: generateToken(user._id),
            companyName: user.companyName || "",
            companyLogo: user.companyLogo || "",
            companyDescription: user.companyDescription || "",
            resume: user.resume || "",
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Generate a numeric OTP, store hashed OTP + expiry on user, return success.
const generateOTP = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.status(400).json({ message: "Email is required" });

        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        // create 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        // store a hashed version in DB for security
        const hashed = crypto.createHash("sha256").update(otp).digest("hex");
        user.resetOTP = hashed;
        user.resetOTPExpires = Date.now() + 10 * 60 * 1000; // 10 minutes
        await user.save();

                // send OTP via email using EJS template
          try {
                    await sendEmail(email, "Your Hiresphere OTP", "otp_email.ejs", { otp, name: user.name });
                } catch (mailErr) {
                    // if email fails, clear stored OTP and respond with an error
                    user.resetOTP = undefined;
                    user.resetOTPExpires = undefined;
                    await user.save();
                    return res.status(500).json({ message: "Failed to send OTP email" });
                }

                return res.status(200).json({ message: "OTP sent to email" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Verify OTP and reset password
const verifyOtpAndReset = async (req, res) => {
    try {
        const { email, otp, newPassword } = req.body;
        if (!email || !otp || !newPassword) return res.status(400).json({ message: "Missing parameters" });

        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        if (!user.resetOTP || !user.resetOTPExpires) return res.status(400).json({ message: "No OTP requested" });
        if (Date.now() > user.resetOTPExpires) return res.status(400).json({ message: "OTP expired" });

        const hashed = crypto.createHash("sha256").update(otp).digest("hex");
        if (hashed !== user.resetOTP) return res.status(400).json({ message: "Invalid OTP" });

        // set new password and clear OTP fields
        user.password = newPassword;
        user.resetOTP = undefined;
        user.resetOTPExpires = undefined;
        await user.save();

        return res.status(200).json({ message: "Password reset successful" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = { login, register, generateToken, generateOTP, verifyOtpAndReset };