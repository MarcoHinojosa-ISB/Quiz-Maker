const express = require('express');
const submissionRoutes = express.Router();

const SubmissionsController = require('../controllers/submissions.controller');
const submissionsController = new SubmissionsController();

submissionRoutes.post('/submission', submissionsController.createSubmission);
submissionRoutes.get('/submissions', submissionsController.getSubmissions);
submissionRoutes.get('/submission', submissionsController.getSubmission);

module.exports = submissionRoutes;