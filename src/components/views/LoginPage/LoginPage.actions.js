const clearForm = () => {
  return {
    type: 'LOGIN_PAGE_CLEAR_FORM'
  };
};

const updateErrorMessage = (message) => {
  return {
    type: 'LOGIN_PAGE_UPDATE_ERROR_MESSAGE',
    message
  };
};

const updatePassword = (password) => {
  return {
    type: 'LOGIN_PAGE_UPDATE_PASSWORD',
    password
  };
};

const updateUsername = (username) => {
  return {
    type: 'LOGIN_PAGE_UPDATE_USERNAME',
    username
  };
};

export {
  clearForm,
  updateErrorMessage,
  updatePassword,
  updateUsername
};