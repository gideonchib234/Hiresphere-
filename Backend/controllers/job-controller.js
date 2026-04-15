const Job = require('../models/job-model');
const User = require('../models/user');
const Application = require('../models/application-model');
const SavedJob = require('../models/savedjob-model');

exports.createJobs = async (req, res) => {
    try {
        if (req.user.role !== "employer") {
            return res.status(403).json({ message: "Only employers can create jobs" });
        }   

    const job = await Job.create({...req.body, company: req.user._id});
    res.status(201).json(job);
} catch (error) {
        res.status(500).json({ message: error.message });
    }       
};

exports.getJobs = async (req, res) => {
    const {keyword, 
        location, 
        category, 
        type, 
        minsalary, 
        maxsalary, 
        userId,} = req.query;
const query = {
    isClosed: false,
    ...(keyword && { title: { $regex: keyword, $options: "i" } }),
    ...(location && { location: { $regex: location, $options: "i" } }),
    ...(category && { category }),
    ...(type && { type }),
}
if(minsalary || maxsalary) {
    query.$and =[];

    if(minsalary) {
        query.$and.push({ salary: { $gte: Number(minsalary) } });
    }
    if(maxsalary) {
        query.$and.push({ salary: { $lte: Number(maxsalary) } });
    }
    if(query.$and.length === 0) {
        delete query.$and;
    }
 try{
   const jobs = await Job.find(query).populate
   ("company", "name companyName companyLogo");
   let savedJobIds = [];
   let appliedJobIds = [];

   if(userId) {
    const savedJobs = await savedJobs.find({ user: userId }).select("job");
    savedJobIds = savedJobs.map((savedJob) => savedJob.job.toString());
    
    const applications = await Application.find({applicant: userId}).select("job status");
    applications.forEach((app) => {
     appliedjobStatusMap[String(app.job)] = app.status;
    });
 }

const JobWithExtras = jobs.map((job) => {
 const JobIdStr = String(job._id);
 return{
    ...job.toObject(),
    isSaved: savedJobsIds.includes(jobIdStr),
    applicationStatus: appliedJobStatusMap[jobIdStr] || null,
}});
res.json(JobWithExtras);
}catch (err){
  res.status(500).json({message: err.message})
}
};
};
exports.getJobsEmployer = async(req, res) => {
    try{
 const userId = req.user._id;
 const {role} = req.user; 

 if(role !== "employer"){
 return res.status ({message: "Access denied"});
 }

 const jobs = await Job.find({company: userId})
 .populate("company", "name companyName companyLogo")
 .lean();

 const jobswithApplicationCounts = await Promise.all
 jobs.map(async (job) => {
    const applicationCount = await Application.countDicuments({
        job: job_id,
    })
    return {
        ...job,
        applicationCount,
    }
 })
res.json(jobswithApplicationCounts);
}catch(error){
 
    res.status(500).json({ message: err.message});

    }
};

exports.getJobById = async(req, res) => {
 try{
    const {userId} = req.query;

    const job = await job.findbyId(req.params.Id).populate(
        "compaany",
        "name companyName companyLogo"
    );
    if(!job){
       return res.status(404).json({ messsage: "job not found"});
    }
    let applicationStatus = null

    if(userId){s
        const application = await Application.findone({
            job:job.job_id,
            applicant: userId,
        }).select("status");
        if(application){
            applicationStatus = application.status:
        }
    }

    res.json({
        ...job.toObject(),
        applicationStatus,
    });
    }catch(error){
    res.status(500).json({ message: err.messsage})

 }
};
exports.updatejob =async (req, res) => {
    try{
        const job = await job.findById(req.params.id);
        if(!job) return res.status(404).json({ message: "Job not Found"});

        if(job.company.toStrings() != req.user._id.toString()){
            return res.status(403).json({ message: "Not Authorized to update this job"})

        }
    Object.assign(job, req.body);
    const updated = await job.save();
    
    }catch(error){
 res.status(500).json({ message: err.messasge })
    }
}

