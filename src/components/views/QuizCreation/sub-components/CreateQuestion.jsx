import React from 'react';
import PropTypes from 'prop-types';

class CreateQuestion extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
  }

  handleChange(e){
    this.props.editQuestion(e.target.value);
  }

  addQuestion(){
    if(this.props.question.trim().length > 0){
      this.props.addQuestion(this.props.question);
      this.props.editQuestion('');
    }
  }

  render(){
    return (
      <div className="create-question">
        <h4>Question</h4>
        <textarea
          value={this.props.question}
          onChange={this.handleChange}>
        </textarea>
        <button type="button" onClick={this.addQuestion}>Add</button>
        <button type="submit">Submit</button>
      </div>
    );
  }
}

CreateQuestion.propTypes = {
  question: PropTypes.string,
  addQuestion: PropTypes.func,
  editQuestion: PropTypes.func
};

export default CreateQuestion;
