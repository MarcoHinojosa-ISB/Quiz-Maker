import React from 'react';
import List from './sub-components/List.jsx';
import Loading from '../../partials/Loading/Loading.jsx';
import Pagination from './sub-components/Pagination.jsx';
import PropTypes from 'prop-types';
import { clear, getQuizzes } from './Quizzes.actions';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import SubMenu from './sub-components/SubMenu.jsx';

class Quizzes extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getQuizzes(this.props.pageNum);
  }

  componentWillUnmount(){
    this.props.clear();
  }

  render(){
    let content;

    if(this.props.loading) {
      content = <Loading />;
    } else if(this.props.quizzes.length === 0) {
      content = <h3>No quizzes available</h3>;
    } else {
      content = (
        <div>
          <h3 className="title">Quizzes</h3>
          <SubMenu />
          <List quizzes={this.props.quizzes} />
          <Pagination 
            totalPages={this.props.totalPages}
            pageNum={this.props.pageNum} 
            getQuizzes={this.props.getQuizzes} />
        </div>
      );
    }

    return (
      <div id="quizzes">
        <div className="panel">
          {content}
        </div>
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
  clear: PropTypes.func,
  getQuizzes: PropTypes.func
};

function mapStateToProps(state){
  return Object.assign({}, state.quizzes);
}

function mapDispatchToProps(dispatch){
  return {
    clear: () => dispatch(clear()),
    getQuizzes: (pageNum) => dispatch(getQuizzes(pageNum))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Quizzes));