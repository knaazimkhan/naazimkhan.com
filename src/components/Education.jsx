import React from 'react';

const Education = ({ education, isLast }) => {
	return (
		<>
			<div className='education__body__itme'>
				<div className='left'>
					<h4>{education.school}</h4>
					<p>
						{education.location}{' '}
						<span className='bg-primary'>{education.year}</span>
					</p>
				</div>
				<div className='right'>
					<h4>{education.degree}</h4>
					{/* <p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Amet dapibus nibh ut faucibus nunc, egestas id amet
						porttitor. Pulvinar quisque sed amet, nulla nunc.
						Eleifend sodales posuere fusce tempus etiam et
						pellentesque. Molestie risus enim neque eget dui.
					</p> */}
				</div>
			</div>
			{!isLast && <div className='divider'></div>}
		</>
	);
};

export default Education;
