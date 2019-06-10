import React from 'react';
import PropTypes from 'prop-types';
import { clearForm, updateErrorMessage, updatePassword, updateUsername } from '../LoginPage.actions';
import { connect } from 'react-redux';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount(){
    this.props.clearForm();
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
  clearForm: PropTypes.func,
  updateErrorMessage: PropTypes.func,
  updatePassword: PropTypes.func,
  updateUsername: PropTypes.func,
  login: PropTypes.func
};

function mapStateToProps(state) {
  return Object.assign({}, state.loginPage);
}

function mapDispatchToProps(dispatch) {
  return{
    clearForm: () => dispatch(clearForm()),
    updateErrorMessage: (message) => dispatch(updateErrorMessage(message)),
    updatePassword: (password) => dispatch(updatePassword(password)),
    updateUsername: (username) => dispatch(updateUsername(username))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);