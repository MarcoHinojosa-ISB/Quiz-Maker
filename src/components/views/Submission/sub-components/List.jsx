import React from 'react';
import PropTypes from 'prop-types';

const List = ({questions, answers}) => {
  let listOfQuestions = questions.map((question, i) => {
    return (
      <li key={question.questionText+i}>
        <h3 className="question">{(i+1)+'. '+question.questionText}</h3>
        {
          answers[i].answerText ?
          <h4 className="answer">{answers[i].answerText}</h4> :
          <h4 className="answer empty">No Answer</h4>
        }
      </li>
    );
  });

  return (
    <ul className="list">
      {listOfQuestions}
    </ul>
  );
};

List.propTypes = {
  answers: PropTypes.array,
  questions: PropTypes.array
};

export default List;