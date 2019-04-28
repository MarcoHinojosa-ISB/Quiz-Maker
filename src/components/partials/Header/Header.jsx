import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './sub-components/Menu.jsx';

class Header extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div id="header">
        <h1 className="title"><Link to="/">Quiz Maker</Link></h1>
        <Menu />
      </div>
    );
  }
}

export default Header;
