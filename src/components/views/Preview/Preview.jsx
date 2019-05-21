import React from 'react';
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
    console.log(this.props.quiz);
    return (
      <div id="preview">
        Quiz id: {this.props.match.params.id}
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