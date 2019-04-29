import React from 'react';
import PropTypes from 'prop-types';

const CreateTitle = ({ title, editTitle }) => {
  const handleChange = (e) => {
    editTitle(e.target.value);
  };

  return (
    <div className="create-title">
      <h3>Title</h3>
      <input type="text" value={title} onChange={handleChange}/>
    </div>
  );
};

CreateTitle.propTypes = {
  title: PropTypes.string,
  editTitle: PropTypes.func
};

export default CreateTitle;
