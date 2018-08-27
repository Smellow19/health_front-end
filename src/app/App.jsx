import React, { Component } from 'react';
import Navigation from '../domain/navigation/Navigation';
import Content from './content';


const appStyle= {
	margin: 'none',
}
class App extends Component {
	render() {
		return (
			<div style={appStyle}>
				<Navigation />
				<Content />
			</div>
		);
	}
}

export default App;
