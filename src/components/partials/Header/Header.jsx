import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './sub-components/Menu.jsx';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(){
    if(sessionStorage.getItem('quiz-maker-auth-token')){
      sessionStorage.removeItem('quiz-maker-auth-token');
    }
    this.props.history.push('/login-page');
  }

  render(){
    return (
      <div id="header">
        <h4 className="title"><Link to="/">Quiz Maker</Link></h4>
        <Menu handleLogout={this.handleLogout} />
      </div>
    );
  }
}

export default Header;
