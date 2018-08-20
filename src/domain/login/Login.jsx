import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';



const container = {
	textAlign: 'center', 

};


class Login extends React.Component {
	constructor(props) {
		super(props);

		this.handleLoginInput = this.handleLoginInput.bind(this);
	}

	handleLoginInput(e)  {
		let name = e.target.name;
		let value = e.target.value;
		console.log(value)
	}

	render() {
		
		return (
			<div style={container} >
				<h1> Login </h1>

				<input type= 'text' name= 'email' placeholder= 'Email' onChange ={this.handleLoginInput}/>
				<input type='password' name='password' placeholder='Password' onChange={this.handleLoginInput} />
				<button type="submit"> Submit </button>

				<a href= '/' > Register </a>

			</div>

		
		);

	}
}


export default connect((state) => {
	return {
		login: state.login
	};
})(Login);