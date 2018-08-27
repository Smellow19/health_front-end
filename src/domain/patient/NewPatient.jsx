import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as patientActions from './PatientAction';
import * as LoginActions from '../login/LoginActions';

const createPatient = {
	textAlign: 'left',
};

const newPatientContainer = {
	margin: 'auto',
	width: '75%',
	flexDirection: 'row',

};

const createpatient = {
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
	borderRadius:'3px',
	marginTop: '5px',
	marginBottom: '5px'

};

const buttonStyle = {
	width: '80px',
	marginLeft: '50px',
	marginTop: '20px',
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
		this.props.dispatch(patientActions.handleHomeRedirect(false));
		this.props.dispatch(patientActions.handleViewRedirect(false));
		this.props.dispatch(patientActions.handleEditRedirect(false));
	}

	render() {
		return (
			<div style={newPatientContainer}>
				

				<div style={createpatient}>
					<h1 id ="top" > Create New Patient </h1>
					<h2>{this.props.login.error}</h2>

					First name:<br /><input type= "text" name= "firstname" style={patientInput} placeholder="First Name" onChange={this.handlePatientInfoChange} /><br/>
					Last name: <br /><input type= "text" name= "lastname" style={patientInput} placeholder="Last Name" onChange={this.handlePatientInfoChange} />	<br/>
					Social Security Number: (SSN must be in the following format: xxx-xx-xxxx) <br /><input type="text" name="ssn" style={patientInput} placeholder="SSN" onChange={this.handlePatientInfoChange} /><br/>
					Age: (must be valid numbers) <br /><input type="text" name="age" style={patientInput} maxLength="3" placeholder="Age" onChange={this.handlePatientInfoChange} /><br/>
					Gender:<br /><select name="gender" defaultValue="Male" onChange={this.handlePatientInfoChange}><br/>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
					</select><br />
					Height: (must be valid numbers) <br /><input type="text" name="height" style={patientInput} maxLength="3" placeholder="Height(Inches)" onChange={this.handlePatientInfoChange} /><br/>
					Weight: (must be valid numbers) <br /><input type="text" name="weight" style={patientInput} maxLength="3" placeholder="Weight(LBS)" onChange={this.handlePatientInfoChange} /><br/>
					Insurance Provider:<br /><input type= "text" name= "insurance" style={patientInput} placeholder="Insurance" onChange={this.handlePatientInfoChange} /><br/>
					<p>Address</p>
					Street: <br /><input type= "text" name="street" style={patientInput} placeholder="Street" onChange={this.handleAddressChange} /><br/>
					City: <br /><input type= "text" name="city" style={patientInput} placeholder="City" onChange={this.handleAddressChange} /><br/>		
					State: (State must be abbreviated) <br /><input type= "text" name="state" style={patientInput} placeholder="State" onChange={this.handleAddressChange} /><br/>
					Post Code:  (Postal code must be valid 5 number input)<br /><input type="text" name="postal" style={patientInput} maxLength="6" placeholder="Postal" onChange={this.handleAddressChange} /><br/>

					<button type="submit" style={buttonStyle} onClick={this.handleNewPatientSubmit}><a href="#top">Submit</a></button>
					<button type="submit" style={buttonStyle} onClick={this.handleRedirect}>Cancel</button>

				</div>



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

