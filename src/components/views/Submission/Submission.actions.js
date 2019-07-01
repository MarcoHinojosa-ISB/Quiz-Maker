import Axios from 'axios';

const clear = () => {
  return {
    type: 'SUBMISSION_CLEAR'
  };
};

const displaySubmission = (quizData) => {
  return {
    type: 'SUBMISSION_DISPLAY_SUBMISSION',
    quizData
  };
};

const getSubmission = (id) => {
  return (dispatch) => {
    Axios.get(`/api/submission?id=${id}`)
    .then((result) => {
      dispatch(displaySubmission(result.data));
    })
    .catch((error) => {
      console.log(error);
    });
  };
};

export {
  clear,
  getSubmission
};