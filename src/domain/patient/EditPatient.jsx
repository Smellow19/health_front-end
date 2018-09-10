import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as patientActions from './PatientAction';
import * as LoginActions from '../login/LoginActions';
import PropTypes from 'prop-types';



const editPatientContainer = {
	margin: 'auto',
	width: '75%',
	flexDirection: 'row',

};

const editpatient = {
	backgroundColor: 'white',
	textAlign: 'left',
	width: '60%',
	margin: 'auto',
	paddingLeft: '250px',
	paddingTop: '35px',
	paddingBottom: '35px',
};

const patientInput = {
	width: '45%',
	borderRadius: '3px',
	marginTop: '5px',
	marginBottom: '5px'

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
		let ssn = this.props.patient.updatePatient.ssn;
		this.props.dispatch(
			patientActions.handleEditSinglePatientSaga(
				ssn,
				this.props.patient.updatePatient,
				this.props.login.user
			));
	}

	componentWillUnmount() {
		this.props.dispatch(LoginActions.handleErrors(''));
		this.props.dispatch(patientActions.handleHomeRedirect(false));
		this.props.dispatch(patientActions.handleViewRedirect(false));
		this.props.dispatch(patientActions.handleEditRedirect(false));
		this.props.dispatch(patientActions.handleUpdateSinglePatientInfo(this.props.patient.updatePatient));


	}

	render() {
	
		return (
			<div>

				<div style={editPatientContainer}>

					<div style={editpatient}>
						<h1 id="top" > Edit Patient Details </h1>
						<h2>All fields must be filled in</h2>

						<h2>{this.props.login.error}</h2>

						First Name:<br /><input type="text" name="firstname" style={patientInput} defaultValue={this.props.patient.updatePatient.firstname} placeholder="First Name" onChange={this.handlePatientInfoChange} /><br />
						Last Name:<br /><input type="text" name="lastname" style={patientInput} defaultValue={this.props.patient.updatePatient.lastname} placeholder="Last Name" onChange={this.handlePatientInfoChange} /><br />
						Social Security Number: (SSN must be in the following format: xxx-xx-xxxx) <br /><input type="text" name="ssn" style={patientInput} readOnly defaultValue={this.props.patient.updatePatient.ssn} placeholder="SSN" onChange={this.handlePatientInfoChange} /><br />
						Age:(must be valid numbers)<br /><input type="text" name="age" style={patientInput} defaultValue={this.props.patient.updatePatient.age} maxLength="3" placeholder="Age" onChange={this.handlePatientInfoChange} /><br />
						Gender: <br /><select name="gender" defaultValue={this.props.patient.updatePatient.gender} onChange={this.handlePatientInfoChange}>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
						</select><br/>
						Height: (must be valid numbers) <br /><input type="text" name="height" style={patientInput} defaultValue={this.props.patient.updatePatient.height} maxLength="3" placeholder="Height(Inches)" onChange={this.handlePatientInfoChange} /><br />
						Weight: (must be valid numbers) <br /><input type="text" name="weight" style={patientInput} defaultValue={this.props.patient.updatePatient.weight} maxLength="3" placeholder="Weight(LBS)" onChange={this.handlePatientInfoChange} /><br />
						Insurance Provider:<br /><input type="text" name="insurance" style={patientInput} defaultValue={this.props.patient.updatePatient.insurance} placeholder="Insurance" onChange={this.handlePatientInfoChange} /><br />
						<br />
						<p>Address</p>
						Street:<br /><input type="text" name="street" style={patientInput} defaultValue={this.props.patient.updatePatient.address.street} placeholder="Street" onChange={this.handleAddressChange} /><br />
						City:<br /><input type="text" name="city" style={patientInput} defaultValue={this.props.patient.updatePatient.address.city} placeholder="City" onChange={this.handleAddressChange} /><br />
						State: (State must be abbreviated)<br /><input type="text" name="state" style={patientInput} defaultValue={this.props.patient.updatePatient.address.state} placeholder="State" onChange={this.handleAddressChange} /><br />
						Post Code: (Postal code must be valid 5 number input)<br /><input type="text" name="postal" style={patientInput} defaultValue={this.props.patient.updatePatient.address.postal} maxLength="6" placeholder="Postal" onChange={this.handleAddressChange} /><br />

						<button type="submit" onClick={this.handleEditPatientSubmit}><a href="#top">Submit</a> </button>
						<Link to="view_patient"><button type="submit">Cancel</button></Link>
					</div>
				</div>;
	
				{this.props.login.isLoggedIn === false &&
					< Redirect to={'/'} />}
				{this.props.login.user.roles[1] == undefined &&
					< Redirect to={'/'} />}

				{this.props.patient.editredirect &&
					< Redirect to={'/view_patient'} />}
			</div>


		);

	}
}

// EditPatient.propTypes = {
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
})(EditPatient);

