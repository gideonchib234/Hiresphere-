const fs = require('fs');
const path = require('path');
const User = require("../models/user");

const updateProfile = async (req, res) => {
    try{
        const { name, avatar, companyName, companyDescription, companyLogo, resume} = req.body;
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({message: "User not found"});

        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.avatar = req.body.avatar || user.avatar;
        if (user.role === "employer") {
            user.companyName = req.body.companyName || user.companyName;
            user.companyDescription = req.body.companyDescription || user.companyDescription;
            user.companyLogo = req.body.companyLogo || user.companyLogo;
        }

        await user.save();
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            role: user.role,
            cpmpanyName: user.companyName,
            companyDescription: user.companyDescription,
            companyLogo: user.companyLogo
        })

    }catch (e) {
        res.status(500).json({message: e.message})
    }
}

const deleteResume = async (req, res) => {
    try {
    const { resumeUrl } = req.body;

    const fileName = resumeUrl?.split('/')?.pop();

    const user = await User.findbyId(req.user._id);

    if(!user) return res.status(404).json({ message: "User not found"});

    if(user.role!== "jobseeker")
        return res.status(403).json({message: "Only jobseekers can delete Resume"});
    const filePath = path.join(__dirname, '../uploads', fileName);

    if (fs.existsSync(filePath)){
        fs.unlinkSync(filePath);
    }

    user.resume = '';
    await user.save();
    res.json({ message: 'resume deleted successfully'});


    } catch (e) {
        res.status(500).json({message: e.message})
    }
}

const getPublicProfile = async (req, res) => {
    try {
     const user = await User.findById(req.params.id).select("-password");
      if(!user) return res.status(404).json({message: "User not found"})

      res.json(user);
    }catch (e) {
        res.status(500).json({message: e.message})
    }

}

module.exports = {
    updateProfile,
    deleteResume,
    getPublicProfile
}