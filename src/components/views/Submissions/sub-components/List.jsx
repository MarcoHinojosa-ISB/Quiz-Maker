import React from 'react';
import Description from './Description.jsx'; 
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const List = ({submissions}) => {
  let listOfSubmissions = submissions.map((submission, i) => {
    return (
      <li key={submission.title+i}>
        <Description title={submission.title} username={submission.username} />
        <Link to="/">View</Link>
      </li>
    );
  });
  
  return (
    <ul className="list">
      {listOfSubmissions}
    </ul>
  );
};

List.propTypes = {
  submissions: PropTypes.array
};

export default List;