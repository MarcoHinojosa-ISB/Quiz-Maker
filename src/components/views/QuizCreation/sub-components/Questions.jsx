import React from 'react';
import PropTypes from 'prop-types';

class Questions extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const questions = this.props.questions.map((question, i) => {
      return <li className="question" key={i}>{i + 1}. {question}</li>;
    });

    const questionList = questions.length > 0 ? (
      <ul>
        {questions}
      </ul>
    ) : (
      <div>
        <span>No questions have been created</span>
      </div>
    );

    return (
      <div className="questions">
        <h3>List of Questions</h3>
        {questionList}
      </div>
    );
  }
}

Questions.propTypes = {
  questions: PropTypes.array
};

export default Questions;
