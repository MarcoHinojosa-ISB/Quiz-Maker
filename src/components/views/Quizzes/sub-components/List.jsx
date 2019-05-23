import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const List = ({quizzes}) => {
  let listOfQuizzes = quizzes.map((quiz, i) => {
    return (
      <li key={quiz.title+i}>
        <div className="description">
          <span className="quiz-title">{quiz.title}</span>
          <span className="quiz-size">({quiz.numberOfQuestions} questions)</span>
        </div>
        <div className="links">
          <Link to="/">Start</Link>
          <Link to={"/preview/"+quiz.id}>Preview</Link>
        </div>
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