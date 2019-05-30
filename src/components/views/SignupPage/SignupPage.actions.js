import Axios from 'axios';

const clearForm = () => {
  return {
    type: 'SIGNUP_PAGE_CLEAR_FORM'
  };
};

const signUp = (userInfo) => {
  return (dispatch) => {
    Axios.post('/api/auth/signup', userInfo)
    .then(() => {
      dispatch(clearForm());
    })
    .catch((error) => {
      console.log(error);
    });
  };
};

const updatePassword = (password) => {
  return {
    type: 'SIGNUP_PAGE_UPDATE_PASSWORD',
    password
  };
};

const updateUsername = (username) => {
  return {
    type: 'SIGNUP_PAGE_UPDATE_USERNAME',
    username
  };
};

export {
  clearForm,
  signUp,
  updatePassword,
  updateUsername
};