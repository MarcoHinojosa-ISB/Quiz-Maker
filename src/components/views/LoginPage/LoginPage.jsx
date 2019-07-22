import React from 'react';
import Axios from 'axios';
import LoginForm from './sub-components/LoginForm.jsx';
import PropTypes from 'prop-types';
import { clearForm, updateErrorMessage, updatePassword, updateUsername } from './LoginPage.actions';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class LoginPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {};

    this.login = this.login.bind(this);
  }

  componentWillUnmount(){
    this.props.clearForm();
  }

  login(userInfo){
    Axios.post('/api/login', userInfo)
    .then((result) => {
      sessionStorage.setItem('quiz-maker-auth-token', result.data);
      this.props.history.push('/');
    })
    .catch((error) => {
      this.props.updateErrorMessage(error.response.data);
      console.log(error.response);
    });
  }

  render(){
    return (
      <div id="login-page">
        <div className="panel">
          <h1 className="title">Login</h1>
          <LoginForm
            {...this.props}
            login={this.login} />
          <hr />
          <p className="no-account">
            No account? <Link to="/signup-page">Sign up</Link>
          </p>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  // properties
  errorMessage: PropTypes.string,  
  username: PropTypes.string,
  password: PropTypes.string,
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
)(withRouter(LoginPage));