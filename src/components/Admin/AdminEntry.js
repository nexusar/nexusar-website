import { Avatar, Container, Grid, Paper } from '@mui/material';
import useInput from '../../hooks/use-input';
import { useState, useEffect } from 'react';
import InputField from '../ui/input-field/InputField';
import { getEmployeePersonalInfo } from '../../services/firestore-queries';

const isNotEmpty = (value) => value.trim() !== '';

const AdminEntry = (props) => {
  const [employeeProprietaryData, setEmployeeProprietaryData] = useState({});
  const [employeePersonalInfo, setEmployeePersonalInfo] = useState({});
  const { employeeData } = props;

  useEffect(() => {
    if (employeeData) {
      setEmployeeProprietaryData(employeeData);
      getEmployeePersonalInfo(employeeData.uid, setEmployeePersonalInfo);
    }
  }, [employeeData]);

  const {
    value: departmentValue,
    isValid: departmentIsValid,
    hasError: departmentHasError,
    valueChangeHandler: departmentChangeHandler,
    inputBlurHandler: departmentBlurHandler,
    reset: resetDepartment,
  } = useInput(isNotEmpty, employeeProprietaryData.Department);

  const {
    value: managerValue,
    isValid: managerIsValid,
    hasError: managerHasError,
    valueChangeHandler: managerChangeHandler,
    inputBlurHandler: managerBlurHandler,
    reset: resetManager,
  } = useInput(isNotEmpty, employeeProprietaryData.Manager);

  const {
    value: positionValue,
    isValid: positionIsValid,
    hasError: positionHasError,
    valueChangeHandler: positionChangeHandler,
    inputBlurHandler: positionBlurHandler,
    reset: resetPosition,
  } = useInput(isNotEmpty, employeeProprietaryData.Position);

  const {
    value: teamLeadValue,
    isValid: teamLeadIsValid,
    hasError: teamLeadHasError,
    valueChangeHandler: teamLeadChangeHandler,
    inputBlurHandler: teamLeadBlurHandler,
    reset: resetTeamLead,
  } = useInput(isNotEmpty, employeeProprietaryData.TeamLead);

  const {
    value: salaryValue,
    isValid: salaryIsValid,
    hasError: salaryHasError,
    valueChangeHandler: salaryChangeHandler,
    inputBlurHandler: salaryBlurHandler,
    reset: resetSalary,
  } = useInput(isNotEmpty, employeeProprietaryData.salaryValue);

  const {
    value: superiorsValue,
    isValid: superiorsIsValid,
    hasError: superiorsHasError,
    valueChangeHandler: superiorsChangeHandler,
    inputBlurHandler: superiorsBlurHandler,
    reset: resetSuperiors,
  } = useInput(isNotEmpty, employeeProprietaryData.superiorsValue);

  const formIsValid =
    departmentIsValid && managerIsValid && positionIsValid && teamLeadIsValid && salaryIsValid && superiorsIsValid;

  const formSubmitHandler = (event) => {
    console.log(event);
    event.preventDefault();
    if (!formIsValid) return;

    const formData = {
      departmentValue,
      positionValue,
      managerValue,
      teamLeadValue,
      salaryValue,
      superiorsValue,
    };

    console.log(formData);

    // postEmployeeAdminEntry(user.uid, formData);

    resetDepartment();
    resetPosition();
    resetManager();
    resetTeamLead();
    resetSalary();
    resetSuperiors();
  };

  const removeEmployeeHandler = () => {
    if (window.confirm('Are you sure to remove this employee?')) {
      console.log('Employee Deleted');
      window.location.reload();
    } else {
      console.log('Employee not deleted');
    }
  };

  return (
    <Paper elevation={4} sx={{ backgroundColor: 'white', borderRadius: 1 }}>
      <Container sx={{ py: 4 }}>
        <h3>
          {employeePersonalInfo.firstNameValue
            ? `${employeePersonalInfo.firstNameValue} ${employeePersonalInfo.lastNameValue}`
            : 'Personal Information Not Found'}
        </h3>
        <p style={{ color: 'GrayText' }}>Email: {employeeData.email}</p>

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
                placeholder="Software Development"
              />
              <InputField
                label="Position"
                type="text"
                valueChangeHandler={positionChangeHandler}
                inputBlurHandler={positionBlurHandler}
                hasError={positionHasError}
                value={positionValue}
                placeholder="Intern"
              />
            </Grid>

            <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Avatar
                alt={employeePersonalInfo.firstNameValue}
                src={employeePersonalInfo.profilePictureValue}
                sx={{ width: 196, height: 196 }}
              />
            </Grid>
          </Grid>

          <Grid container spacing="12">
            <Grid item xs={12} sm={6}>
              <InputField
                label="Manager"
                type="text"
                valueChangeHandler={managerChangeHandler}
                inputBlurHandler={managerBlurHandler}
                hasError={managerHasError}
                value={managerValue}
                placeholder="Jeff Bezos"
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
                placeholder="Larry Ellison"
              />
            </Grid>
          </Grid>

          <Grid container spacing="12">
            <Grid item xs={12} sm={6}>
              <InputField
                label="Supervisors' List"
                type="text"
                valueChangeHandler={superiorsChangeHandler}
                inputBlurHandler={superiorsBlurHandler}
                hasError={superiorsHasError}
                value={superiorsValue}
                placeholder="Please enter a list of emails separated by commas."
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                label="Salary (in INR)"
                type="number"
                valueChangeHandler={salaryChangeHandler}
                inputBlurHandler={salaryBlurHandler}
                hasError={salaryHasError}
                value={salaryValue}
                placeholder="25000"
              />
            </Grid>
          </Grid>

          <Grid container sx={{ pt: 4 }} spacing={{ xs: 2, sm: 4 }}>
            <Grid item xs={12} sm={4}>
              <button className="form-button" type="submit" disabled={!formIsValid}>
                Update Details
              </button>
            </Grid>
            <Grid item xs={12} sm={4}>
              <button className="form-button-danger" type="button" onClick={removeEmployeeHandler}>
                Remove Employee
              </button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Paper>
  );
};

export default AdminEntry;
