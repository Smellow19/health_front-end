import { put, takeEvery } from 'redux-saga/effects';
import LoginConstants from '../domain/login/LoginConstants';
import * as LoginActions from '../domain/login/LoginActions';


export function* WatchAll() {
	yield [
		takeEvery(LoginConstants.GET_USER_SAGA, getUser),


	];
}

export function* getUser(action) {
	let answer = '';
	let myHeaders = new Headers({
		'Content-Type': 'application/json',
		'mode': 'cors'
	});
	let data = yield fetch(`http://localhost:8080/user/login?email=${action.email}`, {
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
		answer = `There was an error ${err}`;
	});
	yield put(LoginActions.getUser(data));
}