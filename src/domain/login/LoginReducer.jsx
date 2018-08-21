import LoginConstants from './LoginConstants';

const initState = {
	user: {},
	error: '',
	email: 'werickson@superhealth.com',
	password: 'password',
	isLoggedIn: false,
};

const LoginReducer = (state = initState, action) => {
	switch (action.type) {
		// Login Swtich Cases
		case LoginConstants.HANDLE_LOGIN: {
			return { 
				...state, 
				[action.name]: action.value
			};
		}

		case LoginConstants.HANDLE_GET_USER_SAGA: {
			return {
				...state,
				email: action.email,
				password: action.password
			};
		}

		case LoginConstants.HANDLE_GET_USER: {
			return {
				...state,
				user: action.user,
			};
		}

		case LoginConstants.HANDLE_IS_LOGGED_IN: {
			return {
				...state,
				isLoggedIn: action.bool,
			};
		}

		case LoginConstants.HANDLE_IS_LOGGED_OUT: {
			return {
				...state,
				user: {},
				error: 'Successfully Logged out',
				email: '',
				password: '',
				isLoggedIn: false,
			}
		}

		case LoginConstants.HANDLE_ERROR: {
			return {
				...state,
				error: action.error,
			};
		}

	}



	return state;
};

export default LoginReducer;