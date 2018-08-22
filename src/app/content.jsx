import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../domain/login/Login';
import PatientList from '../domain/patient/PatientList';
import newPatient from '../domain/patient/NewPatient';


class Content extends React.Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path='/' component={Login} />
					<Route path='/patients' component={PatientList} />
					<Route path='/create_patient' component={newPatient} />
					{/* <Route component={NotFound} /> */}
				</Switch>
			</div>

		);
	}
}

export default Content;