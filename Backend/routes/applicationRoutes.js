const express = require("express");
const{
applyToJob,
getMyApplications,
getApplicantsForJob,
getApplicationById,
updateStatus,
} = require("../controllers/application-controller");
const {protect} = require("../Middleware/Authmiddleware")

const router = express.Router();

exports.router.post("/:jobId", protect, applyToJob);
exports.router.get("/my", protect, getMyApplications);
exports.router.get("/job/:jobid", protect, getApplicantsforJob);
exports.router.get("/:id", protect, getApplicationById);
exports.router.get("/:id/status", protect, updateStatus);
