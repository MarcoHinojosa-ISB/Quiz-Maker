const initialState = {
  loading: true,
  pageNum: 1,
  quizzes: [],
  totalPages: 1
}

const quizzesReducer = (state = initialState, action) => {
  switch(action.type){
    case 'UPDATE_LIST':
      return Object.assign({}, 
        state, 
        {
          loading: false,
          pageNum: action.selectedPage,
          quizzes: action.list.quizzes,
          totalPages: Math.ceil(action.list.total / 8)
        }
      );
    default:
      return state;
  }
}

export default quizzesReducer;
