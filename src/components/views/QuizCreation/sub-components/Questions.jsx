import React from 'react';
import PropTypes from 'prop-types';

const Questions = ({ questions, quizCreated }) => {
  const questionsListed = questions.map((question, i) => {
    return <li className="question" key={i}>{i + 1}. {question}</li>;
  });

  const noQuestions = quizCreated ? (
    <span className="quiz-created">Quiz has been successfully created</span>
  ) : (
    <span>No questions have been created</span>
  );

  const listOfQuestions = questionsListed.length > 0 ? (
    <ul className="has-questions">
      {questionsListed}
    </ul>
  ) : (
    <div className="has-no-questions">
      {noQuestions}
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
  questions: PropTypes.array,
  quizCreated: PropTypes.bool
};

export default Questions;
