import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as patientActions from './PatientAction';
import * as LoginActions from '../login/LoginActions';

const createPatient = {
	textAlign: 'left',
};

class ViewPatient extends React.Component {
	constructor(props) {
		super(props);

		this.handleRedirect = this.handleRedirect.bind(this);
		this.handleDeletePatient = this.handleDeletePatient.bind(this);
	}

	handleDeletePatient() {

	}
	
	handleRedirect() {
		this.props.dispatch(patientActions.handleViewRedirect(true));
	}

	componentWillUnmount() {
		this.props.dispatch(LoginActions.handleErrors(''));
		this.props.dispatch(patientActions.handleViewRedirect(false));

	}
	

	render() {
		let viewhtml;
		let editButton;
		let deleteButton;
		const patient = this.props.patient.patient;


		if (this.props.login.user.roles[1] != "ADMIN") {
			deleteButton = null;
		}
		else {
			deleteButton =
				<button type="Submit">Delete Patient</button>;
		}

		if (this.props.login.user.roles[1] != "ADMIN") {
			editButton = null;
		}
		else {
			editButton =
				<Link to="/edit_patient" ><button type="Submit">Edit Patient</button></Link>;
		}

		if(patient.firstname == null) {
			viewhtml=<div><p>There was an issue connecting to the database, please try again. </p></div>;
		}else {
			viewhtml= 
			<div>
				<p> Name: {patient.firstname} {patient.lastname} </p>
				<p> Social Security Number: {patient.ssn} </p>
				<p> Age: {patient.age} </p>
				<p> Gender: {patient.gender} </p>
				<p> Height: {patient.height} </p>
				<p> Weight: {patient.weight} </p>
				<p> Insurance: {patient.insurance} </p>
				<p> Address: <br />{patient.address.street}<br /> 
					{patient.address.city}, {patient.address.state}<br/> 
					{patient.address.postal} 
				</p>
				{editButton}
				<Link to="/"><button type="Submit">Return</button></Link>
				{deleteButton}
				
				
			</div>;
		}
		
		

		return (
			<div>
				{viewhtml}


				{(this.props.login.isLoggedIn === false || this.props.login.user.roles[1] == undefined) &&
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