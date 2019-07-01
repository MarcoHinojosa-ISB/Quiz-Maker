import React from 'react';
import List from './sub-components/List.jsx';
import Loading from '../../partials/Loading/Loading.jsx';
import Pagination from './sub-components/Pagination.jsx';
import SubmissionLabels from './sub-components/SubmissionLabels.jsx';
import PropTypes from 'prop-types';
import { clear, getSubmissions } from './Submissions.actions';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class Submissions extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getSubmissions(this.props.pageNum);
  }

  componentWillUnmount(){
    this.props.clear();
  }

  render(){
    let content;

    if(this.props.loading) {
      content = <Loading />;
    } else if(this.props.submissions.length === 0) {
      content = <h3>No submissions available</h3>;
    } else {
      content = (
        <div>
          <h3 className="title">Submissions</h3>
          <SubmissionLabels />
          <List submissions={this.props.submissions} />
          <Pagination 
            totalPages={this.props.totalPages}
            pageNum={this.props.pageNum} 
            getSubmissions={this.props.getSubmissions} />
        </div>
      );
    }

    return (
      <div id="submissions">
        <div className="panel">
          {content}
        </div>
      </div>
    );
  }
}

Submissions.propTypes = {
  // properties
  loading: PropTypes.bool,
  pageNum: PropTypes.number,
  submissions: PropTypes.array,
  totalPages: PropTypes.number,
  // methods
  clear: PropTypes.func,
  getSubmissions: PropTypes.func
};

function mapStateToProps(state){
  return Object.assign({}, state.submissions);
}

function mapDispatchToProps(dispatch){
  return {
    clear: () => dispatch(clear()),
    getSubmissions: (pageNum) => dispatch(getSubmissions(pageNum))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Submissions));