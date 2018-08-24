import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as patientActions from './PatientAction';
import { Redirect } from 'react-router-dom';




const patientContainer = {
	display: 'inline-block',
	width: '33%', 
	border: 'solid 1px black',
	margin: 'auto'

};

class Patient extends React.Component {
	constructor(props) {
		super(props);
		this.handleViewPatient = this.handleViewPatient.bind(this);
	}


	handleViewPatient(e) {
		this.props.dispatch(patientActions.handleGetSinglePatientSaga(e.target.value));
		this.props.dispatch(patientActions.handleGetSinglePatientEncountersSaga(e.target.name));
	}

	componentWillUnmount() {
		this.props.dispatch(patientActions.handleViewRedirect(false));
	}


	render() {
		let patientsHtml;
		if(this.props.patient.patients === undefined) {
			patientsHtml = <p> error</p>;
		}
		else {
			patientsHtml = this.props.patient.patients.map((patient, key ) => {
				return (
					<div key= {key} style= {patientContainer}>
						<p> Name: {patient.firstname} {patient.lastname} </p>
						<p> Age: {patient.age} </p>
						<p> Gender: {patient.gender} </p>
						<Link to="view_patient"><button name={patient.id} value={patient.ssn} onClick={this.handleViewPatient}> View </button></Link>
					</div>
				);
			});
			
			
		}
		return (
			<div>
				{patientsHtml}

				{this.props.patient.viewredirect  &&
					< Redirect to={'/view_patient'} />}
			</div>


		);

	}
}



export default connect((state) => {
	return {
		patient: state.patients,
		login: state.login
	};
})(Patient);
