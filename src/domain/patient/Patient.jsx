import React from 'react';
import { connect } from 'react-redux';
import * as patientActions from './PatientAction';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';





const patientContainer = {
	display: 'inline-block',
	width: '30%', 
	border: 'solid 1px black',
	margin: '5px',
	backgroundColor: 'white'

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
						<button name={patient.id} value={patient.ssn} onClick={this.handleViewPatient}> View </button>
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

Patient.propTypes = {
	patients: PropTypes.arr,
	patient: PropTypes.object,
	dispatch: PropTypes.function,
	login: PropTypes.object,
};


export default connect((state) => {
	return {
		patient: state.patients,
		login: state.login
	};
})(Patient);
