import React from 'react';
import PropTypes from 'prop-types';

const Title = ({title}) => {
  return <h3 className="title">{title}</h3>;
};

Title.propTypes = {
  title: PropTypes.string
};

export default Title;