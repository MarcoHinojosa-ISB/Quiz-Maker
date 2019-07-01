const express = require('express');
const SubmissionsRepository = require('../repositories/submissions.repository.js');

const submissionRoutes = express.Router();
const submissionsRepository = new SubmissionsRepository();

submissionRoutes.post('/submission', (req, res) => {
  submissionsRepository.createSubmission(req.body, (err) => {
    err ? res.status(500).send(err) : res.status(200).send('ok'); 
  });
});

submissionRoutes.get('/submissions', (req, res) => {
  submissionsRepository.getSubmissions(req.query, (err, result) => {
    err ? res.status(500).send(err) : res.status(200).send(result); 
  });
});

submissionRoutes.get('/submission', (req, res) => {
  submissionsRepository.getSubmission(req.query, (err, result) => {
    err ? res.status(500).send(err) : res.status(200).send(result); 
  });
});

module.exports = submissionRoutes;