import React from 'react';

const Language = ({ language }) => {
	return (
		<div className='language__content'>
			<div className='item'>
				<p>{language.name}</p>
				<span>{language.percent}</span>
			</div>
			<div className='progress'>
				<div className='progress__bar'>
					<div
						width={language.percent}
						style={{ width: language.percent }}
						className='bar'
					></div>
				</div>
			</div>
		</div>
	);
};

export default Language;
