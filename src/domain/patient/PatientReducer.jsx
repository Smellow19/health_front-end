import PatientConstants from './PatientConstant';

const initState = {
	patients: [],
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

		

	}



	return state;
};

export default PatientReducer;