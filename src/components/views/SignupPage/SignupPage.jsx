import React from 'react';
import SignupForm from './sub-components/SignupForm.jsx';
import { Link, withRouter } from 'react-router-dom';

class SignupPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div id="signup-page">
        <div className="panel">
          <h1>Sign Up</h1>
          <SignupForm />
          <hr />
          <p className="has-account">No account? <Link to="/login-page">Log in</Link></p>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupPage);