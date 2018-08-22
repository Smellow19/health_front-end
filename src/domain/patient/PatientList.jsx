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

		return (
			<div>
				<h1> Patient List </h1> 
				
				<Link to= "/create_patient"><button type = "submit">Create Patient</button> </Link>


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
