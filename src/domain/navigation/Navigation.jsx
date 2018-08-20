import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as LoginActions from '../login/LoginActions';


const ulLinks = {
	display: 'inline',
}

const linkStyle = {
	listStyle: 'none',
	display: 'inline-block',
	marginLeft: '5px',
	marginRight: '5px',
};


class Navigation extends React.Component {
	constructor(props) {
		super(props);

		this.handleLogout = this.handleLogout.bind(this);
	}

	handleLogout() {
		let bool = false;
		this.props.dispatch(LoginActions.handleIsLoggedIn(bool));
	}


	render() {
		let logout;
		if(this.props.login.isLoggedIn == false) {
			logout = null;
		}
		else {
			logout =
				<li onClick={this.handleLogout} style={linkStyle}> Logout</li>
		}
		

		return (
			<div style = {ulLinks}>
				<h1> Navbar </h1>

				<ul>
					<li style = {linkStyle}> Link </li>
					<li style = {linkStyle}> Link</li>
					{logout}
				</ul>

			</div>


		);

	}
}



export default connect((state) => {
	return {
		login: state.login
	};
})(Navigation);
