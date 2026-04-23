const Application = require("../models/Application");
const Job = require("../models/job");

exports.applyToJob = async(req, res) => {
    try {
    if(req.user.role !== "jobseeker") {
        return res.status(403).json({message: "Only Job seekers can"});

    }   
    const existing = await Application.findOne({
        job:req.params.jobId,
        applicant:req.user._id,
    })

    if(existing){
       return res.status(400).json({message: "Already applied to this job"});
    }
      const application = await Application.create({
        job: req.params.jobId,
        applicant: req.user._id,
        resume: req.user.resume
      })    
      
    res.status(201).json(application);
    } catch (error) {
        res.status(500).json({message: err.message})
    }
};
exports.getMyApplication = async (req, res) => {
   try {
    const apps = await Application.find({ applicant: req.user._id })
    .populate("job", "title company location type")
    .sort ({createdAt: -1});

    res.json(apps);
   } catch (error) {
    res.status(500).json({message: err.message});
   }
};
exports.getApplicationforJob = async (req, res) => {
try {
const job = await job.findById(req.params.jobId);
 if(!job || job.company.toString() !== req.user.Id.toString()){
    return res.status(500).json({ message: "Not authorized to view applicants"});
 }
 const applications = await Application.find({ job: req.params.jobId})
 .populate("job", "title location category type")
 .populate("applicant", "name email avatar resume");

 res.json(applications);

} catch (error) {
    res.status(500)({ message: err.message});
}

};

exports.getApplicationById = async (req, res) => {
try {
    const app = await Application.findById(req.params.id)
    .populate("job", "title")
    .populate("applicant", "name email avatar resume")

if(!app) return res.status(404).json({ message: "Application"})
} catch (error) {
    
}
}
exports.updateStatus = async (req, res) => {

};
