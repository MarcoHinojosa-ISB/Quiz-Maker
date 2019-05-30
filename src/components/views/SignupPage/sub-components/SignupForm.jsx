import React from 'react';
import PropTypes from 'prop-types';
import { clearForm, updatePassword, updateUsername } from '../SignupPage.actions';
import { connect } from 'react-redux';

class SignupForm extends React.Component{
  constructor(props){
    super(props);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
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

  render(){
    return (
      <form className="signup-form">
        <label><i className="fa fa-user"></i>Username</label>
        <input type="text" onChange={this.handleUsername} value={this.props.username} required />
        <label><i className="fa fa-lock"></i>Password</label>
        <input type="password" onChange={this.handlePassword} value={this.props.password} required />
      </form>
    );
  }
}

SignupForm.propTypes = {
  // properties
  username: PropTypes.string,
  password: PropTypes.string,
  repassword: PropTypes.string,
  // methods
  clearForm: PropTypes.func,
  updatePassword: PropTypes.func,
  updateUsername: PropTypes.func,
  validate: PropTypes.func
};

function mapStateToProps(state) {
  return Object.assign({}, state.signupPage);
}

function mapDispatchToProps(dispatch) {
  return{
    clearForm: () => dispatch(clearForm()),
    updatePassword: (password) => dispatch(updatePassword(password)),
    updateUsername: (username) => dispatch(updateUsername(username))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);