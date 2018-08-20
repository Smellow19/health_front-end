import { combineReducers } from 'redux';
import LoginReducer from '../domain/login/LoginReducer';




const defaultReducers = combineReducers({
	login: LoginReducer,
});

export default defaultReducers;