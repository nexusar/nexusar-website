import { db } from '../services/firebase.js';

// Add uid for a valid employee to employee database
const addEmployeeUserIDToDB = (user) => {
  db.collection('EmployeeDatabase').doc(user.email).update({ uid: user.uid });
};

// Check if employee is valid or not
export const checkEmployeeExists = (user, setIsEmployee) => {
  const userEmail = user.email;
  const docRef = db.collection('EmployeeDatabase').doc(userEmail);
  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        setIsEmployee(true);
        addEmployeeUserIDToDB(user);
      } else setIsEmployee(false);
    })
    .catch((error) => alert(`The following error was thrown: ${error}. Please contact support.`));
};

// Employee Personal Information
export const postEmployeePersonalInfo = (uid, formData) => {
  db.collection('EmployeePersonalInfo').doc(uid).set(formData);
};

export const getEmployeePersonalInfo = (uid, setPersonalData) => {
  const docRef = db.collection('EmployeePersonalInfo').doc(uid);
  docRef
    .get()
    .then((doc) => {
      if (doc.exists) setPersonalData(doc.data());
    })
    .catch((error) => alert(`The following error was thrown: ${error}. Please contact support.`));
};

// Employee Academic Information
export const postEmployeeAcademicInfo = (uid, formData) => {
  db.collection('EmployeeAcademicInfo').doc(uid).set(formData);
};

export const getEmployeeAcademicInfo = (uid, setAcademicData) => {
  const docRef = db.collection('EmployeeAcademicInfo').doc(uid);
  docRef
    .get()
    .then((doc) => {
      if (doc.exists) setAcademicData(doc.data());
    })
    .catch((error) => alert(`The following error was thrown: ${error}. Please contact support.`));
};

// Employee Work Information
export const postEmployeeWorkInfo = (uid, formData) => {
  db.collection('EmployeeWorkInfo').doc(uid).set(formData);
};

export const getEmployeeWorkInfo = (uid, setWorkData) => {
  const docRef = db.collection('EmployeeWorkInfo').doc(uid);
  docRef
    .get()
    .then((doc) => {
      if (doc.exists) setWorkData(doc.data());
    })
    .catch((error) => alert(`The following error was thrown: ${error}. Please contact support.`));
};

export const getEmployeeProprietaryWorkInfo = (userEmail, setProprietaryWorkData) => {
  const docRef = db.collection('EmployeeDatabase').doc(userEmail);
  docRef
    .get()
    .then((doc) => {
      if (doc.exists) setProprietaryWorkData(doc.data());
    })
    .catch((error) => alert(`The following error was thrown: ${error}. Please contact support.`));
};

// Employee Skill Information
export const postEmployeeSkillInfo = (uid, formData) => {
  db.collection('EmployeeSkillInfo').doc(uid).set(formData);
};

export const getEmployeeSkillInfo = (uid, setSkillData) => {
  const docRef = db.collection('EmployeeSkillInfo').doc(uid);
  docRef
    .get()
    .then((doc) => {
      if (doc.exists) setSkillData(doc.data());
    })
    .catch((error) => alert(`The following error was thrown: ${error}. Please contact support.`));
};

// Employee Bank Information
export const postEmployeeBankInfo = (uid, formData) => {
  db.collection('EmployeeBankInfo').doc(uid).set(formData);
};

export const getEmployeeBankInfo = (uid, setBankData) => {
  const docRef = db.collection('EmployeeBankInfo').doc(uid);
  docRef
    .get()
    .then((doc) => {
      if (doc.exists) setBankData(doc.data());
    })
    .catch((error) => alert(`The following error was thrown: ${error}. Please contact support.`));
};

// List all supervised employees under an employee
// Send data back as - List of Objects - [{uid: , name: , position: },{...},{...}]
export const getSupervisedEmployeesList = (user, setSupervisedEmployees) => {
  const userEmail = user.email;
  const colRef = db
    .collection('EmployeeDatabase')
    .where('uid', '!=', null)
    .where('superiorsList', 'array-contains', `${userEmail}`);
  colRef
    .get()
    .then((querySnapshot) => {
      const supervisedEmployees = [];
      querySnapshot.forEach((doc) => {
        supervisedEmployees.push(doc.data());
      });
      setSupervisedEmployees(supervisedEmployees);
    })
    .catch((error) => {
      alert(`The following error was thrown: ${error}. Please contact support.`);
    });
};
