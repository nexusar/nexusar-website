import { db, storage } from '../services/firebase.js';

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
  db.collection('EmployeePersonalInfo').doc(uid).update(formData);
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

// Upload a file to Firebase Storage and get back a link - request file name and folder name (use UID)
export const uploadFileToStorage = (
  field,
  file,
  fileName,
  folderName,
  setUploading,
  setFileSrc,
  collectionName,
  setOpen
) => {
  if (file) {
    setUploading(true);
    setFileSrc('');
    const storageRef = storage.ref();
    const imageRef = storageRef.child(`${folderName}/${fileName}.${file.name.split('.').pop()}`);
    imageRef
      .put(file)
      .then(() => {
        imageRef.getDownloadURL().then((url) => {
          const uid = folderName;
          const docRef = db.collection(collectionName).doc(uid);

          docRef
            .get()
            .then((doc) => {
              if (doc.exists) docRef.update({ [field]: url });
              else docRef.set({ [field]: url });
            })
            .catch((error) => docRef.set({ [field]: url }));

          setFileSrc(url);
          setUploading(false);
          if (setOpen) setOpen(true);
        });
      })
      .catch((error) => {
        alert(`The following error was thrown: ${error}. Please contact support.`);
      });
  } else {
    alert(`Please select a file first`);
  }
};

// Get a list of all employees other than the DB adminstrator
export const getAllEmployeesList = (setAllEmployees) => {
  const colRef = db.collection('EmployeeDatabase');
  colRef
    .get()
    .then((col) => {
      if (col) {
        const allDocsData = col.docs.map((doc) => {
          const data = doc.data();
          return { ...data, email: doc.id };
        });
        setAllEmployees(allDocsData);
      } else console.log('Collection does not exist');
    })
    .catch((error) => alert(`The following error was thrown: ${error}. Please contact support.`));
};
