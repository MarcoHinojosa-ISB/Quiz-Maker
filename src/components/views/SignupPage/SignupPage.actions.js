const clearForm = () => {
  return {
    type: 'SIGNUP_PAGE_CLEAR_FORM'
  };
};

const updateErrorMessage = (message) => {
  return {
    type: 'SIGNUP_PAGE_UPDATE_ERROR_MESSAGE',
    message
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

const updateRepassword = (repassword) => {
  return {
    type: 'SIGNUP_PAGE_UPDATE_REPASSWORD',
    repassword
  };
};

export {
  clearForm,
  updateErrorMessage,
  updatePassword,
  updateRepassword,
  updateUsername
};