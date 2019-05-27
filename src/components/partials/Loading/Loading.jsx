import React from 'react';

const Loading = ({customMessage}) => {
  return (
    <div className="loading">
      <i className="fa fa-spinner fa-spin"></i>
      <div className="loading-text">{customMessage ? customMessage : "Loading"}</div> 
    </div>
  );
}

export default Loading;