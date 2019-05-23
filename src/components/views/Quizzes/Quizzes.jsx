import React from 'react';
import List from './sub-components/List.jsx';
import Pagination from './sub-components/Pagination.jsx';
import PropTypes from 'prop-types';
import { getQuizzes } from './Quizzes.actions';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class Quizzes extends React.Component{
  constructor(props){
    super(props);

    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount(){
    this.props.getQuizzes(this.props.pageNum);
  }

  handlePageClick(selectedPage){
    this.props.getQuizzes(selectedPage)
  }

  render(){
    let content;

    if(this.props.loading) {
      content = (
        <div className="panel loading">
          <i className="fa fa-spinner fa-spin"></i>
          <div className="loading-text">Loading</div> 
        </div>
      )
    } else if(this.props.quizzes.length === 0) {
      content = (
        <div className="panel">
          <h3>No quizzes are available</h3>
        </div>
      )
    } else {
      content = (
        <div className="panel">
          <h3 className="title">Current Quizzes</h3>
          <List quizzes={this.props.quizzes} />
          <Pagination 
            totalPages={this.props.totalPages}
            pageNum={this.props.pageNum} 
            handlePageClick={this.handlePageClick} />
        </div>
      )
    }

    return (
      <div id="quizzes">
        {content}
      </div>
    );
  }
}

Quizzes.propTypes = {
  // properties
  loading: PropTypes.bool,
  pageNum: PropTypes.number,
  quizzes: PropTypes.array,
  totalPages: PropTypes.number,
  // methods
  getQuizzes: PropTypes.func
}

function mapStateToProps(state){
  return Object.assign({}, state.quizzes);
}

function mapDispatchToProps(dispatch){
  return {
    getQuizzes: (limit, offset) => dispatch(getQuizzes(limit, offset))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Quizzes));