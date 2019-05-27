import Axios from 'axios';

const clear = () => {
  return {
    type: 'CLEAR'
  };
};

const displayQuiz = (quizData) => {
  return {
    type: 'DISPLAY_QUIZ',
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