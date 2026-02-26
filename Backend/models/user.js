const mongoose = require("mongoose");
const bcrypt = require ("bcrypt");

const userSchema = mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type: String,
        enum:["Jobseeker", "employer"],
        required: true
    },
    avatar: String,
    resume: String,
    
//for employer
    companyName: String,
    companyDescription: String,
    companyLogo: String,
},{timestamps: true});

// Fields for password reset OTP
userSchema.add({
    resetOTP: String,
    resetOTPExpires: Date,
});

//Encrypt password before save 
userSchema.pre("save", async function (next) {
 if(!this.isModified("password")) return next();
 this.password = await bcrypt.hash(this.password, 10);
 next();
});

//match entered password
userSchema.methods.matchPassword = function (enteredPassword){
    return bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
