import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
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
		return (
			<div style={container}>
				<div style={input}>
					<h1> Login </h1>
					<input type='text' name='email' placeholder='Email' defaultValue='' onChange={this.handleLoginInput} /><br /> <br />
					<input type='password' name='password' placeholder='Password' defaultValue='' onChange={this.handleLoginInput} /> <br />
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

Login.propTypes = {
	login: PropTypes.object,
	dispatch: PropTypes.function,
};

export default connect((state) => {
	return {
		login: state.login
	};
})(Login);