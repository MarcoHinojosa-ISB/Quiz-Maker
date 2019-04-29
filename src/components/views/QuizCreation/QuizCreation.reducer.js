const initialState = {
  disabled: true,
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
          disabled: action.title.length === 0 || state.questions.length === 0,
          title: action.title
        });
    case 'EDIT_QUESTION':
      return Object.assign({},
        state,
        {
          question: action.question
        });
    case 'ADD_QUESTION':
      return Object.assign({},
        state,
        {
          disabled: state.title.length === 0,
          questions: [
            ...state.questions,
            action.question
          ]
        });
    case 'REMOVE_QUESTION':
      return Object.assign({},
        state,
        {
          disabled: state.questions.length === 1,
          questions: [
            ...state.questions.slice(0, action.index),
            ...state.questions.slice(action.index + 1)
          ]
        });
    case 'CLEAR_FORM':
      return Object.assign({},
        state,
        {
          disabled: true,
          title: '',
          question: '',
          questions: []
        });
    default:
      return state;
  }
};

export default quizCreationReducer;
