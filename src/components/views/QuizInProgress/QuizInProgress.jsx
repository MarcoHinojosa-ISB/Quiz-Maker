import React from 'react';
import List from './sub-components/List.jsx';
import Complete from './sub-components/Complete.jsx';
import Loading from '../../partials/Loading/Loading.jsx';
import PropTypes from 'prop-types';
import Submit from './sub-components/Submit.jsx';
import Title from './sub-components/Title.jsx';
import { clear, getQuiz, submitAnswers, updateAnswer } from './QuizInProgress.actions';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class QuizInProgress extends React.Component{
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.loadingTimer = setTimeout(() => { 
      this.props.getQuiz(this.props.match.params.id);
    }, 1000);
  }

  componentWillUnmount(){
    if(this.loadingTimer){
      clearTimeout(this.loadingTimer);
      delete this.loadingTimer;
    }
    this.props.clear();
  }

  handleSubmit(e){
    e.preventDefault();

    let data = {
      questions: this.props.questions,
      answers: this.props.answers,
      quiz: this.props.quiz
    };

    this.props.submitAnswers(data);
  }

  render(){
    let content;

    if(this.props.loading) {
      content = <Loading customMessage="Preparing Quiz" />;
    } else if(this.props.complete) { 
      content = <Complete />;
    } else {
      content = (
        <div>
          <Title title={this.props.quiz.title} />
          <List questions={this.props.questions} updateAnswer={this.props.updateAnswer} />
          <Submit handleSubmit={this.handleSubmit} />
        </div>
      );
    }

    return (
      <div id="quiz-in-progress">
        <div className="panel">
          {content}
        </div>
      </div>
    );
  }
}

QuizInProgress.propTypes = {
  //properties
  answers: PropTypes.array,
  complete: PropTypes.bool,
  loading: PropTypes.bool,
  match: PropTypes.object,
  questions: PropTypes.array,
  quiz: PropTypes.object,
  //methods
  clear: PropTypes.func,
  getQuiz: PropTypes.func,
  submitAnswers: PropTypes.func,
  updateAnswer: PropTypes.func
};

function mapStateToProps(state) {
  return Object.assign({}, state.quizInProgress);
}

function mapDispatchToProps(dispatch) {
  return {
    clear: () => dispatch(clear()),
    getQuiz: (id) => dispatch(getQuiz(id)),
    submitAnswers: (data) => dispatch(submitAnswers(data)),
    updateAnswer: (index, input) => dispatch(updateAnswer(index, input))
  };
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(withRouter(QuizInProgress));