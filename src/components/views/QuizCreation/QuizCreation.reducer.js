const initialState = {
  disabled: true,
  newQuestion: '',
  questions: [],
  quizCreated: false,
  title: ''
};

const quizCreationReducer = (state = initialState, action) => {
  switch(action.type){
    case 'QUIZ_CREATION_ADD_QUESTION':
      if(state.newQuestion.trim().length > 0) {
        return Object.assign({},
          state,
          {
            disabled: state.title.length === 0,
            newQuestion: '',
            questions: [
              ...state.questions,
              state.newQuestion
            ]
          });
      } else {
        return state;
      }
    case 'QUIZ_CREATION_CLEAR_FORM':
      return initialState;
    case 'QUIZ_CREATION_EDIT_QUESTION':
      return Object.assign({},
        state,
        {
          newQuestion: action.text
        });
    case 'QUIZ_CREATION_EDIT_TITLE':
      return Object.assign({},
        state,
        {
          disabled: action.title.length === 0 || state.questions.length === 0,
          title: action.title
        });
    case 'QUIZ_CREATION_REMOVE_QUESTION':
      return Object.assign({},
        state,
        {
          disabled: state.questions.length === 1,
          questions: [
            ...state.questions.slice(0, action.index),
            ...state.questions.slice(action.index + 1)
          ]
        });
    case 'QUIZ_CREATION_QUIZ_CREATED':
      return Object.assign({},
        state,
        {
          disabled: true,
          newQuestion: '',
          questions: [],
          quizCreated: true,
          title: ''
        });
    default:
      return state;
  }
};

export default quizCreationReducer;
