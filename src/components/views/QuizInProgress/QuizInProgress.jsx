import React from 'react';
import List from './sub-components/List.jsx';
import Loading from '../../partials/Loading/Loading.jsx';
import PropTypes from 'prop-types';
import Submit from './sub-components/Submit.jsx';
import Title from './sub-components/Title.jsx';
import { clear, getQuiz } from './QuizInProgress.actions';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class QuizInProgress extends React.Component{
  constructor(props){
    super(props);
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

  render(){
    let content;

    if(this.props.loading) {
      content = <Loading customMessage="Preparing Quiz" />;
    } else {
      content = (
        <div>
          <Title title={this.props.quiz.title} />
          <List questions={this.props.questions} />
          <Submit />
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
  loading: PropTypes.bool,
  match: PropTypes.object,
  questions: PropTypes.object,
  quiz: PropTypes.object,
  //methods
  clear: PropTypes.func,
  getQuiz: PropTypes.func
};

function mapStateToProps(state) {
  return Object.assign({}, state.quizInProgress);
}

function mapDispatchToProps(dispatch) {
  return {
    clear: () => dispatch(clear()),
    getQuiz: (id) => dispatch(getQuiz(id))
  };
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(withRouter(QuizInProgress));