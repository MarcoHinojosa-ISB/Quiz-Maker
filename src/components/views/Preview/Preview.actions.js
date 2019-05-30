import Axios from 'axios';

const clear = () => {
  return {
    type: 'PREVIEW_CLEAR'
  };
};

const displayQuiz = (quizData) => {
  return {
    type: 'PREVIEW_DISPLAY_QUIZ',
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

export {
  clear,
  getQuiz
};