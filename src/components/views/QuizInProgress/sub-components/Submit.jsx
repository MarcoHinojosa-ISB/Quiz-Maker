import React from 'react';

const Submit = ({handleSubmit}) => {
  return (
    <form className="submit" onSubmit={handleSubmit}>
      <button type="submit"><strong>Submit</strong></button>
    </form>
  );
};

export default Submit;