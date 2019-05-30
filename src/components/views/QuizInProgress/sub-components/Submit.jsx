import React from 'react';
import PropTypes from 'prop-types';

const Submit = ({handleSubmit}) => {
  return (
    <form className="submit" onSubmit={handleSubmit}>
      <button type="submit"><strong>Submit</strong></button>
    </form>
  );
};

Submit.propTypes = {
  handleSubmit: PropTypes.func
};

export default Submit;