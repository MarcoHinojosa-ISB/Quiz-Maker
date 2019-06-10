import React from 'react';
import Axios from 'axios';
import SignupForm from './sub-components/SignupForm.jsx';
import jwt from 'jsonwebtoken';
import jwtsecret from '../../../../jwtsecret';
import { Link, withRouter } from 'react-router-dom';

class SignupPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {};

    this.signUp = this.signUp.bind(this);
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

  signUp(userInfo){
    Axios.post('/api/signup', userInfo)
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
      <div id="signup-page">
        <div className="panel">
          <h1>Sign Up</h1>
          <SignupForm signUp={this.signUp} />
          <hr />
          <p className="has-account">No account? <Link to="/login-page">Log in</Link></p>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupPage);