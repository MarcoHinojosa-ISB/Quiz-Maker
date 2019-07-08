import React from 'react';
import { Link } from 'react-router-dom';

const SubMenu = () => {
  return (
    <div className="sub-menu">
      <Link to="/quizzes">Quizzes</Link>
      <Link to="/quiz-creation">Create Quiz</Link>
    </div>
  );
};

export default SubMenu;