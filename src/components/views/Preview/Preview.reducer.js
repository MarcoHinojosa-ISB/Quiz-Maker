const initialState = {
  quiz: {},
  questions: []
}

const previewReducer = (state = initialState, action) => {
  switch(action.type){
    case "DISPLAY_QUIZ":
      return Object.assign({}, 
        state,
        {
          quiz: action.quizData.quiz,
          questions: action.quizData.questions
        }
      );
    default:
      return state;
  }
}

export default previewReducer;