const mongoose = require('mongoose');

const savedJobSchema = new mongoose.Schema({
    jobSeeker: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    job: { type: mongoose.Schema.Types.ObjectId, ref: 'job', required: true },
}, { timestamps: true });

module.exports = mongoose.model('SavedJob', savedJobSchema);