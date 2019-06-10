import React from 'react';
import PropTypes from 'prop-types';
import { clearForm, updateErrorMessage, updatePassword, updateRepassword, updateUsername } from '../SignupPage.actions';
import { connect } from 'react-redux';

class SignupForm extends React.Component{
  constructor(props){
    super(props);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleRepassword = this.handleRepassword.bind(this);
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

  handleRepassword(e){
    this.props.updateRepassword(e.target.value);
  }

  handleSubmit(e){
    e.preventDefault();

    if(!this.props.username.match(/^[a-zA-Z0-9]*$/)) {
      this.props.updateErrorMessage(this.props.username + ' is not alphanumeric');
    } else if(this.props.password !== this.props.repassword){
      this.props.updateErrorMessage('password mismatch');
    } else if(this.props.password.length < 6) {
      this.props.updateErrorMessage('password too short');
    } else {
      this.props.signUp({ username: this.props.username, password: this.props.password });
    }
  }

  render(){
    return (
      <form className="signup-form" onSubmit={this.handleSubmit}>
        <label><i className="fa fa-user"></i>Username</label>
        <input type="text" onChange={this.handleUsername} value={this.props.username} required />
        <label><i className="fa fa-lock"></i>Password</label>
        <input type="password" onChange={this.handlePassword} value={this.props.password} required />
        <label><i className="fa fa-lock"></i>Retype password</label>
        <input type="password" onChange={this.handleRepassword} value={this.props.repassword} required />
        <button type="submit">Submit</button>
        <div className="error">{this.props.errorMessage}</div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  // properties
  errorMessage: PropTypes.string,
  password: PropTypes.string,
  repassword: PropTypes.string,
  username: PropTypes.string,
  // methods
  clearForm: PropTypes.func,
  updateErrorMessage: PropTypes.func,
  updatePassword: PropTypes.func,
  updateRepassword: PropTypes.func,
  updateUsername: PropTypes.func,
  signUp: PropTypes.func
};

function mapStateToProps(state) {
  return Object.assign({}, state.signupPage);
}

function mapDispatchToProps(dispatch) {
  return{
    clearForm: () => dispatch(clearForm()),
    updateErrorMessage: (message) => dispatch(updateErrorMessage(message)),
    updatePassword: (password) => dispatch(updatePassword(password)),
    updateRepassword: (repassword) => dispatch(updateRepassword(repassword)),
    updateUsername: (username) => dispatch(updateUsername(username))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);