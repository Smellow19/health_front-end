import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



const patientContainer = {
	display: 'inline-block',
	width: '33%', 
	border: 'solid 1px black',
	margin: 'auto'

};

class Patient extends React.Component {
	constructor(props) {
		super(props);

	}



	render() {
		let patientsHtml;
		if(this.props.patient.patients === undefined) {
			patientsHtml = <p> error</p>
		}
		else {
			patientsHtml = this.props.patient.patients.map((patient, key ) => {
				return (
					<div key= {key} style= {patientContainer}>
						<p> Name: {patient.firstname} {patient.lastname} </p>
						<p> Age: {patient.age} </p>
						<p> Gender: {patient.gender} </p>
					</div>
				);
			});
			
			
		}
		return (
			<div>
				{patientsHtml}
			</div>


		);

	}
}



export default connect((state) => {
	return {
		patient: state.patients,
		login: state.login
	};
})(Patient);
