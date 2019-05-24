import React from 'react';
import { Link } from 'react-router-dom';

const Links = ({quizId}) => {
  return (
    <div className="links">
      <Link to={"/quiz-in-progress/"+quizId}>Start</Link>
      <Link to={"/preview/"+quizId}>Preview</Link>
    </div>
  )
}

export default Links;