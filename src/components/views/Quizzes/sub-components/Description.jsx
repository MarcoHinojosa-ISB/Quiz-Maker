import React from 'react';
import PropTypes from 'prop-types';

const Description = ({title, length}) => {
	return (
		<div className="description">
			<span className="quiz-title" title={title}>{title}</span>
			<span className="quiz-size">{length}</span>
		</div>
	);
};

Description.propTypes = {
	title: PropTypes.string,
	length: PropTypes.number
};

export default Description;