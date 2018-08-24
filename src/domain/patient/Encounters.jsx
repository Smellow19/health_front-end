import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as patientActions from './PatientAction';
import { Redirect } from 'react-router-dom';




const encounterContainer = {
	display: 'inline-block',
	width: '50%',
	border: 'solid 1px black',
	textAlign: 'left',
	margin: '10px',

};

class Encounters extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		let encounterHtml;
		if (this.props.patient.encounters === 0) {
			encounterHtml = <p> There are no encounters for this patient</p>;
		}
		else {
			encounterHtml = this.props.patient.encounters.map((encounter, key) => {
				return (
					<div key={key} style={encounterContainer}>
						<p> Doctor Name: {encounter.provider} </p>
						<p> Reason for visit: {encounter.chiefComplaint} </p>
						<p> Doctor Name: {encounter.provider} </p>
						<p> Pulse: {encounter.pulse} </p>
						<p> Systolic: {encounter.systolic} </p>
						<p> Diastolic: {encounter.diastolic} </p>
						<p> Notes: <br /> <hr /> {encounter.notes} </p>
						
					</div>
				);
			});


		}
		return (
			<div>
				{encounterHtml}
			</div>


		);

	}
}



export default connect((state) => {
	return {
		patient: state.patients,
		login: state.login
	};
})(Encounters);
