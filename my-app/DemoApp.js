import React from 'react';
import './App.css';
import MainComponent from './components/MainComponent.js';
import { BrowserRouter } from 'react-router-dom';
const App = () => {
	return (
		<BrowserRouter>
			<MainComponent />
		</BrowserRouter>
	);
};

export default App;
