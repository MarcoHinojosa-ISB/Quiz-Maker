import Axios from 'axios';

const editTitle = (title) => {
  return {
    type: 'EDIT_TITLE',
    title
  };
};

const editQuestion = (question) => {
  return {
    type: 'EDIT_QUESTION',
    question
  };
};

const addQuestion = (question) => {
  return {
    type: 'ADD_QUESTION',
    question
  };
};

const removeQuestion = (index) => {
  return {
    type: 'REMOVE_QUESTION',
    index
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
    .then((result) => {
      dispatch(clearForm());
    }).catch((error) => {
      console.log(error)
    });
  };
};

export {
  editTitle,
  editQuestion,
  addQuestion,
  removeQuestion,
  clearForm,
  createQuiz
};
