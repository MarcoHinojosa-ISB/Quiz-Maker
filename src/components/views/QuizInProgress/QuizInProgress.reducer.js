const initialState = {
  loading: true,
  quiz: {},
  questions: []
};

const QuizInProgressReducer = (state = initialState, action) => {
  switch(action.type){
    case "DISPLAY_QUIZ":
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

export default QuizInProgressReducer;