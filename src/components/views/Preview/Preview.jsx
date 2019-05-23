import React from 'react';
import List from './sub-components/List.jsx';
import { getQuiz } from './Preview.actions';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class Preview extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getQuiz(this.props.match.params.id);
  }

  render(){
    let content;

    if(this.props.loading) {
      content = (
        <div className="panel loading">
          <i className="fa fa-spinner fa-spin"></i>
          <div className="loading-text">Loading</div> 
        </div>
      );
    } else {
      content = (
        <div className="panel">
          <h3 className="title">Preview: {this.props.quiz.title}</h3>
          <List questions={this.props.questions} />
        </div>
      );
    }
    return (
      <div id="preview">
        {content}
      </div>
    )
  }
}

function mapStateToProps(state){
  return Object.assign({}, state.preview);
}

function mapDispatchToProps(dispatch){
  return {
    getQuiz: (id) => dispatch(getQuiz(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Preview));