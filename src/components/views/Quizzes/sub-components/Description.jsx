import React from 'react';

const Description = ({title, length}) => {
	return (
		<div className="description">
			<span className="quiz-title">{title}</span>
			<span className="quiz-size">({length} questions)</span>
		</div>
	)
}

export default Description;