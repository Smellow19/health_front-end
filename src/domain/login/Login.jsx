import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as LoginActions from'./LoginActions';




const container = {
	textAlign: 'center', 
	backgroundColor: 'white',
	width: '30%',
	margin: 'auto',
	height: '300px',
	boxShadow: '0px 0px 1px 1px',
	marginTop: '140px'



};

const input = {
	margin: 'auto',
	paddingTop: '20px',

};

const contentBorder ={
	width: '88%',
	// backgroundColor: '#6d7993',
	border: 'solid black 10px',
	margin: 'auto',
	height: '500px',


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
		this.props.dispatch(LoginActions.getUserSaga(this.props.login.email, this.props.login.password));
	}

	componentWillUnmount() {
	}

	render() {
		if(this.props.login.user != undefined) {
		}
		return (
			<div style={container}>
				<div style={input}>
					<h1> Login </h1>
					<input type='text' name='email' placeholder='Email' defaultValue='werickson@superhealth.com' onChange={this.handleLoginInput} /><br /> <br />
					<input type='password' name='password' placeholder='Password' defaultValue='password' onChange={this.handleLoginInput} /> <br />
					<p> {this.props.login.error} </p>
					<br/>
					<button type="submit" onClick={this.handleSubmit}> Submit </button>
				</div>
				{this.props.login.isLoggedIn &&
					< Redirect to={'/patients'} />}
			</div>

		
		);

	}
}


export default connect((state) => {
	return {
		login: state.login
	};
})(Login);