const initialState = {
  password: '',
  username: '',
};

const signupPageReducer = (state = initialState, action) => {
  switch(action.type){
    case 'SIGNUP_PAGE_CLEAR_FORM':
      return initialState;
    case 'SIGNUP_PAGE_UPDATE_PASSWORD':
      return Object.assign({}, state, {
        password: action.password
      });
    case 'SIGNUP_PAGE_UPDATE_USERNAME':
      return Object.assign({}, state, {
        username: action.username
      });
    default:
      return state;
  }
};

export default signupPageReducer;