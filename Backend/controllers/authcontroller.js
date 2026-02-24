const User = require ("../models/user");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {expiresin: "60d"});
};

const register = async (req, res) => {
    try {
        const {name, email, password, role, avatar} = req.body
        const ExistingUser = await User.findOne({ email });
        if (ExistingUser) returnres.status(400).json({message: "User Already exists"})
        
        const user = await User.create ({ name, email, password, role, avatar });

        res.status(201).json({
         _id: user._id,
         name: user.name,
         email: user.email,
         avatar: user.avatar,
         role: user.role,
         token: generateToken(user._id),
         companyName: user.companyName || '',
         companyLogo: user.companyLogo || '',
         companyDescription: user.companyDescription || '',
         resume: user.resume || '',

        })
        
    } catch (error) {
        res.status(500).json({message: err.message})
    }

}
const login = async (req, res) => {

}
