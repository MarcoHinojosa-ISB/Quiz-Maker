import React from 'react';
import Description from './Description.jsx'; 
import Links from './Links.jsx';
import PropTypes from 'prop-types';

const List = ({quizzes}) => {
  let listOfQuizzes = quizzes.map((quiz, i) => {
    return (
      <li key={quiz.title+i}>
        <Description 
          title={quiz.title} 
          length={parseInt(quiz.questionCount)} />
        <Links 
          quizId={quiz.id} />
      </li>
    );
  });
  
  return (
    <ul className="list">
      {listOfQuizzes}
    </ul>
  );
};

List.propTypes = {
  quizzes: PropTypes.array
};

export default List;