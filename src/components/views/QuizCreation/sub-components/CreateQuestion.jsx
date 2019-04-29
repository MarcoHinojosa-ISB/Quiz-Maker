import React from 'react';
import PropTypes from 'prop-types';

const CreateQuestion = ({ question, editQuestion, addQuestion }) => {
  const handleChange = (e) => {
    editQuestion(e.target.value);
  };

  const add = () => {
    if(question.trim().length > 0){
      addQuestion(question);
      editQuestion('');
    }
  };

  return (
    <div className="create-question">
      <h4>Question</h4>
      <textarea
        value={question}
        onChange={handleChange}>
      </textarea>
      <button type="button" onClick={add}>Add</button>
      <button type="submit">Submit</button>
    </div>
  );
};

CreateQuestion.propTypes = {
  question: PropTypes.string,
  addQuestion: PropTypes.func,
  editQuestion: PropTypes.func
};

export default CreateQuestion;
