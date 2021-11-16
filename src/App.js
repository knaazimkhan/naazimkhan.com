import React from 'react';
import './App.scss';

import { LeftMenu, MainMenu, RightMenu } from './containers';
function App() {
	return (
		<div className='App'>
			<LeftMenu />
			<MainMenu />
			<RightMenu />
		</div>
	);
}

export default App;
