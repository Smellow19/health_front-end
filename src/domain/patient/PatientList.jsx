import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as patientActions from './PatientAction';
import * as LoginActions from '../login/LoginActions';
import Patients from './Patient';
import PropTypes from 'prop-types';







const PatientListContainer = {
	width: '80%',
	margin: 'auto',
	textAlign: 'center',
};



class PatientList extends React.Component {
	constructor(props) {
		super(props);

	}



	componentDidMount() {
		this.props.dispatch(patientActions.handleGetPatientsSaga(this.props.login.user));
	}

	componentWillUnmount() {
		this.props.dispatch(LoginActions.handleErrors(''));
		this.props.dispatch(patientActions.handleHomeRedirect(false));
		this.props.dispatch(patientActions.handleViewRedirect(false));
		this.props.dispatch(patientActions.handleEditRedirect(false));
		this.props.dispatch(patientActions.handleCreateRedirect(false));

	}

	render() {
		let createHTML;

		if (this.props.login.user.roles[1] != 'ADMIN') {
			createHTML = null;
		}
		else {
			createHTML =
				<Link to="/create_patient"><button type="submit">Create Patient</button> </Link>;
		}

		return (
			<div style={PatientListContainer}>
				<h1> Patient List </h1> 
				<p>{this.props.login.error}</p>
				
				{createHTML}


				<Patients />


				{this.props.login.isLoggedIn === false &&
					< Redirect to={'/'} />}
			</div>


		);

	}
}

// PatientList.propTypes = {
// 	patients: PropTypes.arr,
// 	patient: PropTypes.object,
// 	dispatch: PropTypes.function,
// 	login: PropTypes.object,
// };

export default connect((state) => {
	return {
		login: state.login,
		patient: state.patients
	};
})(PatientList);
