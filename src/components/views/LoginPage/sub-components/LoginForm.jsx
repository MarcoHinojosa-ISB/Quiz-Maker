import React from 'react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component{
  constructor(props){
    super(props);

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsername(e){
    this.props.updateUsername(e.target.value);
  }

  handlePassword(e){
    this.props.updatePassword(e.target.value);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.login({ username: this.props.username, password: this.props.password });
  }

  render(){
    return (
      <form className="login-form" onSubmit={this.handleSubmit} >
        <label><i className="fa fa-user"></i>Username</label>
        <input type="text" onChange={this.handleUsername} value={this.props.username} required />

        <label><i className="fa fa-lock"></i>Password</label>
        <input type="password" onChange={this.handlePassword} value={this.props.password} required />
        
        <button type="submit">Submit</button>
        <div className="error">{this.props.errorMessage}</div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  // properties
  errorMessage: PropTypes.string,
  password: PropTypes.string,
  username: PropTypes.string,
  // methods
  updatePassword: PropTypes.func,
  updateUsername: PropTypes.func,
  login: PropTypes.func
};

export default LoginForm;