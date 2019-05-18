import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const List = ({quizzes}) => {
  let listElements = quizzes.map((quiz, i) => {
    return (
      <li key={quiz.title+i}>
        <Link to="/" >{quiz.title}</Link><span>({quiz.numberOfQuestions} questions)</span>
      </li>
    )
  })

  return (
    <ul className="list">
      {listElements}
    </ul>
  );
}

List.propTypes = {
  quizzes: PropTypes.array
};

export default List;