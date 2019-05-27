import React from 'react';
import PropTypes from 'prop-types';

const List = ({questions}) => {
  let listOfQuestions = questions.map((question, i) => {
    return (
      <li key={question.questionText+i}>
        <h3 className="question">{(i+1)+'. '+question.questionText}</h3>
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
  questions: PropTypes.array
};

export default List;