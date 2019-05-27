const express = require('express');
const SubmissionsRepository = require('../repositories/submissions.repository.js');

const submissionRoutes = express.Router();
const submissionsRepository = new SubmissionsRepository();

submissionRoutes.post('/submission', (req, res) => {
  submissionsRepository.createSubmission(req.body, (err) => {
    return err ? res.status(500).send(err) : res.status(200).send('ok'); 
  });
});

module.exports = submissionRoutes;