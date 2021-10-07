import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useHistory } from 'react-router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState, useEffect } from 'react';
import { auth } from '../../services/firebase';
import useInput from '../../hooks/use-input';
import InputField from '../ui/input-field/InputField';
import InputFile from '../ui/input-file/InputFile';
import Loading from '../../pages/Loading';
import { getEmployeeAcademicInfo, postEmployeeAcademicInfo } from '../../services/firestore-queries';
import SuccessSnackbar from './SuccessSnackbar';

const isNotEmpty = (value) => value.trim() !== '';

const AcademicInfo = () => {
  const history = useHistory();
  const [user, loading, error] = useAuthState(auth);
  const [academicData, setAcademicData] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (error) alert(error);
    if (loading) return <Loading />;
    if (!user) history.replace('/login');
    if (user) getEmployeeAcademicInfo(user.uid, setAcademicData);
  }, [user, loading, error, history]);

  const [resumeValue, setResumeValue] = useState('');
  const [UGGradeSheetValue, setUGGradeSheetValue] = useState('');
  const [UGDegreeSheetValue, setUGDegreeSheetValue] = useState('');
  const [PGGradeSheetValue, setPGGradeSheetValue] = useState('');
  const [PGDegreeSheetValue, setPGDegreeSheetValue] = useState('');
  let resumeIsValid = false;

  useEffect(() => {
    setResumeValue(academicData.resumeValue);
    setUGGradeSheetValue(academicData.UGGradeSheetValue);
    setUGDegreeSheetValue(academicData.UGDegreeSheetValue);
    setPGGradeSheetValue(academicData.PGGradeSheetValue);
    setPGDegreeSheetValue(academicData.PGDegreeSheetValue);
  }, [
    academicData.resumeValue,
    academicData.UGGradeSheetValue,
    academicData.UGDegreeSheetValue,
    academicData.PGGradeSheetValue,
    academicData.PGDegreeSheetValue,
  ]);

  if (resumeValue) resumeIsValid = isNotEmpty(resumeValue);

  const {
    value: linkedinProfileValue,
    isValid: linkedinProfileIsValid,
    hasError: linkedinProfileHasError,
    valueChangeHandler: linkedinProfileChangeHandler,
    inputBlurHandler: linkedinProfileBlurHandler,
    reset: resetLinkedinProfile,
  } = useInput(isNotEmpty, academicData.linkedinProfileValue, academicData);

  const {
    value: emailAddressValue,
    isValid: emailAddressIsValid,
    hasError: emailAddressHasError,
    valueChangeHandler: emailAddressChangeHandler,
    inputBlurHandler: emailAddressBlurHandler,
    reset: resetEmailAddress,
  } = useInput(isNotEmpty, academicData.emailAddressValue);

  const {
    value: officalEmailAddressValue,
    isValid: officalEmailAddressIsValid,
    hasError: officalEmailAddressHasError,
    valueChangeHandler: officalEmailAddressChangeHandler,
    inputBlurHandler: officalEmailAddressBlurHandler,
    reset: resetOfficalEmailAddress,
  } = useInput(isNotEmpty, academicData.officalEmailAddressValue);

  const {
    value: UGCollegeNameValue,
    isValid: UGCollegeNameIsValid,
    hasError: UGCollegeNameHasError,
    valueChangeHandler: UGCollegeNameChangeHandler,
    inputBlurHandler: UGCollegeNameBlurHandler,
    reset: resetUGCollegeName,
  } = useInput(isNotEmpty, academicData.UGCollegeNameValue);

  const {
    value: UGCGPAValue,
    isValid: UGCGPAIsValid,
    hasError: UGCGPAHasError,
    valueChangeHandler: UGCGPAChangeHandler,
    inputBlurHandler: UGCGPABlurHandler,
    reset: resetUGCGPA,
  } = useInput(isNotEmpty, academicData.UGCGPAValue);

  const {
    value: PGCollegeNameValue,
    isValid: PGCollegeNameIsValid,
    hasError: PGCollegeNameHasError,
    valueChangeHandler: PGCollegeNameChangeHandler,
    inputBlurHandler: PGCollegeNameBlurHandler,
    reset: resetPGCollegeName,
  } = useInput(isNotEmpty, academicData.PGCollegeNameValue);

  const {
    value: PGCGPAValue,
    isValid: PGCGPAIsValid,
    hasError: PGCGPAHasError,
    valueChangeHandler: PGCGPAChangeHandler,
    inputBlurHandler: PGCGPABlurHandler,
    reset: resetPGCGPA,
  } = useInput(isNotEmpty, academicData.PGCGPAValue);

  const formIsValid =
    resumeIsValid &&
    linkedinProfileIsValid &&
    emailAddressIsValid &&
    officalEmailAddressIsValid &&
    UGCollegeNameIsValid &&
    UGCGPAIsValid &&
    PGCollegeNameIsValid &&
    PGCGPAIsValid;

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;

    const formData = {
      resumeValue,
      linkedinProfileValue,
      emailAddressValue,
      officalEmailAddressValue,
      UGCollegeNameValue,
      UGCGPAValue,
      UGGradeSheetValue,
      UGDegreeSheetValue,
      PGCollegeNameValue,
      PGCGPAValue,
      PGGradeSheetValue,
      PGDegreeSheetValue,
    };

    postEmployeeAcademicInfo(user.uid, formData);
    setOpen(true);

    resetLinkedinProfile();
    resetEmailAddress();
    resetOfficalEmailAddress();
    resetUGCollegeName();
    resetUGCGPA();
    resetPGCollegeName();
    resetPGCGPA();
  };

  return (
    <Container sx={{ py: 4 }}>
      <h2>Your academic information.</h2>
      <p>This section has all the information about your acads.</p>
      <Box sx={{ pb: 4 }}></Box>

      <form onSubmit={formSubmitHandler}>
        <Grid container spacing="12">
          <Grid item xs={12} sm={6}>
            <InputFile
              label="Upload Resume (in PDF format)"
              value={resumeValue}
              folderName={user.uid}
              setValue={setResumeValue}
              placeholder="Upload your Resume"
              field="resumeValue"
              collectionName="EmployeeAcademicInfo"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              label="Linkedin Profile URL"
              type="url"
              valueChangeHandler={linkedinProfileChangeHandler}
              inputBlurHandler={linkedinProfileBlurHandler}
              hasError={linkedinProfileHasError}
              value={linkedinProfileValue}
              placeholder="https://www.linkedin.com/in/ab-satyaprakash/"
            />
          </Grid>
        </Grid>

        <Grid container spacing="12">
          <Grid item xs={12} sm={6}>
            <InputField
              label="Email Adress"
              type="email"
              valueChangeHandler={emailAddressChangeHandler}
              inputBlurHandler={emailAddressBlurHandler}
              hasError={emailAddressHasError}
              value={emailAddressValue}
              placeholder="mark.zuckerberg@gmail.com"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              label="Offical Email Address"
              type="email"
              valueChangeHandler={officalEmailAddressChangeHandler}
              inputBlurHandler={officalEmailAddressBlurHandler}
              hasError={officalEmailAddressHasError}
              value={officalEmailAddressValue}
              placeholder="mark.zuckerberg@facebook.com"
            />
          </Grid>
        </Grid>

        <Grid container spacing="12">
          <Grid item xs={12} sm={6}>
            <InputField
              label="UG College Name"
              type="text"
              valueChangeHandler={UGCollegeNameChangeHandler}
              inputBlurHandler={UGCollegeNameBlurHandler}
              hasError={UGCollegeNameHasError}
              value={UGCollegeNameValue}
              placeholder="IIT Guwahati"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              label="UG CGPA (or current CGPA)"
              type="number"
              valueChangeHandler={UGCGPAChangeHandler}
              inputBlurHandler={UGCGPABlurHandler}
              hasError={UGCGPAHasError}
              value={UGCGPAValue}
              placeholder="9.02"
            />
          </Grid>
        </Grid>

        <Grid container spacing="12">
          <Grid item xs={12} sm={6}>
            <InputFile
              label="Upload UG Gradesheet (in PDF Format)"
              value={UGGradeSheetValue}
              folderName={user.uid}
              setValue={setUGGradeSheetValue}
              placeholder="Upload your UG Gradesheet"
              field="UGGradeSheetValue"
              collectionName="EmployeeAcademicInfo"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputFile
              label="Upload UG Degree (in PDF Format)"
              value={UGDegreeSheetValue}
              folderName={user.uid}
              setValue={setUGDegreeSheetValue}
              placeholder="Upload your UG Degreesheet"
              field="UGDegreeSheetValue"
              collectionName="EmployeeAcademicInfo"
            />
          </Grid>
        </Grid>

        <Grid container spacing="12">
          <Grid item xs={12} sm={6}>
            <InputField
              label="PG College Name"
              type="text"
              valueChangeHandler={PGCollegeNameChangeHandler}
              inputBlurHandler={PGCollegeNameBlurHandler}
              hasError={PGCollegeNameHasError}
              value={PGCollegeNameValue}
              placeholder="MIT"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              label="PG CGPA (or current CGPA)"
              type="number"
              valueChangeHandler={PGCGPAChangeHandler}
              inputBlurHandler={PGCGPABlurHandler}
              hasError={PGCGPAHasError}
              value={PGCGPAValue}
              placeholder="3.92"
            />
          </Grid>
        </Grid>

        <Grid container spacing="12">
          <Grid item xs={12} sm={6}>
            <InputFile
              label="Upload PG Gradesheet (in PDF Format)"
              value={PGGradeSheetValue}
              folderName={user.uid}
              setValue={setPGGradeSheetValue}
              placeholder="Upload your PG Gradesheet"
              field="PGGradeSheetValue"
              collectionName="EmployeeAcademicInfo"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputFile
              label="Upload PG Degree (in PDF Format)"
              value={PGDegreeSheetValue}
              folderName={user.uid}
              setValue={setPGDegreeSheetValue}
              placeholder="Upload your PG Degreesheet"
              field="PGDegreeSheetValue"
              collectionName="EmployeeAcademicInfo"
            />
          </Grid>
        </Grid>

        <Grid container sx={{ py: 4 }}>
          <Grid item xs={12} sm={4}>
            <button className="form-button" type="submit" disabled={!formIsValid}>
              Update Academic Information
            </button>
          </Grid>
        </Grid>
      </form>
      <SuccessSnackbar open={open} setOpen={setOpen} />
    </Container>
  );
};

export default AcademicInfo;
