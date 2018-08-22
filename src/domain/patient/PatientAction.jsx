import PatientConstant from './PatientConstant';




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

export const handleCreatePatient = (name, value) => {
	return {
		type: PatientConstant.HANDLE_CREATE_PATIENTS,
		name: name,
		value: value,
	};
};

export const handleCreatePatientAddress = (name, value) => {
	return {
		type: PatientConstant.HANDLE_CREATE_PATIENTS_ADDRESS,
		name: name,
		value: value,
	};
};

export const handleCreatePatientSaga = (patient) => {
	return {
		type: PatientConstant.HANDLE_CREATE_PATIENTS_SAGA,
		patient: patient,
	};
};


