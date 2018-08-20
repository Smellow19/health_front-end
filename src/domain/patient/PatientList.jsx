import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class PatientList extends React.Component {
	constructor(props) {
		super(props);

	}



	render() {

		return (
			<div>
				<h1> Patient List </h1>





				{this.props.login.isLoggedIn === false &&
					< Redirect to={'/'} />}
			</div>


		);

	}
}



export default connect((state) => {
	return {
		login: state.login
	};
})(PatientList);
