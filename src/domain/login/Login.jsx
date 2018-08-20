import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as LoginActions from'./LoginActions';




const container = {
	textAlign: 'center', 

};


class Login extends React.Component {
	constructor(props) {
		super(props);

		this.handleLoginInput = this.handleLoginInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	// records the user input so it can be passed into the getUser fetch call
	handleLoginInput(e)  {
		let name = e.target.name;
		let value = e.target.value;
		this.props.dispatch(LoginActions.handleLogin(name, value));
	}

	//Calls the get user saga to fetch the user matching the email and password
	handleSubmit() {
		console.log(this.props.login.email);
		this.props.dispatch(LoginActions.getUserSaga(this.props.login.email, this.props.login.password));
		console.log(this.props.login.user);
	}

	render() {
		
		return (
			<div style={container} >
				<h1> Login </h1>

				<input type='text' name='email' placeholder='Email' defaultValue='werickson@superhealth.com' onChange ={this.handleLoginInput}/>
				<input type='password' name='password' placeholder='Password' defaultValue='password' onChange={this.handleLoginInput} /> <br />
				<p> {this.props.login.error} </p>
				<br/>
				<button type="submit" onClick={this.handleSubmit}> Submit </button>

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