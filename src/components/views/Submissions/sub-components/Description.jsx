import React from 'react';
import PropTypes from 'prop-types';

const Description = ({title, username}) => {
	return (
		<div className="description">
			<span className="quiz-title">{title}</span>
			{
				username ? 
				<span className="quiz-taker">{username}</span> :
				<span className="quiz-taker guest">guest</span>
			}
		</div>
	);
};

Description.propTypes = {
	title: PropTypes.string,
	username: PropTypes.string
};

export default Description;