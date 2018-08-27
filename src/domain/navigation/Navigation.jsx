import React from 'react';
import { connect } from 'react-redux';
import * as LoginActions from '../login/LoginActions';


const navContainer = {
	height: '40px',
	width: '97%',
	margin: 'none',
	backgroundColor: '#D5D5D5',
	textAlign: 'right',
	marginRight: '20px',
	marginTop: '30px',
};

const linkStyle = {
	listStyle: 'none',
	marginLeft: '5px',
	marginRight: '5px',
	marginTop: '20px'
};


class Navigation extends React.Component {
	constructor(props) {
		super(props);

		this.handleLogout = this.handleLogout.bind(this);
	}

	handleLogout() {
		this.props.dispatch(LoginActions.handleIsLoggedOut());
	}


	render() {
		let logout;
		if(this.props.login.isLoggedIn == false) {
			logout = null;
		}
		else {
			logout =
				<a id="logout" href='/' onClick={this.handleLogout} style={linkStyle}> Logout</a>;
		}
		

		return (
			<div style={navContainer}>
				{logout}

			</div>


		);

	}
}



export default connect((state) => {
	return {
		login: state.login
	};
})(Navigation);
