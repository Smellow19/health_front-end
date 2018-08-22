import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as patientActions from './PatientAction';

const createPatient = {
	textAlign: 'left',
};

class NewPatient extends React.Component {
	constructor(props) {
		super(props);


		this.handleAddressChange = this.handleAddressChange.bind(this);
		this.handlePatientInfoChange = this.handlePatientInfoChange.bind(this);
		this.handleNewPatientSubmit = this.handleNewPatientSubmit.bind(this);

	}

	handleAddressChange(e) {
		let name = e.target.name;
		let value = e.target.value;

		this.props.dispatch(patientActions.handleCreatePatientAddress(name, value));
	}

	handlePatientInfoChange(e) {
		let name = e.target.name;
		let value = e.target.value;

		this.props.dispatch(patientActions.handleCreatePatient(name, value));
	}

	handleNewPatientSubmit() {
		this.props.dispatch(patientActions.handleCreatePatientSaga(this.props.patient.createPatient));
	}

	render() {
		console.log(this.props.patient.createPatient)
		return (
			<div>
				<h1>{this.props.login.error}</h1>

				<div>
					<input type= "text" name= "firstname" placeholder="First Name" onChange={this.handlePatientInfoChange} />
					<input type= "text" name= "lastname" placeholder="Last Name" onChange={this.handlePatientInfoChange} />
					<input type= "text" name= "ssn" placeholder="SSN" onChange={this.handlePatientInfoChange} />
					<input type= "text" name= "age" placeholder="Age" onChange={this.handlePatientInfoChange} />
					<input type= "text" name= "gender" placeholder="Gender" onChange={this.handlePatientInfoChange} />
					<input type= "text" name= "height" placeholder="Height(Inches)" onChange={this.handlePatientInfoChange} />
					<input type= "text" name= "weight" placeholder="Weight(LBS)" onChange={this.handlePatientInfoChange} />
					<input type= "text" name= "insurance" placeholder="Insurance" onChange={this.handlePatientInfoChange} />
					<br/> <br/>
					<p>Address</p>
					<input type= "text" name="street" placeholder="Street" onChange={this.handleAddressChange} />
					<input type= "text" name="city" placeholder="City" onChange={this.handleAddressChange} />
					<input type= "text" name="state" placeholder="State" onChange={this.handleAddressChange} />
					<input type= "text" name="postal" placeholder="Postal" onChange={this.handleAddressChange} />

				</div>

				<button type="submit" onClick={this.handleNewPatientSubmit}>Submit </button>

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
})(NewPatient);

