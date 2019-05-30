import React from 'react';
import SignupForm from './sub-components/SignupForm.jsx';
import { withRouter } from 'react-router-dom';

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
        </div>
      </div>
    );
  }
}

export default withRouter(SignupPage);