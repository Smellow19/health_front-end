import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as patientActions from './PatientAction';
import * as LoginActions from '../login/LoginActions';

const createPatient = {
	textAlign: 'left',
};

class NewPatient extends React.Component {
	constructor(props) {
		super(props);


		this.handleAddressChange = this.handleAddressChange.bind(this);
		this.handlePatientInfoChange = this.handlePatientInfoChange.bind(this);
		this.handleNewPatientSubmit = this.handleNewPatientSubmit.bind(this);
		this.handleRedirect = this.handleRedirect.bind(this);
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

	handleRedirect() {
		this.props.dispatch(patientActions.handleCreateRedirect(true));
	}

	componentWillUnmount() {
		this.props.dispatch(LoginActions.handleErrors(''));
		this.props.dispatch(patientActions.handleCreateRedirect(false));

	}

	render() {
		return (
			<div>
				<h1>{this.props.login.error}</h1>

				<div>
					<ul>
						<li> SSN must be in the following format: <br /> xxx-xx-xxxx </li>
						<li> Age, Height, Weight must be valid numbers:<br /> 0 - 999, max length of 3</li>
						<li> Postal code must be valid numbers: <br /> 12345 Max length 6</li>
						<li> No fields can be empty </li>
						<li> State must be abbreviated <br /> CA </li>
					</ul>
				</div>

				<div>
					<input type= "text" name= "firstname" placeholder="First Name" onChange={this.handlePatientInfoChange} />
					<input type= "text" name= "lastname" placeholder="Last Name" onChange={this.handlePatientInfoChange} />
					<input type= "text" name= "ssn" placeholder="SSN" onChange={this.handlePatientInfoChange} />
					<input type="text" name="age" maxLength="3" placeholder="Age" onChange={this.handlePatientInfoChange} />
					<select name="gender" defaultValue="Male" onChange={this.handlePatientInfoChange}>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
					</select>
					<input type="text" name="height" maxLength="3" placeholder="Height(Inches)" onChange={this.handlePatientInfoChange} />
					<input type="text" name="weight" maxLength="3" placeholder="Weight(LBS)" onChange={this.handlePatientInfoChange} />
					<input type= "text" name= "insurance" placeholder="Insurance" onChange={this.handlePatientInfoChange} />
					<br/> <br/>
					<p>Address</p>
					<input type= "text" name="street" placeholder="Street" onChange={this.handleAddressChange} />
					<input type= "text" name="city" placeholder="City" onChange={this.handleAddressChange} />
					<input type= "text" name="state" placeholder="State" onChange={this.handleAddressChange} />
					<input type="text" name="postal" maxLength="6" placeholder="Postal" onChange={this.handleAddressChange} />

				</div>

				<button type="submit" onClick={this.handleNewPatientSubmit}>Submit</button>
				<button type="submit" onClick={this.handleRedirect}>Cancel</button>

				{(this.props.login.isLoggedIn === false || this.props.login.user.roles[1] == undefined) &&
					< Redirect to={'/'} />}

				{this.props.patient.createredirect &&
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

