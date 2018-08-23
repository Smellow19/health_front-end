import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as patientActions from './PatientAction';
import Patients from './Patient';


const createPatient = {
	textAlign: 'left',
};

class PatientList extends React.Component {
	constructor(props) {
		super(props);

	}



	componentDidMount() {
		this.props.dispatch(patientActions.handleGetPatientsSaga());
	}
	render() {
		let createHTML;

		if (this.props.login.user.roles[1] != "ADMIN") {
			createHTML = null;
		}
		else {
			createHTML =
				<Link to="/create_patient"><button type="submit">Create Patient</button> </Link>;
		}

		return (
			<div>
				<h1> Patient List </h1> 
				
				{createHTML}


				<Patients />


				{this.props.login.isLoggedIn === false &&
					< Redirect to={'/'} />}
			</div>


		);

	}
}



export default connect((state) => {
	return {
		login: state.login,
		patient: state.patients
	};
})(PatientList);
