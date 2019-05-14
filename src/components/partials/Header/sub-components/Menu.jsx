import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <ul className="navigation">
        <li><Link to="/quizzes">Quizzes</Link></li>
        <li><Link to="/quiz-creation">Create</Link></li>
        <li><Link to="/">Login</Link></li>
      </ul>
    );
  }
}

export default Menu;
