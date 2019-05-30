import React from 'react';

const LoginForm = () => {
  return (
    <form className="login-form">
      <label><i className="fa fa-user"></i>Username</label>
      <input type="text" />
      <label><i className="fa fa-lock"></i>Password</label>
      <input type="password" />
    </form>
  );
};

export default LoginForm;