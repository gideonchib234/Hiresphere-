const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    job: { type: mongoose.Schema.Types.ObjectId, ref: 'job', required: true },
    jobSeeker: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    resume: { type: String },
    status: { type: String, enum: ['Applied', 'Under Review', 'Rejected', 'Accepted'], 
    default: 'Applied' },
    
}, { timestamps: true }
);

module.exports = mongoose.model('Application', applicationSchema);