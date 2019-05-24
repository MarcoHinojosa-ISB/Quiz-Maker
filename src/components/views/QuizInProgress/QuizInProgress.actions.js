import Axios from 'axios';

const getQuiz = (id) => {
  return (dispatch) => {
    Axios.get(`/api/quiz?id=${id}`)
    .then((result) => {
      dispatch(displayQuiz(result.data));
    })
    .catch((error) => {
      console.log(error);
    })
  }
}

const displayQuiz = (quizData) => {
  return {
    type: 'DISPLAY_QUIZ',
    quizData
  }
}

export {
  getQuiz
}