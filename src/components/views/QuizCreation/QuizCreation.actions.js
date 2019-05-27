import Axios from 'axios';

const addQuestion = () => {
  return {
    type: 'ADD_QUESTION'
  };
};

const clearForm = () => {
  return {
    type: 'CLEAR_FORM'
  };
};

const createQuiz = (quiz) => {
  return (dispatch) => {
    Axios.post('/api/quiz', quiz)
      .then(() => {
        dispatch(quizCreated());
        setTimeout(() => {
          dispatch(clearForm());
        }, 1000);
      }).catch((error) => {
        console.log(error);
      });
  };
};

const editQuestion = (text) => {
  return {
    type: 'EDIT_QUESTION',
    text
  };
};

const editTitle = (title) => {
  return {
    type: 'EDIT_TITLE',
    title
  };
};

const quizCreated = () => {
  return {
    type: 'QUIZ_CREATED'
  };
};

const removeQuestion = (index) => {
  return {
    type: 'REMOVE_QUESTION',
    index
  };
};

export {
  addQuestion,
  clearForm,
  createQuiz,
  editQuestion,
  editTitle,
  quizCreated,
  removeQuestion,
};
