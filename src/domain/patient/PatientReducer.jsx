import PatientConstants from './PatientConstant';

const initState = {
	patients: [],
	createPatient:{}
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

		

	}



	return state;
};

export default PatientReducer;