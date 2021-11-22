import React from 'react';

const Experience = ({ experience, isLast }) => {
	return (
		<>
			<div className='education__body__itme'>
				<div className='left'>
					<h4>{experience.profile}</h4>
					<p className='exp'>
						{experience.location}
						<span className='bg-primary'>{experience.year}</span>
					</p>
				</div>
				<div className='right'>
					<h4>{experience.company}</h4>
					<ul>
						{experience.points.map((point, index) => (
							<li>{point}</li>
						))}
					</ul>
				</div>
			</div>
			{!isLast && <div className='divider'></div>}
		</>
	);
};

export default Experience;
