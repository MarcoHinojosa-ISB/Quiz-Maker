const initialState = {
  loading: true,
  quiz: {},
  questions: []
};

const previewReducer = (state = initialState, action) => {
  switch(action.type){
    case 'PREVIEW_CLEAR': 
      return initialState;
    case 'PREVIEW_DISPLAY_QUIZ':
      return Object.assign({}, 
        state,
        {
          loading: false,
          quiz: action.quizData.quiz,
          questions: action.quizData.questions
        }
      );
    default:
      return state;
  }
};

export default previewReducer;