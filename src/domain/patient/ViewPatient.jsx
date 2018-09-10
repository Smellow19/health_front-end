import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as patientActions from './PatientAction';
import * as LoginActions from '../login/LoginActions';
import Encounters from './Encounters';

const createPatient = {
	textAlign: 'left',
};

const viewPatientContainer = {
	width: '80%',
	margin: 'auto',


};

const PatientInfo  = {
	backgroundColor: 'white',
	width: '50%',
	margin: 'auto',
	padding:'25px',
};

const buttonStyle = {
	width: '100px',
	marginLeft: '60px',
	marginTop: '20px',
};

const encounterContainer  = {

};

class ViewPatient extends React.Component {
	constructor(props) {
		super(props);

		this.handleRedirect = this.handleRedirect.bind(this);
		this.handleDeletePatient = this.handleDeletePatient.bind(this);
	}

	handleDeletePatient() {
		this.props.dispatch(
			patientActions.handleDeletePatient(
				this.props.patient.patient.ssn,
				this.props.patient.encounters.length,
				this.props.login.user
			));

	}
	
	handleRedirect() {
		this.props.dispatch(patientActions.handleViewRedirect(true));
	}

	componentWillMount() {
		this.props.dispatch(
			patientActions.handleGetSinglePatientEncountersSaga(
				this.props.patient.patient.id,
				this.props.login.user
			));
		this.props.dispatch(patientActions.handleHomeRedirect(false));

	}

	componentWillUnmount() {
		this.props.dispatch(patientActions.handleHomeRedirect(false));
		this.props.dispatch(patientActions.handleViewRedirect(false));
		this.props.dispatch(patientActions.handleEditRedirect(false));

	}
	

	render() {
		let viewhtml;
		let editButton;
		let deleteButton;
		const patient = this.props.patient.patient;


		if (this.props.login.user.roles[1] != 'ADMIN') {
			deleteButton = <p> </p>;
		}
		else {
			deleteButton =
				<button type="Submit" style={buttonStyle} onClick={this.handleDeletePatient}>Delete Patient</button>;
		}

		if (this.props.login.user.roles[1] != 'ADMIN') {
			editButton = <p> </p>;
		}
		else {
			editButton =
				<Link to="/edit_patient" ><button type="Submit" style={buttonStyle}>Edit Patient</button></Link>;
		}

		if(patient.firstname == null) {
			viewhtml=<div><p>There was an issue connecting to the database, please try again. </p></div>;
		}else {
			viewhtml= 
			<div style= {viewPatientContainer}>
				<h1> Patient Info </h1> 
				<h2>{this.props.login.error}</h2>
				<div style={PatientInfo}>
					<p> Name: {patient.firstname} {patient.lastname} </p> <hr/>
					<p> Social Security Number: {patient.ssn} </p><hr/>
					<p> Age: {patient.age} </p><hr/>
					<p> Gender: {patient.gender} </p><hr/>
					<p> Height: {patient.height} </p><hr/>
					<p> Weight: {patient.weight} </p><hr/>
					<p> Insurance: {patient.insurance} </p><hr/>
					<p> Address: <br />{patient.address.street}<br /> 
						{patient.address.city}, {patient.address.state}<br/> 
						{patient.address.postal} 
					</p><hr/>
					<p> Office Visits: {this.props.patient.encounters.length} </p><hr/>
					{editButton}
					<Link to="/"><button type="Submit" style={buttonStyle}>Return</button></Link>
					{deleteButton}
				</div>
				<div style={encounterContainer}>
					<h1> Office Visits </h1>
					<Encounters />
				
				
				</div>
			</div>;
		}
		
		

		return (
			<div >


				{viewhtml}


				{(this.props.login.isLoggedIn === false) &&
					< Redirect to={'/'} />}
				{this.props.patient.homeredirect &&
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
})(ViewPatient);