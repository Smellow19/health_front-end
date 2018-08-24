import PatientConstants from './PatientConstant';

const initState = {
	patients: [],
	patient: {},
	createredirect: false,
	viewredirect: false,
	editredirect: false,
	createPatient:{
		gender: 'Male',
	},
	updatePatient: {

	},
	encounters: 0,
};


const PatientReducer = (state = initState, action) => {
	switch (action.type) {
		// Login Swtich Cases
		case PatientConstants.HANDLE_GET_PATIENTS: {
			return {
				...state,
				patients: action.patients
			};
		}

		case PatientConstants.HANDLE_GET_SINGLE_PATIENT: {
			return {
				...state,
				updatePatient: action.patient,
				patient: action.patient
			};
		}

		case PatientConstants.HANDLE_GET_SINGLE_PATIENT_ENCOUNTERS: {
			return {
				...state,
				encounters: action.encounters
			};
		}

		case PatientConstants.HANDLE_UPDATE_SINGLE_PATIENT_INFO: {
			return {
				...state,
				patient: action.patient
			};
		}

		case PatientConstants.HANDLE_CREATE_PATIENTS: {
			return {
				...state,
				createPatient: {
					...state.createPatient,
					[action.name]: action.value,
				}
			};
		}

		case PatientConstants.HANDLE_CREATE_PATIENTS_ADDRESS: {
			return {
				...state,
				createPatient: {
					...state.createPatient,
					address: {
						...state.createPatient.address,
						[action.name]: action.value
					}
				}
			};
		}

		case PatientConstants.HANDLE_EDIT_PATIENTS: {
			return {
				...state,
				updatePatient: {
					...state.updatePatient,
					[action.name]: action.value,
				}
			};
		}

		case PatientConstants.HANDLE_EDIT_PATIENTS_ADDRESS: {
			return {
				...state,
				updatePatient: {
					...state.updatePatient,
					address: {
						...state.updatePatient.address,
						[action.name]: action.value
					}
				}
			};
		}

		case PatientConstants.HANDLE_CREATE_REDIRECT: {
			return {
				...state,
				createredirect: action.bool
			};
		}

		case PatientConstants.HANDLE_VIEW_REDIRECT: {
			return {
				...state,
				viewredirect: action.bool
			};
		}

		case PatientConstants.HANDLE_EDIT_REDIRECT: {
			return {
				...state,
				editredirect: action.bool
			};
		}

		

	}



	return state;
};

export default PatientReducer;