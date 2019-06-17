import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Links = ({quizId}) => {
  return (
    <div className="links">
      <Link to={'quizzes/quiz-in-progress/'+quizId}>Start</Link>
      <Link to={'quizzes/preview/'+quizId}>Preview</Link>
    </div>
  );
};

Links.propTypes = {
  quizId: PropTypes.number
};

export default Links;