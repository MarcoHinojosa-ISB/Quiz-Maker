import React from 'react';
import { Menu } from './components/menu/index.jsx';

class Header extends React.Component{
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
