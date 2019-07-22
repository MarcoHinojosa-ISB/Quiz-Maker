import React from 'react';
import List from './sub-components/List.jsx';
import Loading from '../../partials/Loading/Loading.jsx';
import PropTypes from 'prop-types';
import Title from './sub-components/Title.jsx';
import { clear, getSubmission } from './Submission.actions';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class Submission extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getSubmission(this.props.match.params.id);
  }

  componentWillUnmount(){
    this.props.clear();
  }

  render(){
    let content;

    if(this.props.loading) {
      content = <Loading />;
    } else {
      content = (
        <div>
          <Title 
            title={this.props.quiz.title} />
          <List 
            questions={this.props.questions} 
            answers={this.props.answers} />
        </div>
      );
    }

    return (
      <div id="submission">
        <div className="panel">
          {content}
        </div>
      </div>
    );
  }
}

Submission.propTypes = {
  //properties
  answers: PropTypes.array,
  loading: PropTypes.bool,
  match: PropTypes.object,
  quiz: PropTypes.object,
  questions: PropTypes.array,
  //methods
  clear: PropTypes.func,
  getSubmission: PropTypes.func
};

function mapStateToProps(state){
  return Object.assign({}, state.submission); 
}

function mapDispatchToProps(dispatch){
  return {
    clear: () => dispatch(clear()),
    getSubmission: (id) => dispatch(getSubmission(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Submission));