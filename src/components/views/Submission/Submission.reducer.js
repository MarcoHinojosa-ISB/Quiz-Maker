const initialState = {
  answers: [],
  loading: true,
  questions: [],
  quiz: {}
};

const submissionReducer = (state = initialState, action) => {
  switch(action.type){
    case 'SUBMISSION_CLEAR':
      return initialState;
    case 'SUBMISSION_DISPLAY_SUBMISSION':
      return Object.assign({}, 
        state,
        {
          loading: false,
          answers: action.quizData.answers,
          questions: action.quizData.questions,
          quiz: action.quizData.quiz
        }
      );
    default:
      return state;
  }
};


export default submissionReducer;