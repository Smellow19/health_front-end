import LoginConstants from './LoginConstants';

const initState = {
	payload: {
		email: 'pwilliams@superhealth.com',
		password: 'password'
	},
	user: {
		roles: ['user', 'user']
	},
	error: '',
	isLoggedIn: false,
	jwt: ''
};

const LoginReducer = (state = initState, action) => {
	switch (action.type) {
		// Login switch Cases
		case LoginConstants.HANDLE_LOGIN: {
			return { 
				...state,
				payload: {
					...state.payload,
					[action.name]: action.value
				} 
			};
		}

		case LoginConstants.HANDLE_GET_USER_SAGA: {
			return {
				...state,
				payload: action.payload
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
				user: {
					roles: ['user', 'user']
				},
				error: 'Successfully Logged out',
				email: '',
				password: '',
				isLoggedIn: false,
			};
		}

		case LoginConstants.HANDLE_ERROR: {
			return {
				...state,
				error: action.error,
			};
		}

		default: {
			1 + 2;
		}

	}



	return state;
};

export default LoginReducer;