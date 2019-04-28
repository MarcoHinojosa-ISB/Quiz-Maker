import React from 'react';
import CreateTitle from './sub-components/CreateTitle.jsx';
import CreateQuestion from './sub-components/CreateQuestion.jsx';
import PropTypes from 'prop-types';
import Questions from './sub-components/Questions.jsx';
import { editTitle, editQuestion, addQuestion, removeQuestion } from './QuizCreation.actions.js';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class QuizCreation extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div id="quiz-creation">
        <form>
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
  addQuestion: PropTypes.func
};

function mapStateToProps(state){
  return {
    title: state.quizCreation.title,
    question: state.quizCreation.question,
    questions: state.quizCreation.questions
  };
}

function mapDispatchToProps(dispatch){
  return {
    editTitle: (title) => dispatch(editTitle(title)),
    editQuestion: (question) => dispatch(editQuestion(question)),
    addQuestion: (question) => dispatch(addQuestion(question)),
    removeQuestion: (index) => dispatch(removeQuestion(index))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(QuizCreation));
