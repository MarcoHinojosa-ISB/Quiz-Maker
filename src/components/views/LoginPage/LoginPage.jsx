import React from 'react';
import Axios from 'axios';
import LoginForm from './sub-components/LoginForm.jsx';
import jwt from 'jsonwebtoken';
import jwtsecret from '../../../../jwtsecret';
import { Link, withRouter } from 'react-router-dom';

class LoginPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {};

    this.login = this.login.bind(this);
  }

  static getDerivedStateFromProps(props, state){
    try{
      let userdata = jwt.verify(sessionStorage.getItem('quiz-maker-auth-token'), jwtsecret.secret);
      
      if(userdata){
        props.history.push('/');
      }
    } catch(error) {
      return null;
    }
  }

  login(userInfo){
    Axios.post('/api/login', userInfo)
    .then((result) => {
      sessionStorage.setItem('quiz-maker-auth-token', result.data);
      this.props.history.push('/');
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render(){
    return (
      <div id="login-page">
        <div className="panel">
          <h1>Login</h1>
          <LoginForm {...this.props} login={this.login} />
          <hr />
          <p className="no-account">No account? <Link to="/signup-page">Sign up</Link></p>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginPage);