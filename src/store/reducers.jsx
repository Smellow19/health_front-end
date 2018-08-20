import { combineReducers } from 'redux';
import LoginReducer from '../domain/login/LoginReducer';
import PatientReducer from '../domain/patient/PatientReducer';




const defaultReducers = combineReducers({
	login: LoginReducer,
	patients: PatientReducer,
});

export default defaultReducers;