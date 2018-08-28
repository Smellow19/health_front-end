import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as patientActions from './PatientAction';
import { Redirect } from 'react-router-dom';




const encounterContainer = {
	display: 'inline-block',
	width: '100%',
	border: 'solid 1px black',
	textAlign: 'left',
	margin: '10px',
	backgroundColor: 'white',
	padding: '5px'

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
						<p> Reason for visit: {encounter.chiefcomplaint} </p>
						<p> Pulse: {encounter.pulse} </p>
						<p> Systolic: {encounter.systolic} </p>
						<p> Diastolic: {encounter.diastolic} </p>
						<h2> Notes</h2> <hr />
						<br /><p>{encounter.notes} </p>
						
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
