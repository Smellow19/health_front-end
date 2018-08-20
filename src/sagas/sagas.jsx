import { put, takeEvery } from 'redux-saga/effects';
import LoginConstants from '../domain/login/LoginConstants';
import * as LoginActions from '../domain/login/LoginActions';


export function* WatchAll() {
	yield [
		takeEvery(LoginConstants.HANDLE_GET_USER_SAGA, getUserSaga),


	];
}

export function* getUserSaga(action) {
	let answer = '';
	let myHeaders = new Headers({
		'Content-Type': 'application/json',
		'mode': 'cors'
	});
	console.log(action.email);
	let data = yield fetch(`http://localhost:8080/user/login?email=${action.email}&password=${action.password}`, {
		method: 'GET',
		headers: myHeaders
	}).then((response) => {
		console.log(response);
		if (!response.ok) {
			throw response;
		}
		return response.json();
	}).then((data) => {
		console.log(data);
		return data;
	}).catch(err => {

	});

	if(data !== undefined) {
		yield put(LoginActions.getUser(data));
		yield put(LoginActions.handleErrors('Login Successful'));	
	} else {
		yield put(LoginActions.handleErrors('User Not Found'));
	}
}