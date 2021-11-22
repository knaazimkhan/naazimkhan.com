import React from 'react';

const PersonalInfo = ({ info }) => {
	const className = info.label === 'freelancer' ? 'green' : '';
	return (
		<li>
			<p>{info.label}:</p>
			<span className={className}>{info.value}</span>
		</li>
	);
};

export default PersonalInfo;
