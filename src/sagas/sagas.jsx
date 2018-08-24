import { put, takeEvery } from 'redux-saga/effects';
import LoginConstants from '../domain/login/LoginConstants';
import * as LoginActions from '../domain/login/LoginActions';
import PatientConstants from '../domain/patient/PatientConstant';
import * as PatientActions from '../domain/patient/PatientAction';


export function* WatchAll() {
	yield [
		takeEvery(LoginConstants.HANDLE_GET_USER_SAGA, getUserSaga),
		takeEvery(PatientConstants.HANDLE_GET_PATIENTS_SAGA, getPatientsSaga), //Multiple Patients
		takeEvery(PatientConstants.HANDLE_CREATE_PATIENTS_SAGA, CreateNewPatientsSaga),
		takeEvery(PatientConstants.HANDLE_GET_SINGLE_PATIENT_SAGA, getPatientSaga), //Single Patient
		takeEvery(PatientConstants.HANDLE_EDIT_SINGLE_PATIENT_SAGA, updatePatientSaga),
		takeEvery(PatientConstants.HANDLE_GET_SINGLE_PATIENT_ENCOUNTERS_SAGA, getPatientEncountersSaga),
		takeEvery(PatientConstants.HANDLE_DELETE_SINGLE_PATIENT_SAGA, DeletePatientSaga),


	];
}
// LOGIN SAGAS
export function* getUserSaga(action) {
	let answer = '';
	let myHeaders = new Headers({
		'Content-Type': 'application/json',
		'mode': 'cors'
	});
	let data = yield fetch(`http://localhost:8080/user/login?email=${action.email}&password=${action.password}`, {
		method: 'GET',
		headers: myHeaders
	}).then((response) => {
		if (!response.ok) {
			throw response;
		}
		return response.json();
	}).then((data) => {
		return data;
	}).catch(err => {

	});

	if(data !== undefined) {
		let bool = true;
		yield put(LoginActions.getUser(data));
		yield put(LoginActions.handleErrors('Login Successful'));
		yield put(LoginActions.handleIsLoggedIn(bool));
		yield put(LoginActions.handleErrors(''));
	} else {
		let bool = false;
		yield put(LoginActions.handleIsLoggedIn(bool));
		yield put(LoginActions.handleErrors('User Not Found'));
	}
}

//PATIENT SAGAS
export function* getPatientsSaga(action) {
	let answer = '';
	let myHeaders = new Headers({
		'Content-Type': 'application/json',
		'mode': 'cors'
	});
	let data = yield fetch('http://localhost:8080/patients/all_patients', {
		method: 'GET',
		headers: myHeaders
	}).then((response) => {
		if (!response.ok) {
			throw response;
		}
		return response.json();
	}).then((data) => {
		return data;
	}).catch(err => {

	});

	if (data !== undefined) {
		yield put(PatientActions.handleGetPatients(data));
	} else {
		let bool = false;
		yield put(LoginActions.handleErrors(
			'There were issues connecting to the database, please check your connection and try again.'
		));
	}
}

export function* getPatientSaga(action) {
	let answer = '';
	let myHeaders = new Headers({
		'Content-Type': 'application/json',
		'mode': 'cors'
	});
	let data = yield fetch(`http://localhost:8080/patients/find_patient?ssn=${action.ssn}`, {
		method: 'GET',
		headers: myHeaders
	}).then((response) => {
		if (!response.ok) {
			throw response;
		}
		return response.json();
	}).then((data) => {
		return data;
	}).catch(err => {

	});

	if (data !== undefined) {
		yield put(PatientActions.handleGetSinglePatient(data));
	} else {
		let bool = false;
		yield put(LoginActions.handleErrors(
			'There were issues connecting to the database, please check your connection and try again.'
		));
	}
}

export function* updatePatientSaga(action) {
	let answer = '';
	let myHeaders = new Headers({
		'Content-Type': 'application/json',
		'mode': 'cors'
	});
	let data = yield fetch(`http://localhost:8080/patients/update_patient?ssn=${action.ssn}`, {
		method: 'PUT',
		headers: myHeaders,
		body: JSON.stringify(action.patient) 

	}).then((response) => {
		if (!response.ok) {
			throw response;
		}
		return response.json();
	}).then((data) => {
		return data;
	}).catch(err => {
		return err;
	});

	if (data.status == 400 || data.status == 500) {
		yield put(LoginActions.handleErrors('Invalid user input.'));
	} else if (data.status == 404) {
		yield put(LoginActions.handleErrors('User Not found.'));
	} else {
		yield put(PatientActions.handleEditRedirect(true));
		yield put(PatientActions.handleUpdateSinglePatientInfo(action.patient));
	}
}

export function* getPatientEncountersSaga(action) {
	let answer = '';
	let myHeaders = new Headers({
		'Content-Type': 'application/json',
		'mode': 'cors'
	});
	let data = yield fetch(`http://localhost:8080/encounter/find_encounter?patientid=${action.patientId}`, {
		method: 'GET',
		headers: myHeaders
	}).then((response) => {
		if (!response.ok) {
			throw response;
		}
		return response.json();
	}).then((data) => {
		return data;
	}).catch(err => {
		return err;
	});
	yield put(PatientActions.handleGetSinglePatientEncounters(data));
	yield put(LoginActions.handleErrors(''));
}


export function* CreateNewPatientsSaga(action) {
	let answer = '';
	let myHeaders = new Headers({
		'Content-Type': 'application/json',
		'mode': 'cors'
	});
	let data = yield fetch('http://localhost:8080/patients/create_patient', {
		method: 'POST',
		headers: myHeaders,
		body: JSON.stringify(action.patient)
	}).then((response) => {
		if (!response.ok) {
			throw response;
		}
		return response.json();
	}).then((data) => {
		return data;
	}).catch(err => {
		return err;
	});

	if (data.status == 409) {
		yield put(LoginActions.handleErrors('There is already a user with this information'));
	} else if (data.status == 400 || data.status == 500) {
		yield put(LoginActions.handleErrors('Invalid user input.'));
	} else {
		yield put(PatientActions.handleCreateRedirect(true));
	}
}



export function* DeletePatientSaga(action) {
	console.log('delete saga')
	let answer = '';
	let myHeaders = new Headers({
		'Content-Type': 'application/json',
		'mode': 'cors'
	});
	let data = yield fetch(`http://localhost:8080/patients/delete_patient?ssn=${action.ssn}&encounters=${action.encounters}`, {
		method: 'DELETE',
		headers: myHeaders,
	}).then((response) => {
		console.log(response);
		if (!response.ok) {
			throw response;
		}
		return response.json();
	}).then((data) => {
		return data;
	}).catch(err => {
		console.log(err + "Err")
		return err;
	});

	if (data.status == 409) {
		console.log(data);
		console.log(data.status);
		console.log("fail");
		yield put(LoginActions.handleErrors('Can not delete patients with encounters.'));

	} else {
		console.log("Pass");
		yield put(LoginActions.handleErrors('Patient deleted'));
		yield put(PatientActions.handleViewRedirect(true));
	}
}

