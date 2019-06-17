const initialState = {
  loading: true,
  pageNum: 1,
  submissions: [],
  totalPages: 1
};

const submissionsReducer = (state = initialState, action) => {
  switch(action.type){
    case 'SUBMISSIONS_CLEAR':
      return initialState;
    case 'SUBMISSIONS_UPDATE_LIST':
      return Object.assign({},
        state, 
        {
          loading: false,
          pageNum: action.selectedPage,
          submissions: action.list.submissions,
          totalPages: Math.ceil(action.list.total / 8)
        }
      );
    default:
      return state;
  }
};

export default submissionsReducer;