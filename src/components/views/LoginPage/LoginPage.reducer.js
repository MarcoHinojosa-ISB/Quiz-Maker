const initialState = {
  errorMessage: '',
  password: '',
  username: '',
};

const loginPageReducer = (state = initialState, action) => {
  switch(action.type){
    case 'LOGIN_PAGE_CLEAR_FORM':
      return initialState;
    case 'LOGIN_PAGE_UPDATE_ERROR_MESSAGE':
      return Object.assign({}, state, {
        errorMessage: action.message
      });
    case 'LOGIN_PAGE_UPDATE_PASSWORD':
      return Object.assign({}, state, {
        password: action.password
      });
    case 'LOGIN_PAGE_UPDATE_USERNAME':
      return Object.assign({}, state, {
        username: action.username
      });
    default:
      return state;
  }
};

export default loginPageReducer;