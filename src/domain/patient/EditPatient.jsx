import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as patientActions from './PatientAction';
import * as LoginActions from '../login/LoginActions';

const createPatient = {
	textAlign: 'left',
};

class EditPatient extends React.Component {
	constructor(props) {
		super(props);


		this.handleAddressChange = this.handleAddressChange.bind(this);
		this.handlePatientInfoChange = this.handlePatientInfoChange.bind(this);
		this.handleEditPatientSubmit = this.handleEditPatientSubmit.bind(this);
	}

	handleAddressChange(e) {
		let name = e.target.name;
		let value = e.target.value;

		this.props.dispatch(patientActions.handleEditPatientAddress(name, value));
	}

	handlePatientInfoChange(e) {
		let name = e.target.name;
		let value = e.target.value;

		this.props.dispatch(patientActions.handleEditPatient(name, value));
	}

	handleEditPatientSubmit() {
		let ssn = this.props.patient.createPatient.ssn;
		let patient = this.props.patient.createPatient;
		this.props.dispatch(patientActions.handleEditSinglePatientSaga(ssn, this.props.patient.updatePatient));
	}

	componentWillUnmount() {
		this.props.dispatch(LoginActions.handleErrors(''));
		this.props.dispatch(patientActions.handleEditRedirect(false));
		this.props.dispatch(patientActions.handleUpdateSinglePatientInfo(this.props.patient.updatePatient));


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
					<input type="text" name="firstname" defaultValue={this.props.patient.updatePatient.firstname} placeholder="First Name" onChange={this.handlePatientInfoChange} />
					<input type="text" name="lastname" defaultValue={this.props.patient.updatePatient.lastname} placeholder="Last Name" onChange={this.handlePatientInfoChange} />
					<input type="text" name="ssn" defaultValue={this.props.patient.updatePatient.ssn} placeholder="SSN" onChange={this.handlePatientInfoChange} />
					<input type="text" name="age" defaultValue={this.props.patient.updatePatient.age} maxLength="3" placeholder="Age" onChange={this.handlePatientInfoChange} />
					<select name="gender" defaultValue={this.props.patient.updatePatient.gender} onChange={this.handlePatientInfoChange}>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
					</select>
					<input type="text" name="height" defaultValue={this.props.patient.updatePatient.height} maxLength="3" placeholder="Height(Inches)" onChange={this.handlePatientInfoChange} />
					<input type="text" name="weight" defaultValue={this.props.patient.updatePatient.weight} maxLength="3" placeholder="Weight(LBS)" onChange={this.handlePatientInfoChange} />
					<input type="text" name="insurance" defaultValue={this.props.patient.updatePatient.insurance} placeholder="Insurance" onChange={this.handlePatientInfoChange} />
					<br /> <br />
					<p>Address</p>
					<input type="text" name="street" defaultValue={this.props.patient.updatePatient.address.street} placeholder="Street" onChange={this.handleAddressChange} />
					<input type="text" name="city" defaultValue={this.props.patient.updatePatient.address.city} placeholder="City" onChange={this.handleAddressChange} />
					<input type="text" name="state" defaultValue={this.props.patient.updatePatient.address.state} placeholder="State" onChange={this.handleAddressChange} />
					<input type="text" name="postal" defaultValue={this.props.patient.updatePatient.address.postal} maxLength="6" placeholder="Postal" onChange={this.handleAddressChange} />

				</div>

				<button type="submit" onClick={this.handleEditPatientSubmit}>Submit</button>
				<Link to="view_patient"><button type="submit">Cancel</button></Link>

				{(this.props.login.isLoggedIn === false || this.props.login.user.roles[1] == undefined) &&
					< Redirect to={'/'} />}

				{this.props.patient.editredirect &&
					< Redirect to={'/view_patient'} />}
			</div>


		);

	}
}



export default connect((state) => {
	return {
		login: state.login,
		patient: state.patients
	};
})(EditPatient);

