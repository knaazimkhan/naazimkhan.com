import React from 'react';
import './mainmenu.scss';

const MainMenu = () => {
	return (
		<div className='main__manu'>
			<div className='content'>
				<div>
					<div>
						<div className='home__banner' id='home'>
							<div className='inner-container'>
								<div className='columns'>
									<div className='column banner-bg'>
										<div>
											<div>
												<div className='columns'>
													<div className='column banner-animat'>
														<div className='cube'></div>
														<div className='cube'></div>
														<div className='cube'></div>
														<div className='cube'></div>
														<div className='cube'></div>
														<div className='cube'></div>
													</div>
												</div>
												<div className='columns'>
													<div className='column'>
														<h1>
															I’m Rayan Adlrdard
															<br />
															<span className='primary'>
																Font – End
															</span>
															Developer
														</h1>
														<p className='w-80'>
															Lorem ipsum dolor
															sit amet,
															consectetur
															adipiscing elit. Et,
															volutpat feugiat
															placerat lobortis.
															Natoque rutrum
															semper sed
															suspendisse nunc
															lectus.
														</p>
														<div
															aria-hidden='true'
															className='wp-block-spacer css-zdz8xi'
														></div>
														<div className='wp-block-buttons'>
															<div className='wp-block-button btn-primary'>
																<a
																	href='https://wordpress-657257-2147261.cloudwaysapps.com/contact/'
																	target='_self'
																	className='wp-block-button__link css-scsb0n'
																>
																	HIRE ME
																</a>
															</div>
														</div>
													</div>
													<div className='column on-tab'>
														<div className='wp-block-image'>
															<figure className='aligncenter size-large'>
																<img
																	loading='lazy'
																	width='327'
																	height='460'
																	src='https://wordpress-657257-2147261.cloudwaysapps.com/wp-content/uploads/2021/03/man-img.png'
																	alt=''
																	className='wp-image-597'
																	sizes='(max-width: 327px) 100vw, 327px'
																/>
															</figure>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainMenu;
