import React from 'react';
import './leftsidebar.scss';

import NaazimKhan from '../../images/naazimkhan.jpg';
import IconSvg from '../../images/list-icon.svg';

const LeftSidebar = () => {
	return (
		<div className='left__sidebar'>
			<div className='left__sidebar__header'>
				<div className='profile__image'>
					<img className='' src={NaazimKhan} alt='naazimkhan' />
				</div>
				<div className='profile__title'>
					<h4>Naazim Khan</h4>
					<h5>Full Stack Developer</h5>
				</div>
				<div className='profile__social'>
					<div className='social-link-list'>
						<a
							href='https://www.facebook.com/'
							target='_blank'
							rel='noreferrer'
						>
							<svg
								stroke='currentColor'
								fill='currentColor'
								strokeWidth='0'
								viewBox='0 0 320 512'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'></path>
							</svg>
						</a>
						<a
							href='https://twitter.com/'
							target='_blank'
							rel='noreferrer'
						>
							<svg
								stroke='currentColor'
								fill='currentColor'
								strokeWidth='0'
								viewBox='0 0 512 512'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'></path>
							</svg>
						</a>
						<a
							href='https://linkedin.com/'
							target='_blank'
							rel='noreferrer'
						>
							<svg
								stroke='currentColor'
								fill='currentColor'
								strokeWidth='0'
								viewBox='0 0 448 512'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'></path>
							</svg>
						</a>
						<a
							href='https://www.instagram.com/'
							target='_blank'
							rel='noreferrer'
						>
							<svg
								stroke='currentColor'
								fill='currentColor'
								strokeWidth='0'
								viewBox='0 0 448 512'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'></path>
							</svg>
						</a>
						<a
							href='https://www.whatsapp.com/'
							target='_blank'
							rel='noreferrer'
						>
							<svg
								stroke='currentColor'
								fill='currentColor'
								strokeWidth='0'
								viewBox='0 0 448 512'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z'></path>
							</svg>
						</a>
					</div>
				</div>
				<div className='divider'></div>
			</div>
			<div className='left__sidebar__content'>
				<ul className='personal__info'>
					<li>
						<p>Age:</p>
						<span>24</span>
					</li>
					<li>
						<p>Residence:</p>
						<span>BD</span>
					</li>
					<li>
						<p>Freelancer:</p>
						<span className='green'>Avilable</span>
					</li>
					<li>
						<p>Address:</p>
						<span>Dhaka, Bangladesh</span>
					</li>
				</ul>
				<div className='divider'></div>
				<div className='language'>
					<h5>Languages</h5>
					<div className='language__content'>
						<div className='item'>
							<p>Hindi</p>
							<span>100%</span>
						</div>
						<div className='progress'>
							<div className='progress__bar'>
								<div width='100%' className='bar'></div>
							</div>
						</div>
					</div>
					<div className='language__content'>
						<div className='item'>
							<p>English</p>
							<span>90%</span>
						</div>
						<div className='progress'>
							<div className='progress__bar'>
								<div width='90%' className='bar'></div>
							</div>
						</div>
					</div>
					<div className='language__content'>
						<div className='item'>
							<p>Spanish</p>
							<span>60%</span>
						</div>
						<div className='progress'>
							<div className='progress__bar'>
								<div width='60%' className='bar'></div>
							</div>
						</div>
					</div>
				</div>
				<div className='divider'></div>
				<div className='language'>
					<h5>Skills</h5>
					<div className='language__content'>
						<div className='item'>
							<p>HTML</p>
							<span>100%</span>
						</div>
						<div className='progress'>
							<div className='progress__bar'>
								<div width='100%' className='bar'></div>
							</div>
						</div>
					</div>
					<div className='language__content'>
						<div className='item'>
							<p>CSS</p>
							<span>90%</span>
						</div>
						<div className='progress'>
							<div className='progress__bar'>
								<div width='90%' className='bar'></div>
							</div>
						</div>
					</div>
					<div className='language__content'>
						<div className='item'>
							<p>JS</p>
							<span>60%</span>
						</div>
						<div className='progress'>
							<div className='progress__bar'>
								<div width='60%' className='bar'></div>
							</div>
						</div>
					</div>
					<div className='language__content'>
						<div className='item'>
							<p>PHP</p>
							<span>60%</span>
						</div>
						<div className='progress'>
							<div className='progress__bar'>
								<div width='60%' className='bar'></div>
							</div>
						</div>
					</div>
				</div>
				<div className='divider'></div>
				<div className='extra__skills'>
					<h5>Extra Skills</h5>
					<ul>
						<li>
							<img loading='lazy' src={IconSvg} />
							Bootstrap, Materialize
						</li>
						<li>
							<img loading='lazy' src={IconSvg} />
							Stylus, Sass, Less
						</li>
						<li>
							<img loading='lazy' src={IconSvg} />
							Gulp, Webpack Grunt
						</li>
						<li>
							<img loading='lazy' src={IconSvg} />
							Git Knowldge
						</li>
					</ul>
				</div>
				<div className='divider'></div>
			</div>
			<div className='left__sidebar__footer'>
				<button type='button'>
					DOWNLOAD CV
					<svg
						stroke='currentColor'
						fill='currentColor'
						strokeWidth='0'
						viewBox='0 0 24 24'
						height='1em'
						width='1em'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M12 16L16 11 13 11 13 4 11 4 11 11 8 11z'></path>
						<path d='M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z'></path>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default LeftSidebar;
