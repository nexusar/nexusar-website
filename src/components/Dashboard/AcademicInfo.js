import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useHistory } from 'react-router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState, useEffect } from 'react';
import { auth } from '../../services/firebase';
import useInput from '../../hooks/use-input';
import InputField from '../ui/input-field/InputField';
import Loading from '../../pages/Loading';
import { getEmployeeAcademicInfo, postEmployeeAcademicInfo } from '../../services/firestore-queries';
import DashboardSnackbar from './DashboardSnackbar';

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

  const {
    value: resumeValue,
    isValid: resumeIsValid,
    hasError: resumeHasError,
    valueChangeHandler: resumeChangeHandler,
    inputBlurHandler: resumeBlurHandler,
    reset: resetResume,
  } = useInput(isNotEmpty);

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
    value: UGGradeSheetValue,
    isValid: UGGradeSheetIsValid,
    hasError: UGGradeSheetHasError,
    valueChangeHandler: UGGradeSheetChangeHandler,
    inputBlurHandler: UGGradeSheetBlurHandler,
    reset: resetUGGradeSheet,
  } = useInput(isNotEmpty);

  const {
    value: UGDegreeSheetValue,
    isValid: UGDegreeSheetIsValid,
    hasError: UGDegreeSheetHasError,
    valueChangeHandler: UGDegreeSheetChangeHandler,
    inputBlurHandler: UGDegreeSheetBlurHandler,
    reset: resetUGDegreeSheet,
  } = useInput(isNotEmpty);

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

  const {
    value: PGGradeSheetValue,
    isValid: PGGradeSheetIsValid,
    hasError: PGGradeSheetHasError,
    valueChangeHandler: PGGradeSheetChangeHandler,
    inputBlurHandler: PGGradeSheetBlurHandler,
    reset: resetPGGradeSheet,
  } = useInput(isNotEmpty);

  const {
    value: PGDegreeSheetValue,
    isValid: PGDegreeSheetIsValid,
    hasError: PGDegreeSheetHasError,
    valueChangeHandler: PGDegreeSheetChangeHandler,
    inputBlurHandler: PGDegreeSheetBlurHandler,
    reset: resetPGDegreeSheet,
  } = useInput(isNotEmpty);

  const formIsValid =
    // resumeIsValid &&
    linkedinProfileIsValid &&
    emailAddressIsValid &&
    officalEmailAddressIsValid &&
    UGCollegeNameIsValid &&
    UGCGPAIsValid &&
    // UGGradeSheetIsValid &&
    // UGDegreeSheetIsValid &&
    PGCollegeNameIsValid &&
    PGCGPAIsValid;
  // &&
  // PGGradeSheetIsValid &&
  // PGDegreeSheetIsValid;

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

    resetResume();
    resetLinkedinProfile();
    resetEmailAddress();
    resetOfficalEmailAddress();
    resetUGCollegeName();
    resetUGCGPA();
    resetUGGradeSheet();
    resetUGDegreeSheet();
    resetPGCollegeName();
    resetPGCGPA();
    resetPGGradeSheet();
    resetPGDegreeSheet();
  };

  return (
    <Container sx={{ py: 4 }}>
      <h2>Your academic information.</h2>
      <p>This section has all the information about your acads.</p>
      <Box sx={{ pb: 4 }}></Box>

      <form onSubmit={formSubmitHandler}>
        <Grid container spacing="12">
          <Grid item xs={12} sm={6}>
            <InputField
              label="Upload Resume (in PDF format)"
              type="file"
              valueChangeHandler={resumeChangeHandler}
              inputBlurHandler={resumeBlurHandler}
              hasError={resumeHasError}
              value={resumeValue}
              placeholder="Resume.pdf"
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
            <InputField
              label="Upload UG Gradesheet (in PDF Format)"
              type="file"
              valueChangeHandler={UGGradeSheetChangeHandler}
              inputBlurHandler={UGGradeSheetBlurHandler}
              hasError={UGGradeSheetHasError}
              value={UGGradeSheetValue}
              placeholder=""
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              label="Upload UG Degree (in PDF Format)"
              type="file"
              valueChangeHandler={UGDegreeSheetChangeHandler}
              inputBlurHandler={UGDegreeSheetBlurHandler}
              hasError={UGDegreeSheetHasError}
              value={UGDegreeSheetValue}
              placeholder=""
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
            <InputField
              label="Upload PG Gradesheet (in PDF Format)"
              type="file"
              valueChangeHandler={PGGradeSheetChangeHandler}
              inputBlurHandler={PGGradeSheetBlurHandler}
              hasError={PGGradeSheetHasError}
              value={PGGradeSheetValue}
              placeholder=""
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              label="Upload PG Degree (in PDF Format)"
              type="file"
              valueChangeHandler={PGDegreeSheetChangeHandler}
              inputBlurHandler={PGDegreeSheetBlurHandler}
              hasError={PGDegreeSheetHasError}
              value={PGDegreeSheetValue}
              placeholder=""
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
      <DashboardSnackbar open={open} setOpen={setOpen} />
    </Container>
  );
};

export default AcademicInfo;
