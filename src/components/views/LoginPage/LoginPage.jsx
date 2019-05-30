import React from 'react';
import LoginForm from './sub-components/LoginForm.jsx';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class LoginPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div id="login-page">
        <div className="panel">
          <h1>Login</h1>
          <LoginForm />
          <hr />
          <p className="no-account">No account? <Link to="/signup-page">Sign up</Link></p>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginPage);