const SubmissionsRepository = require('../repositories/submissions.repository');
const submissionsRepository = new SubmissionsRepository();

class SubmissionsController{
  createSubmission(req, res){
    submissionsRepository.createSubmission(req.body, (err) => {
      err ? res.status(500).send(err) : res.status(200).send('ok'); 
    });
  }

  getSubmissions(req, res){
    submissionsRepository.getSubmissions(req.query, (err, result) => {
      err ? res.status(500).send(err) : res.status(200).send(result); 
    });
  }

  getSubmission(req, res){
    submissionsRepository.getSubmission(req.query, (err, result) => {
      err ? res.status(500).send(err) : res.status(200).send(result); 
    });
  }
}

module.exports = SubmissionsController;