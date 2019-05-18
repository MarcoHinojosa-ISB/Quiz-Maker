const initialState = {
  pageNum: 1,
  quizzes: [],
  quizzesPerPage: 8,
  totalPages: 1
}

const quizzesReducer = (state = initialState, action) => {
  switch(action.type){
    case 'UPDATE_LIST':
      return Object.assign({}, 
        state, 
        {
          pageNum: action.selectedPage,
          quizzes: action.list.quizzes,
          totalPages: Math.ceil(action.list.count / state.quizzesPerPage)
        }
      );
    default:
      return state;
  }
}

export default quizzesReducer;
