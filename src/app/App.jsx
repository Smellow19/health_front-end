import React, { Component } from 'react';
import Navigation from '../domain/navigation/Navigation';
import Content from './content';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navigation />
				<Content />
			</div>
		);
	}
}

export default App;
