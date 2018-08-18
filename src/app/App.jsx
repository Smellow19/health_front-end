import React, { Component } from 'react';
import Login from '../domain/login/Login';
import Login from '../domain/navigation/Navigation';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navigation />
				<Login />
			</div>
		);
	}
}

export default App;
