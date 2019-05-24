import React from 'react';
import List from './sub-components/List.jsx';
import Loading from '../../partials/Loading/Loading.jsx';
import Submit from './sub-components/Submit.jsx';
import Title from './sub-components/Title.jsx';
import { getQuiz } from './QuizInProgress.actions';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class QuizInProgress extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getQuiz(this.props.match.params.id);
  }

  render(){
    let content;

    if(this.props.loading) {
      content = <Loading />;
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

function mapStateToProps(state) {
  return Object.assign({}, state.quizInProgress)
}

function mapDispatchToProps(dispatch) {
  return {
    getQuiz: (id) => dispatch(getQuiz(id))
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(withRouter(QuizInProgress));