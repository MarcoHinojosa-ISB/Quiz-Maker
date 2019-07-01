import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({getSubmissions, pageNum, totalPages}) => {
  let pages = [];

  for(let i=1; i<=totalPages; i++){
    pages.push(
      <li key={'submission-pagination-page-'+i} className={i === pageNum ? 'current-page' : ''} onClick={getSubmissions.bind(this, i)}>
        {i}
      </li>
    );
  }
  
  return (
    <ul className='pagination'>
      {pages}
    </ul>
  );
};

Pagination.propTypes = {
  getSubmissions: PropTypes.func,
  pageNum: PropTypes.number,
  totalPages: PropTypes.number
};

export default Pagination;