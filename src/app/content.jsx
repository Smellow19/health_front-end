import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../domain/login/Login';
import PatientList from '../domain/patient/PatientList';


class Content extends React.Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path='/' component={Login} />
					<Route path='/patients' component={PatientList} />
					{/* <Route component={NotFound} /> */}
				</Switch>
			</div>

		);
	}
}

export default Content;