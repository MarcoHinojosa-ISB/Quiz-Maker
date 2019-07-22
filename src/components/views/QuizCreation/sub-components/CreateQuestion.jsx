import React from 'react';
import PropTypes from 'prop-types';

const CreateQuestion = ({ disabled, newQuestion, editQuestion, addQuestion }) => {
  const handleChange = (e) => {
    editQuestion(e.target.value);
  };

  return (
    <div className="create-question">
      <h4>Question</h4>
      <textarea value={newQuestion} onChange={handleChange}></textarea>
      <button type="button" onClick={addQuestion}>Add</button>
      <button type="submit" className={disabled ? 'disabled' : ''} >Submit</button>
    </div>
  );
};

CreateQuestion.propTypes = {
  disabled: PropTypes.bool,
  newQuestion: PropTypes.string,
  addQuestion: PropTypes.func,
  editQuestion: PropTypes.func
};

export default CreateQuestion;
