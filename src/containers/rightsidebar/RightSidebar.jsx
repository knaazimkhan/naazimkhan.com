import React from 'react';
import './rightsidebar.scss';

const RightSidebar = () => {
	return (
		<div className='right__sidebar'>
			<div className='dark__mode'>
				<svg
					stroke='currentColor'
					fill='currentColor'
					stroke-width='0'
					viewBox='0 0 512 512'
					height='30px'
					width='30px'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path d='M253.125 18.563c-131.53 0-238.375 106.813-238.375 238.343 0 131.53 106.846 238.344 238.375 238.344 131.53 0 238.344-106.815 238.344-238.344 0-131.528-106.816-238.344-238.345-238.344zm-23.938 52.093c40.517 0 77.988 12.904 108.532 34.813-5.597-.624-11.302-.97-17.064-.97-84.157 0-152.375 68.25-152.375 152.406 0 84.157 68.22 152.375 152.376 152.375 5.762 0 11.467-.313 17.063-.936-30.545 21.91-68.016 34.812-108.533 34.812-102.98 0-186.28-83.272-186.28-186.25 0-102.977 83.3-186.25 186.28-186.25z'></path>
				</svg>
			</div>
			<div className='right__sidebar__content'>
				<ul>
					<li>
						<a href='/' target='_self'>
							<svg
								stroke='currentColor'
								fill='currentColor'
								stroke-width='0'
								viewBox='0 0 24 24'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g>
									<path fill='none' d='M0 0h24v24H0z'></path>
									<path d='M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9z'></path>
								</g>
							</svg>
							<span className='tooltip'>Home</span>
						</a>
					</li>
					<li>
						<a href='/service/' target='_self' aria-current='page'>
							<svg
								stroke='currentColor'
								fill='currentColor'
								stroke-width='0'
								viewBox='0 0 384 512'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M384 121.941V128H256V0h6.059c6.365 0 12.47 2.529 16.971 7.029l97.941 97.941A24.005 24.005 0 0 1 384 121.941zM248 160c-13.2 0-24-10.8-24-24V0H24C10.745 0 0 10.745 0 24v464c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V160H248zM123.206 400.505a5.4 5.4 0 0 1-7.633.246l-64.866-60.812a5.4 5.4 0 0 1 0-7.879l64.866-60.812a5.4 5.4 0 0 1 7.633.246l19.579 20.885a5.4 5.4 0 0 1-.372 7.747L101.65 336l40.763 35.874a5.4 5.4 0 0 1 .372 7.747l-19.579 20.884zm51.295 50.479l-27.453-7.97a5.402 5.402 0 0 1-3.681-6.692l61.44-211.626a5.402 5.402 0 0 1 6.692-3.681l27.452 7.97a5.4 5.4 0 0 1 3.68 6.692l-61.44 211.626a5.397 5.397 0 0 1-6.69 3.681zm160.792-111.045l-64.866 60.812a5.4 5.4 0 0 1-7.633-.246l-19.58-20.885a5.4 5.4 0 0 1 .372-7.747L284.35 336l-40.763-35.874a5.4 5.4 0 0 1-.372-7.747l19.58-20.885a5.4 5.4 0 0 1 7.633-.246l64.866 60.812a5.4 5.4 0 0 1-.001 7.879z'></path>
							</svg>
							<span className='tooltip'>Service</span>
						</a>
					</li>
					<li>
						<a href='/education/' target='_self'>
							<svg
								stroke='currentColor'
								fill='currentColor'
								stroke-width='0'
								viewBox='0 0 448 512'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z'></path>
							</svg>
							<span className='tooltip'>Education</span>
						</a>
					</li>
					<li>
						<a href='/portfolios/' target='_self'>
							<svg
								stroke='currentColor'
								fill='currentColor'
								stroke-width='0'
								viewBox='0 0 24 24'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g>
									<path fill='none' d='M0 0h24v24H0z'></path>
									<path d='M9 13v3h6v-3h7v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7h7zm2-2h2v3h-2v-3zM7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v5h-7V9H9v2H2V6a1 1 0 0 1 1-1h4zm2-2v2h6V3H9z'></path>
								</g>
							</svg>
							<span className='tooltip'>Portfolios</span>
						</a>
					</li>
					<li>
						<a href='/blog/' target='_self'>
							<svg
								stroke='currentColor'
								fill='currentColor'
								stroke-width='0'
								viewBox='0 0 24 24'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g>
									<path fill='none' d='M0 0h24v24H0z'></path>
									<path d='M21 2C6 2 4 16 3 22h1.998c.666-3.333 2.333-5.166 5.002-5.5 4-.5 7-4 8-7l-1.5-1 1-1c1-1 2.004-2.5 3.5-5.5z'></path>
								</g>
							</svg>
							<span className='tooltip'>Blog</span>
						</a>
					</li>
					<li>
						<a href='/contact/' target='_self'>
							<svg
								stroke='currentColor'
								fill='currentColor'
								stroke-width='0'
								viewBox='0 0 24 24'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g>
									<path fill='none' d='M0 0h24v24H0z'></path>
									<path d='M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455z'></path>
								</g>
							</svg>
							<span className='tooltip'>Contact</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default RightSidebar;
