import React from 'react';
import './main.scss';

import NaazimKhan from '../../images/naazimkhan.jpg';

import data from '../../data.json';
import { Education, Experience } from '../../components';

const Main = () => {
	return (
		<div className='main__content'>
			<div className='warpper'>
				<div className='main__content__banner'>
					<div className='banner__title'>
						<h1>
							Hi. <br />
							I’m {data.name}
							<br />
							<span className='primary'>{'Full–Stack '}</span>
							{'Developer '} <br />{' '}
							<span style={{ fontWeight: 'normal' }}>
								{'at '}
							</span>
							<a
								className='company'
								href='https://entrustglobalgroup.com/'
								target='_blank'
								rel='noreferrer'
							>
								{data.company}
							</a>
						</h1>
						<p>{data.bio}</p>
						<div className='banner__btn'>
							<a className='btn-primary' href='#' target='_self'>
								HIRE ME
							</a>
						</div>
					</div>
					<div className='banner__image'>
						<img src={NaazimKhan} alt='naazimkhan' />
					</div>
				</div>
				<div className='education'>
					<div className='education__title'>
						<h1>Education</h1>
						{/* <p>
							Amet minim mollit non deserunt ullamco est sit
							aliqua dolor do amet sint. Velit officia consequat
							duis enim velit mollit. lorem ipsum
						</p> */}
					</div>
					<div className='education__body'>
						{data &&
							data.educations.map((education, index) => (
								<Education
									education={education}
									key={index}
									isLast={
										data.educations.length - 1 === index
									}
								/>
							))}
					</div>
				</div>
				<div className='education'>
					<div className='education__title'>
						<h1>Experience</h1>
						{/* <p>
							Amet minim mollit non deserunt ullamco est sit
							aliqua dolor do amet sint. Velit officia consequat
							duis enim velit mollit. lorem ipsum
						</p> */}
					</div>
					<div className='education__body'>
						{data &&
							data.experiences.map((experience, index) => (
								<Experience
									experience={experience}
									key={index}
									isLast={
										data.experiences.length - 1 === index
									}
								/>
							))}
					</div>
				</div>

				<div className='footer'>
					<p>
						<svg
							stroke='currentColor'
							fill='currentColor'
							stroke-width='0'
							viewBox='0 0 512 512'
							height='1em'
							width='1em'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 448c-110.532 0-200-89.451-200-200 0-110.531 89.451-200 200-200 110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200zm107.351-101.064c-9.614 9.712-45.53 41.396-104.065 41.396-82.43 0-140.484-61.425-140.484-141.567 0-79.152 60.275-139.401 139.762-139.401 55.531 0 88.738 26.62 97.593 34.779a11.965 11.965 0 0 1 1.936 15.322l-18.155 28.113c-3.841 5.95-11.966 7.282-17.499 2.921-8.595-6.776-31.814-22.538-61.708-22.538-48.303 0-77.916 35.33-77.916 80.082 0 41.589 26.888 83.692 78.277 83.692 32.657 0 56.843-19.039 65.726-27.225 5.27-4.857 13.596-4.039 17.82 1.738l19.865 27.17a11.947 11.947 0 0 1-1.152 15.518z'></path>
						</svg>{' '}
						2021 All Rights Reserved
					</p>
				</div>
			</div>
		</div>
	);
};

export default Main;
