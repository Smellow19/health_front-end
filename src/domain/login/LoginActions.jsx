import LoginConstants from './LoginConstants';

//Updates state to the user's inputted email and password.
export const handleLogin = (name, value) => {
	return {
		type: LoginConstants.HANDLE_LOGIN,
		name: name,
		value: value
	};
};
//Takes email and password from state and passes it into the fetch call.
export const getUserSaga = (email, password) => {
	return {
		type: LoginConstants.HANDLE_GET_USER_SAGA,
		email: email,
		password: password 
	};
};
//Upon successful fetch, This sets the User inside of the store.
export const getUser = (user) => {
	return {
		type: LoginConstants.HANDLE_GET_USER,
		user: user
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