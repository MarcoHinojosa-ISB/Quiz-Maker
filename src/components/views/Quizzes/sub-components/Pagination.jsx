import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({handlePageClick, pageNum, totalPages}) => {
  let pages = [];

  for(let i=1; i<=totalPages; i++){
    console.log(i === pageNum)
    pages.push(
      <li key={"pagination-page-"+i} className={i === pageNum ? "current-page" : ""} onClick={handlePageClick.bind(this, i)}>
        {i}
      </li>
    )
  }
  
  return (
    <ul className="pagination">
      {pages}
    </ul>
  )
};

export default Pagination;