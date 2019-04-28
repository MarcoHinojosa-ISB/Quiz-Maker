const initialState = {
  title: '',
  question: '',
  questions: []
};

const quizCreationReducer = (state = initialState, action) => {
  switch(action.type){
    case 'EDIT_TITLE':
      return Object.assign({},
        state,
        {
          title: action.title
        });
    case 'EDIT_QUESTION':
      console.log(action);
      return Object.assign({},
        state,
        {
          question: action.question
        });
    case 'ADD_QUESTION':
      return Object.assign({},
        state,
        {
          questions: [
            ...state.questions,
            action.question
          ]
        });
    case 'REMOVE_QUESTION':
      return Object.assign({},
        state,
        {
          questions: [
            ...state.questions.slice(0, action.index),
            ...state.questions.slice(action.index + 1)
          ]
        });
    case 'CLEAR_FORM':
      return Object.assign({},
        state,
        {
          title: '',
          question: '',
          questions: []
        });
    default:
      return state;
  }
};

export default quizCreationReducer;
