import React from 'react';
import { Menu } from './components/menu.jsx';

class Header extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div id="header">
        <h1 className="title">Quiz Maker</h1>
        <Menu />
      </div>
    );
  }
}

export { Header };
