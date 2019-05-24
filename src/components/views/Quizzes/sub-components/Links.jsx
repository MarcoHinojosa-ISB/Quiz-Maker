import React from 'react';
import { Link } from 'react-router-dom';

const Links = ({quizId, urlPath}) => {
  return (
    <div className="links">
      <Link to={urlPath+"/quiz-in-progress/"+quizId}>Start</Link>
      <Link to={urlPath+"/preview/"+quizId}>Preview</Link>
    </div>
  )
}

export default Links;