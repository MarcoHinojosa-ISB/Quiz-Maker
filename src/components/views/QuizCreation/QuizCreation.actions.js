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

export {
  editTitle,
  editQuestion,
  addQuestion,
  removeQuestion
};
