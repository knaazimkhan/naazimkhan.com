import React from 'react';

import { FaIcon } from './FaIcon';

const Skill = ({ skill }) => {
	return (
		<div className='language__content'>
			<div className='item'>
				<p>
					<FaIcon icon={skill.icon} />
					{skill.name}
				</p>
				<span>{skill.percent}</span>
			</div>
			<div className='progress'>
				<div className='progress__bar'>
					<div
						width={skill.percent}
						style={{ width: skill.percent }}
						className='bar'
					></div>
				</div>
			</div>
		</div>
	);
};

export default Skill;
