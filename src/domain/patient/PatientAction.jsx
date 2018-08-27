import PatientConstant from './PatientConstant';



//Gets all Patients saga action
export const handleGetPatientsSaga = () => {
	return {
		type: PatientConstant.HANDLE_GET_PATIENTS_SAGA,
	};
};

//Upon successful fetch call to the database, this will set "Patients" to the array of all patients in the DB.
export const handleGetPatients = (patientList) => {
	return {
		type: PatientConstant.HANDLE_GET_PATIENTS,
		patients: patientList,
	};
};

//sets each key and value when creating a patient
export const handleCreatePatient = (name, value) => {
	return {
		type: PatientConstant.HANDLE_CREATE_PATIENTS,
		name: name,
		value: value,
	};
};

//sets each key and value when creating a patient, goes down a step to access the address object inside of patient.
export const handleCreatePatientAddress = (name, value) => {
	return {
		type: PatientConstant.HANDLE_CREATE_PATIENTS_ADDRESS,
		name: name,
		value: value,
	};
};

//sets each key and value when creating a patient
export const handleEditPatient = (name, value) => {
	return {
		type: PatientConstant.HANDLE_EDIT_PATIENTS,
		name: name,
		value: value,
	};
};

//sets each key and value when creating a patient, goes down a step to access the address object inside of patient.
export const handleEditPatientAddress = (name, value) => {
	return {
		type: PatientConstant.HANDLE_EDIT_PATIENTS_ADDRESS,
		name: name,
		value: value,
	};
};

//Create Patient saga action
export const handleCreatePatientSaga = (patient) => {
	return {
		type: PatientConstant.HANDLE_CREATE_PATIENTS_SAGA,
		patient: patient,
	};
};

//Gets single Patient saga action
export const handleGetSinglePatientSaga = (ssn) => {
	return {
		type: PatientConstant.HANDLE_GET_SINGLE_PATIENT_SAGA,
		ssn: ssn,
	};
};

//passes the data from the single patient saga to the store 
export const handleGetSinglePatient = (patient) => {
	return {
		type: PatientConstant.HANDLE_GET_SINGLE_PATIENT,
		patient: patient,
	};
};
//Passes data from the edited patient to the saga 
export const handleEditSinglePatientSaga = (ssn, patient) => {
	return {
		type: PatientConstant.HANDLE_EDIT_SINGLE_PATIENT_SAGA,
		ssn: ssn,
		patient: patient,
	};
};


//Sets the amount of encounters a patient has in the store
export const handleGetSinglePatientEncounters = (encounters) => {
	return {
		type: PatientConstant.HANDLE_GET_SINGLE_PATIENT_ENCOUNTERS,
		encounters: encounters,
	};
};

//Passes patient ID into database to get the encounters of patient
export const handleGetSinglePatientEncountersSaga = (patientId) => {
	return {
		type: PatientConstant.HANDLE_GET_SINGLE_PATIENT_ENCOUNTERS_SAGA,
		patientId: patientId,
	};
};

//updates store state due to lack of info change without a fetch call
export const handleUpdateSinglePatientInfo = (patient) => {
	return {
		type: PatientConstant.HANDLE_UPDATE_SINGLE_PATIENT_INFO,
		patient: patient,
	};
};

//Handles deleting a patient from the database
export const handleDeletePatient = (ssn, encounters) => {
	console.log(ssn)
	return {
		type: PatientConstant.HANDLE_DELETE_SINGLE_PATIENT_SAGA,
		ssn: ssn,
		encounters: encounters
	};
};

//handles the redirect from the create_patient page
export const handleCreateRedirect = (bool) => {
	return {
		type: PatientConstant.HANDLE_CREATE_REDIRECT,
		bool: bool,
	};
};

//handles the redirect from the edit_patient page
export const handleEditRedirect = (bool) => {
	return {
		type: PatientConstant.HANDLE_EDIT_REDIRECT,
		bool: bool,
	};
};

//handles the redirect from the view_patient page
export const handleViewRedirect = (bool) => {
	return {
		type: PatientConstant.HANDLE_VIEW_REDIRECT,
		bool: bool,
	};
};

export const handleHomeRedirect = (bool) => {
	return {
		type: PatientConstant.HANDLE_HOME_REDIRECT,
		bool: bool,
	};
};


