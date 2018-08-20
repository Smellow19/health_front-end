import LoginConstants from './LoginConstants';

export const handleLogin = (email) => {
	return {
		type: LoginConstants.HANDLE_LOGIN,
		email: email
	};
};