import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import useInput from '../../hooks/use-input';
import InputArea from '../ui/input-area/InputArea';
import InputField from '../ui/input-field/InputField';
import { useHistory } from 'react-router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState, useEffect } from 'react';
import { auth } from '../../services/firebase';
import Loading from '../../pages/Loading';
import SuccessSnackbar from './SuccessSnackbar';
import {
  getEmployeeProprietaryWorkInfo,
  getEmployeeWorkInfo,
  postEmployeeWorkInfo,
} from '../../services/firestore-queries';

const isNotEmpty = (value) => value.trim() !== '';

const WorkInfo = () => {
  const history = useHistory();
  const [user, loading, error] = useAuthState(auth);
  const [workData, setWorkData] = useState({});
  const [proprietaryWorkData, setProprietaryWorkData] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (error) alert(error);
    if (loading) return <Loading />;
    if (!user) history.replace('/login');
    if (user) {
      getEmployeeWorkInfo(user.uid, setWorkData);
      getEmployeeProprietaryWorkInfo(user.email, setProprietaryWorkData);
    }
  }, [user, loading, error, history]);

  const {
    value: departmentValue,
    isValid: departmentIsValid,
    hasError: departmentHasError,
    valueChangeHandler: departmentChangeHandler,
    inputBlurHandler: departmentBlurHandler,
    reset: resetDepartment,
  } = useInput(isNotEmpty, proprietaryWorkData.Department);

  const {
    value: positionValue,
    isValid: positionIsValid,
    hasError: positionHasError,
    valueChangeHandler: positionChangeHandler,
    inputBlurHandler: positionBlurHandler,
    reset: resetPosition,
  } = useInput(isNotEmpty, proprietaryWorkData.Position);

  const {
    value: managerValue,
    isValid: managerIsValid,
    hasError: managerHasError,
    valueChangeHandler: managerChangeHandler,
    inputBlurHandler: managerBlurHandler,
    reset: resetManager,
  } = useInput(isNotEmpty, proprietaryWorkData.Manager);

  const {
    value: teamLeadValue,
    isValid: teamLeadIsValid,
    hasError: teamLeadHasError,
    valueChangeHandler: teamLeadChangeHandler,
    inputBlurHandler: teamLeadBlurHandler,
    reset: resetTeamLead,
  } = useInput(isNotEmpty, proprietaryWorkData.TeamLead);

  const {
    value: projectsAssignedValue,
    isValid: projectsAssignedIsValid,
    hasError: projectsAssignedHasError,
    valueChangeHandler: projectsAssignedChangeHandler,
    inputBlurHandler: projectsAssignedBlurHandler,
    reset: resetProjectsAssigned,
  } = useInput(isNotEmpty, workData.projectsAssignedValue);

  const {
    value: workShiftValue,
    isValid: workShiftIsValid,
    hasError: workShiftHasError,
    valueChangeHandler: workShiftChangeHandler,
    inputBlurHandler: workShiftBlurHandler,
    reset: resetWorkShift,
  } = useInput(isNotEmpty, workData.workShiftValue);

  const {
    value: cabinNumberValue,
    isValid: cabinNumberIsValid,
    hasError: cabinNumberHasError,
    valueChangeHandler: cabinNumberChangeHandler,
    inputBlurHandler: cabinNumberBlurHandler,
    reset: resetCabinNumber,
  } = useInput(isNotEmpty, workData.cabinNumberValue);

  const {
    value: macSerialNumberValue,
    isValid: macSerialNumberIsValid,
    hasError: macSerialNumberHasError,
    valueChangeHandler: macSerialNumberChangeHandler,
    inputBlurHandler: macSerialNumberBlurHandler,
    reset: resetMacSerialNumber,
  } = useInput(isNotEmpty, workData.macSerialNumberValue);

  const {
    value: IPAddressValue,
    isValid: IPAddressIsValid,
    hasError: IPAddressHasError,
    valueChangeHandler: IPAddressChangeHandler,
    inputBlurHandler: IPAddressBlurHandler,
    reset: resetIPAddress,
  } = useInput(isNotEmpty, workData.IPAddressValue);

  const {
    value: MACAddressValue,
    isValid: MACAddressIsValid,
    hasError: MACAddressHasError,
    valueChangeHandler: MACAddressChangeHandler,
    inputBlurHandler: MACAddressBlurHandler,
    reset: resetMACAddress,
  } = useInput(isNotEmpty, workData.MACAddressValue);

  const formIsValid =
    departmentIsValid &&
    positionIsValid &&
    managerIsValid &&
    teamLeadIsValid &&
    projectsAssignedIsValid &&
    workShiftIsValid &&
    cabinNumberIsValid &&
    macSerialNumberIsValid &&
    IPAddressIsValid &&
    MACAddressIsValid;

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;

    const formData = {
      departmentValue,
      positionValue,
      managerValue,
      teamLeadValue,
      projectsAssignedValue,
      workShiftValue,
      cabinNumberValue,
      macSerialNumberValue,
      IPAddressValue,
      MACAddressValue,
    };

    postEmployeeWorkInfo(user.uid, formData);
    setOpen(true);

    resetDepartment();
    resetPosition();
    resetManager();
    resetTeamLead();
    resetProjectsAssigned();
    resetWorkShift();
    resetCabinNumber();
    resetMacSerialNumber();
    resetIPAddress();
    resetMACAddress();
  };

  return (
    <Container sx={{ py: 4 }}>
      <h2>Your work information.</h2>
      <p>This section has all work and office related information.</p>
      <Box sx={{ pb: 4 }} />

      <form onSubmit={formSubmitHandler}>
        <Grid container spacing="12">
          <Grid item xs={12} sm={6}>
            <InputField
              label="Department"
              type="text"
              valueChangeHandler={departmentChangeHandler}
              inputBlurHandler={departmentBlurHandler}
              hasError={departmentHasError}
              value={departmentValue}
              placeholder="Cloud Applications"
              disabled={true}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              label="Position"
              type="text"
              valueChangeHandler={positionChangeHandler}
              inputBlurHandler={positionBlurHandler}
              hasError={positionHasError}
              value={positionValue}
              placeholder="Senior Software Engineer"
              disabled={true}
            />
          </Grid>
        </Grid>

        <Grid container spacing="12">
          <Grid item xs={12} sm={6}>
            <InputField
              label="Your Manager"
              type="text"
              valueChangeHandler={managerChangeHandler}
              inputBlurHandler={managerBlurHandler}
              hasError={managerHasError}
              value={managerValue}
              placeholder="Larry Ellison"
              disabled={true}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              label="Team Lead"
              type="text"
              valueChangeHandler={teamLeadChangeHandler}
              inputBlurHandler={teamLeadBlurHandler}
              hasError={teamLeadHasError}
              value={teamLeadValue}
              placeholder="Jeff Bezos"
              disabled={true}
            />
          </Grid>
        </Grid>

        <Grid container spacing="12">
          <Grid item xs={12} sm={6}>
            <InputArea
              label="Assigned Projects"
              type="text"
              valueChangeHandler={projectsAssignedChangeHandler}
              inputBlurHandler={projectsAssignedBlurHandler}
              hasError={projectsAssignedHasError}
              value={projectsAssignedValue}
              placeholder="Enabling Digital Assitants on Oracle Cloud Apps, Implementing static analyzers for SQL queries on Google Cloud, ..."
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              label="Work Shift"
              type="text"
              valueChangeHandler={workShiftChangeHandler}
              inputBlurHandler={workShiftBlurHandler}
              hasError={workShiftHasError}
              value={workShiftValue}
              placeholder="Morning"
            />
            <InputField
              label="Cabin Number"
              type="number"
              valueChangeHandler={cabinNumberChangeHandler}
              inputBlurHandler={cabinNumberBlurHandler}
              hasError={cabinNumberHasError}
              value={cabinNumberValue}
              placeholder="T-2"
            />
          </Grid>
        </Grid>

        <Grid container spacing="12">
          <Grid item xs={12} sm={6}>
            <InputField
              label="Mac Mini Serial Number"
              type="text"
              valueChangeHandler={macSerialNumberChangeHandler}
              inputBlurHandler={macSerialNumberBlurHandler}
              hasError={macSerialNumberHasError}
              value={macSerialNumberValue}
              placeholder="C02L13ECF8J2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              label="IP Address"
              type="text"
              valueChangeHandler={IPAddressChangeHandler}
              inputBlurHandler={IPAddressBlurHandler}
              hasError={IPAddressHasError}
              value={IPAddressValue}
              placeholder="192.168.1.23"
            />
          </Grid>
        </Grid>

        <Grid container spacing="12">
          <Grid item xs={12} sm={6}>
            <InputField
              label="MAC Address"
              type="text"
              valueChangeHandler={MACAddressChangeHandler}
              inputBlurHandler={MACAddressBlurHandler}
              hasError={MACAddressHasError}
              value={MACAddressValue}
              placeholder="2C:54:91:88:C9:E3"
            />
          </Grid>
          <Grid item xs={12} sm={6}></Grid>
        </Grid>

        <Grid container sx={{ py: 4 }}>
          <Grid item xs={12} sm={4}>
            <button className="form-button" type="submit" disabled={!formIsValid}>
              Update Work Information
            </button>
          </Grid>
        </Grid>
      </form>
      <SuccessSnackbar open={open} setOpen={setOpen} />
    </Container>
  );
};

export default WorkInfo;
