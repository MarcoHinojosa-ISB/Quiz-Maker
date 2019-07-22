import React from 'react';
import List from './sub-components/List.jsx';
import Loading from '../../partials/Loading/Loading.jsx';
import PropTypes from 'prop-types';
import Title from './sub-components/Title.jsx';
import { clear, getQuiz } from './Preview.actions';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class Preview extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getQuiz(this.props.match.params.id);
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
            questions={this.props.questions} />
        </div>
      );
    }
    return (
      <div id="preview">
        <div className="panel">
          {content}
        </div>
      </div>
    );
  }
}

Preview.propTypes = {
  //properties
  loading: PropTypes.bool,
  match: PropTypes.object,
  quiz: PropTypes.object,
  questions: PropTypes.array,
  //methods
  clear: PropTypes.func,
  getQuiz: PropTypes.func
};

function mapStateToProps(state){
  return Object.assign({}, state.preview);
}

function mapDispatchToProps(dispatch){
  return {
    clear: () => dispatch(clear()),
    getQuiz: (id) => dispatch(getQuiz(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Preview));