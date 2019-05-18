import React from 'react';
import List from './sub-components/List.jsx';
import Pagination from './sub-components/Pagination.jsx';
import PropTypes from 'prop-types';
import { getQuizzes, updateList } from './Quizzes.actions';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class Quizzes extends React.Component{
  constructor(props){
    super(props);

    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount(){
    this.props.getQuizzes(this.props.quizzesPerPage, this.props.pageNum-1);
  }

  handlePageClick(selectedPage){
    this.props.getQuizzes(this.props.quizzesPerPage, (selectedPage-1))
  }

  render(){
    console.log(this.props)
    return (
      <div id="quizzes">
        <div className="panel">
          <List quizzes={this.props.quizzes} />
          <Pagination 
            totalPages={this.props.totalPages}
            pageNum={this.props.pageNum} 
            handlePageClick={this.handlePageClick} />
        </div>
      </div>
    );
  }
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