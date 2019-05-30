import Axios from 'axios';

const clear = () => {
  return {
    type: 'QUIZ_IN_PROGRESS_CLEAR'
  };
};

const completeQuiz = () => {
  return {
    type: 'QUIZ_IN_PROGRESS_COMPLETE_QUIZ'
  };
};

const displayQuiz = (quizData) => {
  return {
    type: 'QUIZ_IN_PROGRESS_DISPLAY_QUIZ',
    quizData
  };
};

const getQuiz = (id) => {
  return (dispatch) => {
    Axios.get(`/api/quiz?id=${id}`)
    .then((result) => {
      dispatch(displayQuiz(result.data));
    })
    .catch((error) => {
      console.log(error);
    });
  };
};

const submitAnswers = (data) => {
  return (dispatch) => {
    Axios.post('/api/submission', data)
      .then(() => {
        dispatch(completeQuiz());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const updateAnswer = (index, input) => {
  return {
    type: 'QUIZ_IN_PROGRESS_UPDATE_ANSWER',
    index,
    input
  };
};

export {
  clear,
  getQuiz,
  submitAnswers,
  updateAnswer
};