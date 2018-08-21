import { put, takeEvery } from 'redux-saga/effects';
import LoginConstants from '../domain/login/LoginConstants';
import * as LoginActions from '../domain/login/LoginActions';
import PatientConstants from '../domain/patient/PatientConstant';
import * as PatientActions from '../domain/patient/PatientAction';


export function* WatchAll() {
	yield [
		takeEvery(LoginConstants.HANDLE_GET_USER_SAGA, getUserSaga),
		takeEvery(PatientConstants.HANDLE_GET_PATIENTS_SAGA, getPatientsSaga),


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
		yield put(LoginActions.handleErrors(''));
	} else {
		let bool = false;
		yield put(LoginActions.handleErrors(
			'There were issues connecting to the database, please check your connection and try again.'
		));
	}
}
