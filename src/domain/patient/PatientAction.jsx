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

