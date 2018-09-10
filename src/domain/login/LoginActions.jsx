import LoginConstants from './LoginConstants';
import jwt_decode from 'jwt-decode';

//Updates state to the user's inputted email and password.
export const handleLogin = (name, value) => {
	return {
		type: LoginConstants.HANDLE_LOGIN,
		name: name,
		value: value
	};
};
//Takes email and password from state and passes it into the fetch call.
export const getUserSaga = (payload) => {
	return {
		type: LoginConstants.HANDLE_GET_USER_SAGA,
		payload: payload
	};
};
//Upon successful fetch, This sets the User inside of the store.
export const getUser = (data) => {
	return {
		type: LoginConstants.HANDLE_GET_USER,
		user: data
	};
};

export const handleIsLoggedIn = (bool) => {
	return {
		type: LoginConstants.HANDLE_IS_LOGGED_IN,
		bool: bool,
	};
};

export const handleIsLoggedOut = () => {
	return {
		type: LoginConstants.HANDLE_IS_LOGGED_OUT,
	};
};

export const handleErrors = (error) => {
	return {
		type: LoginConstants.HANDLE_ERROR,
		error: error
	};
};