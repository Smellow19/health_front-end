import LoginConstants from './LoginConstants';

const initState = {
	user: {},
	error: '',
};

const LoginReducer = (state = initState, action) => {
	switch (action.type) {
		// Login Swtich Cases
		case LoginConstants.HANDLE_LOGIN: {
			return { 
				...state, 
				popularProducts: action.payload, 
				error: '' 
			};
		}

	}



	return state;
};

export default LoginReducer;