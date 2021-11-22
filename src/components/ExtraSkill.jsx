import React from 'react';

import IconSvg from '../images/list-icon.svg';

const ExtraSkill = ({ skill }) => {
	return (
		<li>
			<img loading='lazy' src={IconSvg} alt='icon' />
			{skill}
		</li>
	);
};

export default ExtraSkill;
