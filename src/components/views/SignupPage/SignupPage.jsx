import React from 'react';
import Axios from 'axios';
import SignupForm from './sub-components/SignupForm.jsx';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearForm, updateErrorMessage, updatePassword, updateRepassword, updateUsername } from './SignupPage.actions';
import { Link, withRouter } from 'react-router-dom';

class SignupPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {};

    this.signUp = this.signUp.bind(this);
  }

  componentWillUnmount(){
    this.props.clearForm();
  }

  signUp(userInfo){
    Axios.post('/api/signup', userInfo)
    .then((result) => {
      sessionStorage.setItem('quiz-maker-auth-token', result.data);
      this.props.history.push('/');
    })
    .catch((error) => {
      this.props.updateErrorMessage(error.response.data);
      console.log(error);
    });
  }

  render(){
    return (
      <div id="signup-page">
        <div className="panel">
          <h1 className="title">Sign Up</h1>
          <SignupForm 
            {...this.props}
            signUp={this.signUp} />
          <hr />
          <p className="has-account">
            Have an account? <Link to="/login-page">Log in</Link>
          </p>
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
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
    updateUsername: (username) => dispatch(updateUsername(username)),
    updateRepassword: (repassword) => dispatch(updateRepassword(repassword))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignupPage));
