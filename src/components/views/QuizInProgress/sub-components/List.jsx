import React from 'react';
import PropTypes from 'prop-types';

const List = ({questions, updateAnswer}) => {
  const handleChange = (index, e) => {
    updateAnswer(index, e.target.value);
  };

  let listOfQuestions = questions.map((question, i) => {
    return (
      <li key={question.questionText+i}>
        <h3 className="question">{(i+1)+'. '+question.questionText}</h3>
        <textarea className="answer" onChange={handleChange.bind(this,i)}></textarea>
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
  questions: PropTypes.array,
  updateAnswer: PropTypes.func
};

export default List;