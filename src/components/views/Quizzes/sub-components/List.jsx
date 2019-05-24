import React from 'react';
import Description from './Description.jsx'; 
import Links from './Links.jsx';
import PropTypes from 'prop-types';

const List = ({quizzes, urlPath}) => {
  let listOfQuizzes = quizzes.map((quiz, i) => {
    return (
      <li key={quiz.title+i}>
        <Description title={quiz.title} length={quiz.numberOfQuestions} />
        <Links quizId={quiz.id} urlPath={urlPath} />
      </li>
    )
  })
  
  return (
    <ul className="list">
      {listOfQuizzes}
    </ul>
  );
}

List.propTypes = {
  quizzes: PropTypes.array
};

export default List;