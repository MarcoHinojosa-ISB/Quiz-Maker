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
        <form onSubmit={this.handleSubmit}>
          <CreateTitle
            title={this.props.title}
            editTitle={this.props.editTitle} />
          <Questions
            questions={this.props.questions} />
          <CreateQuestion
            question={this.props.question}
            editQuestion={this.props.editQuestion}
            addQuestion={this.props.addQuestion} />
        </form>
      </div>
    );
  }
}

QuizCreation.propTypes = {
  title: PropTypes.string,
  question: PropTypes.string,
  questions: PropTypes.array,
  editTitle: PropTypes.func,
  editQuestion: PropTypes.func,
  addQuestion: PropTypes.func,
  createQuiz: PropTypes.func,
  clearForm: PropTypes.func
};

function mapStateToProps(state){
  return Object.assign({}, state.quizCreation);
}

function mapDispatchToProps(dispatch){
  return {
    editTitle: (title) => dispatch(editTitle(title)),
    editQuestion: (question) => dispatch(editQuestion(question)),
    addQuestion: (question) => dispatch(addQuestion(question)),
    removeQuestion: (index) => dispatch(removeQuestion(index)),
    createQuiz: (quiz) => dispatch(createQuiz(quiz)),
    clearForm: () => dispatch(clearForm())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(QuizCreation));
