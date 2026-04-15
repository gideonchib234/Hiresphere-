const express = require("express");

const { createJobs, getJobs, getjobId, updateJob, 
    deleteJob, toggleCloseJob, getJobsEmployer} = require("../controllers/jobcontroller");
const { protect } = require("../Middleware/Authmiddleware");
const router = express.Router();

router.route("/create", protect, createJobs).get(getJobs);
router.route("/get-job-employer").get(protect, getJobsEmployer);
router.route("/:id").get(getjobId).put(protect, updateJob).delete(protect, deleteJob);
router.put("/toggle-close/:id").put(protect, toggleCloseJob);

module.exports = router;