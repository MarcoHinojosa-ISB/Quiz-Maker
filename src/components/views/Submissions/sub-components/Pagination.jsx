import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({getSubmissions, pageNum, totalPages}) => {
  return (
    <div className='pagination'>
      <button disabled={pageNum === 1} onClick={getSubmissions.bind(this, pageNum-1)}>&laquo;</button>
      {pageNum}
      <button disabled={pageNum === totalPages} onClick={getSubmissions.bind(this, pageNum+1)}>&raquo;</button>
    </div>
  );
};

Pagination.propTypes = {
  getSubmissions: PropTypes.func,
  pageNum: PropTypes.number,
  totalPages: PropTypes.number
};

export default Pagination;