import React from 'react';
import jwt from 'jsonwebtoken';
import jwtsecret from '../../../../../jwtsecret';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    try{
      let userdata = jwt.verify(sessionStorage.getItem('quiz-maker-auth-token'), jwtsecret.secret);
      
      return (
        <ul className="navigation">
          <li>{userdata.username}</li>
          <li className="clickable"><Link to="/quizzes">Quizzes</Link></li>
          <li className="clickable" onClick={this.props.handleLogout}>Logout</li>
        </ul>
      );
    } catch(error) {
      return (
        <ul className="navigation">
          <li className="clickable"><Link to="/quizzes">Quizzes</Link></li>
          <li className="clickable"><Link to="/login-page">Login</Link></li>
        </ul>
      );
    }
  }
}

export default Menu;
