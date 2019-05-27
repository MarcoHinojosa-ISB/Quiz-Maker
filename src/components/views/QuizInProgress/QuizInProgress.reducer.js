const initialState = {
  answers: [],
  complete: false,
  loading: true,
  quiz: {},
  questions: []
};

const QuizInProgressReducer = (state = initialState, action) => {
  switch(action.type){
    case 'CLEAR':
      return initialState;
    case 'COMPLETE_QUIZ':
      return Object.assign({},
        initialState,
        {
          complete: true,
          loading: false
        }
      );
    case 'DISPLAY_QUIZ':
      return Object.assign({}, 
        state,
        {
          loading: false,
          quiz: action.quizData.quiz,
          questions: action.quizData.questions,
          answers: Array(action.quizData.questions.length).fill('')
        }
      );
    case 'UPDATE_ANSWER':
      return Object.assign({},
        state,
        {
          answers: [
            ...state.answers.slice(0, action.index),
            action.input,
            ...state.answers.slice(action.index + 1)
          ]
        });
    default:
      return state;
  }
};

export default QuizInProgressReducer;