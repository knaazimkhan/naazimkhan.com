import React from 'react';
import './App.scss';

import { LeftSidebar, Main, RightSidebar } from './containers';
function App() {
	return (
		<div className='App'>
			<LeftSidebar />
			<Main />
			<RightSidebar />
		</div>
	);
}

export default App;
