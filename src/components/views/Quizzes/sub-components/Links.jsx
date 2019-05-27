import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Links = ({quizId, urlPath}) => {
  return (
    <div className="links">
      <Link to={urlPath+'/quiz-in-progress/'+quizId}>Start</Link>
      <Link to={urlPath+'/preview/'+quizId}>Preview</Link>
    </div>
  );
};

Links.propTypes = {
  quizId: PropTypes.number,
  urlPath: PropTypes.string
};

export default Links;