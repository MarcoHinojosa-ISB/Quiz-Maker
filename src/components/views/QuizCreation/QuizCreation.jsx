import React from 'react';
import CreateTitle from './sub-components/CreateTitle.jsx';
import CreateQuestion from './sub-components/CreateQuestion.jsx';
import PropTypes from 'prop-types';
import Questions from './sub-components/Questions.jsx';
import { editTitle, editQuestion, addQuestion, removeQuestion, createQuiz, clearForm } from './QuizCreation.actions.js';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class QuizCreation extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();

    if(this.props.questions.length > 0 && this.props.title.trim().length > 0){
      this.props.createQuiz({
        title: this.props.title,
        questions: this.props.questions
      });
    }
  }

  componentWillUnmount(){
    this.props.clearForm();
  }

  render(){
    return (
      <div id="quiz-creation">
        <form className="panel" onSubmit={this.handleSubmit}>
          <CreateTitle
            title={this.props.title}
            editTitle={this.props.editTitle} />
          <Questions
            questions={this.props.questions}
            quizCreated={this.props.quizCreated} />
          <CreateQuestion
            disabled={this.props.disabled}
            newQuestion={this.props.newQuestion}
            editQuestion={this.props.editQuestion}
            addQuestion={this.props.addQuestion} />
        </form>
      </div>
    );
  }
}

QuizCreation.propTypes = {
  // properties
  disabled: PropTypes.bool,
  newQuestion: PropTypes.string,
  questions: PropTypes.array,
  quizCreated: PropTypes.bool,
  title: PropTypes.string,
  // methods
  addQuestion: PropTypes.func,
  clearForm: PropTypes.func,
  createQuiz: PropTypes.func,
  editQuestion: PropTypes.func,
  editTitle: PropTypes.func,
};

function mapStateToProps(state){
  return Object.assign({}, state.quizCreation);
}

function mapDispatchToProps(dispatch){
  return {
    addQuestion: () => dispatch(addQuestion()),
    clearForm: () => dispatch(clearForm()),
    createQuiz: (quiz) => dispatch(createQuiz(quiz)),
    editQuestion: (text) => dispatch(editQuestion(text)),
    editTitle: (title) => dispatch(editTitle(title)),
    removeQuestion: (index) => dispatch(removeQuestion(index)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(QuizCreation));
