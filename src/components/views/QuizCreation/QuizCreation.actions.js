import Axios from 'axios';

const addQuestion = () => {
  return {
    type: 'QUIZ_CREATION_ADD_QUESTION'
  };
};

const clearForm = () => {
  return {
    type: 'QUIZ_CREATION_CLEAR_FORM'
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
    type: 'QUIZ_CREATION_EDIT_QUESTION',
    text
  };
};

const editTitle = (title) => {
  return {
    type: 'QUIZ_CREATION_EDIT_TITLE',
    title
  };
};

const quizCreated = () => {
  return {
    type: 'QUIZ_CREATION_QUIZ_CREATED'
  };
};

const removeQuestion = (index) => {
  return {
    type: 'QUIZ_CREATION_REMOVE_QUESTION',
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
