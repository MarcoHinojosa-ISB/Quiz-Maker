import React from 'react';
import PropTypes from 'prop-types';

const Questions = ({questions}) => {
  const questionsListed = questions.map((question, i) => {
    return <li className="question" key={i}>{i + 1}. {question}</li>;
  });

  const listOfQuestions = questionsListed.length > 0 ? (
    <ul>
      {questionsListed}
    </ul>
  ) : (
    <div>
      <span>No questions have been created</span>
    </div>
  );

  return (
    <div className="questions">
      <h3>List of Questions</h3>
      {listOfQuestions}
    </div>
  );
};

Questions.propTypes = {
  questions: PropTypes.array
};

export default Questions;
