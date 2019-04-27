import React from 'react';

class Menu extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <ul className="navigation">
        <li>Quizzes</li>
        <li>Create</li>
        <li>Login</li>
      </ul>
    );
  }
}

export { Menu };
