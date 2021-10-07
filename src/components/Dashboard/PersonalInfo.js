import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { auth } from '../../services/firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import { postEmployeePersonalInfo, getEmployeePersonalInfo } from '../../services/firestore-queries';
import { useHistory } from 'react-router';
import useInput from '../../hooks/use-input';
import AvatarImage from '../ui/avatar-image/AvatarImage';
import InputField from '../ui/input-field/InputField';
import InputArea from '../ui/input-area/InputArea';
import Loading from '../../pages/Loading.js';
import SuccessSnackbar from './SuccessSnackbar.js';
import InputFile from '../ui/input-file/InputFile.js';

const isNotEmpty = (value) => value.trim() !== '';

const PersonalInfo = () => {
  const history = useHistory();
  const [user, loading, error] = useAuthState(auth);
  const [personalData, setPersonalData] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (error) alert(error);
    if (loading) return <Loading />;
    if (!user) history.replace('/login');
    if (user) getEmployeePersonalInfo(user.uid, setPersonalData);
  }, [user, loading, error, history]);

  const [imageSrc, setImageSrc] = useState('');
  const [adhaarValue, setAdhaarValue] = useState('');
  const [PANValue, setPANValue] = useState('');
  let adhaarIsValid = false;
  let PANIsValid = false;

  useEffect(() => {
    setImageSrc(personalData.profilePictureValue);
    setAdhaarValue(personalData.adhaarValue);
    setPANValue(personalData.PANValue);
  }, [personalData.profilePictureValue, personalData.adhaarValue, personalData.PANValue]);

  if (adhaarValue) adhaarIsValid = isNotEmpty(adhaarValue);
  if (PANValue) PANIsValid = isNotEmpty(PANValue);

  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty, personalData.firstNameValue);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty, personalData.lastNameValue);

  const {
    value: fathersNameValue,
    isValid: fathersNameIsValid,
    hasError: fathersNameHasError,
    valueChangeHandler: fathersNameChangeHandler,
    inputBlurHandler: fathersNameBlurHandler,
    reset: resetFathersName,
  } = useInput(isNotEmpty, personalData.fathersNameValue);

  const {
    value: mothersNameValue,
    isValid: mothersNameIsValid,
    hasError: mothersNameHasError,
    valueChangeHandler: mothersNameChangeHandler,
    inputBlurHandler: mothersNameBlurHandler,
    reset: resetMothersName,
  } = useInput(isNotEmpty, personalData.mothersNameValue);

  const {
    value: DOBValue,
    isValid: DOBIsValid,
    hasError: DOBHasError,
    valueChangeHandler: DOBChangeHandler,
    inputBlurHandler: DOBBlurHandler,
    reset: resetDOB,
  } = useInput(isNotEmpty, personalData.DOBValue);

  const {
    value: phoneValue,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhone,
  } = useInput(isNotEmpty, personalData.phoneValue);

  const {
    value: officePhoneValue,
    isValid: officePhoneIsValid,
    hasError: officePhoneHasError,
    valueChangeHandler: officePhoneChangeHandler,
    inputBlurHandler: officePhoneBlurHandler,
    reset: resetOfficePhone,
  } = useInput(isNotEmpty, personalData.officePhoneValue);

  const {
    value: addressValue,
    isValid: addressIsValid,
    hasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddress,
  } = useInput(isNotEmpty, personalData.addressValue);

  const {
    value: stateValue,
    isValid: stateIsValid,
    hasError: stateHasError,
    valueChangeHandler: stateChangeHandler,
    inputBlurHandler: stateBlurHandler,
    reset: resetState,
  } = useInput(isNotEmpty, personalData.stateValue);

  const {
    value: describeValue,
    isValid: describeIsValid,
    hasError: describeHasError,
    valueChangeHandler: describeChangeHandler,
    inputBlurHandler: describeBlurHandler,
    reset: resetDescribe,
  } = useInput(isNotEmpty, personalData.describeValue);

  const {
    value: adhaarNumberValue,
    isValid: adhaarNumberIsValid,
    hasError: adhaarNumberHasError,
    valueChangeHandler: adhaarNumberChangeHandler,
    inputBlurHandler: adhaarNumberBlurHandler,
    reset: resetAdhaarNumber,
  } = useInput(isNotEmpty, personalData.adhaarNumberValue);

  const {
    value: reference1Value,
    isValid: reference1IsValid,
    hasError: reference1HasError,
    valueChangeHandler: reference1ChangeHandler,
    inputBlurHandler: reference1BlurHandler,
    reset: resetReference1,
  } = useInput(isNotEmpty, personalData.reference1Value);

  const {
    value: reference2Value,
    isValid: reference2IsValid,
    hasError: reference2HasError,
    valueChangeHandler: reference2ChangeHandler,
    inputBlurHandler: reference2BlurHandler,
    reset: resetReference2,
  } = useInput(isNotEmpty, personalData.reference2Value);

  const {
    value: modeOfTransportValue,
    isValid: modeOfTransportIsValid,
    hasError: modeOfTransportHasError,
    valueChangeHandler: modeOfTransportChangeHandler,
    inputBlurHandler: modeOfTransportBlurHandler,
    reset: resetModeOfTransport,
  } = useInput(isNotEmpty, personalData.modeOfTransportValue);

  const formIsValid =
    firstNameIsValid &&
    lastNameIsValid &&
    fathersNameIsValid &&
    mothersNameIsValid &&
    DOBIsValid &&
    phoneIsValid &&
    officePhoneIsValid &&
    addressIsValid &&
    stateIsValid &&
    describeIsValid &&
    adhaarNumberIsValid &&
    adhaarIsValid &&
    PANIsValid &&
    reference1IsValid &&
    reference2IsValid &&
    modeOfTransportIsValid;

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;

    const formData = {
      firstNameValue,
      lastNameValue,
      fathersNameValue,
      mothersNameValue,
      DOBValue,
      phoneValue,
      officePhoneValue,
      addressValue,
      stateValue,
      describeValue,
      adhaarNumberValue,
      adhaarValue,
      PANValue,
      reference1Value,
      reference2Value,
      modeOfTransportValue,
    };
    postEmployeePersonalInfo(user.uid, formData);
    setOpen(true);

    resetFirstName();
    resetLastName();
    resetFathersName();
    resetMothersName();
    resetDOB();
    resetPhone();
    resetOfficePhone();
    resetAddress();
    resetState();
    resetDescribe();
    resetAdhaarNumber();
    resetReference1();
    resetReference2();
    resetModeOfTransport();
  };

  return (
    <Container sx={{ py: 4 }}>
      <h2>Your profile information.</h2>
      <p>This section has all the basic information about your profile.</p>
      <Box sx={{ pb: 4 }}></Box>

      <form onSubmit={formSubmitHandler}>
        <Grid container spacing="12" sx={{ alignItems: 'center', justifyContent: 'center' }}>
          <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
            <InputField
              label="First Name"
              type="text"
              valueChangeHandler={firstNameChangeHandler}
              inputBlurHandler={firstNameBlurHandler}
              hasError={firstNameHasError}
              value={firstNameValue}
              placeholder="Mark"
            />
            <InputField
              label="Last Name"
              type="text"
              valueChangeHandler={lastNameChangeHandler}
              inputBlurHandler={lastNameBlurHandler}
              hasError={lastNameHasError}
              value={lastNameValue}
              placeholder="Zuckerberg"
            />
          </Grid>
          <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <AvatarImage
              alt="AB Satyaprakash"
              src={imageSrc}
              folderName={user.uid}
              setImageSrc={setImageSrc}
              collectionName="EmployeePersonalInfo"
            />
          </Grid>
        </Grid>

        <Grid container spacing="12">
          <Grid item xs={12} sm={6}>
            <InputField
              label="Father's Name"
              type="text"
              valueChangeHandler={fathersNameChangeHandler}
              inputBlurHandler={fathersNameBlurHandler}
              hasError={fathersNameHasError}
              value={fathersNameValue}
              placeholder="Larry Page"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              label="Mother's Name"
              type="text"
              valueChangeHandler={mothersNameChangeHandler}
              inputBlurHandler={mothersNameBlurHandler}
              hasError={mothersNameHasError}
              value={mothersNameValue}
              placeholder="Serena Williams"
            />
          </Grid>
        </Grid>

        <Grid container spacing="12">
          <Grid item xs={12} sm={6}>
            <InputField
              label="Date Of Birth"
              type="date"
              valueChangeHandler={DOBChangeHandler}
              inputBlurHandler={DOBBlurHandler}
              hasError={DOBHasError}
              value={DOBValue}
              placeholder="01/01/1998"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              label="Phone Number"
              type="tel"
              valueChangeHandler={phoneChangeHandler}
              inputBlurHandler={phoneBlurHandler}
              hasError={phoneHasError}
              value={phoneValue}
              placeholder="+91-1234567890"
            />
          </Grid>
        </Grid>

        <Grid container spacing="12">
          <Grid item xs={12} sm={6}>
            <InputField
              label="Office Phone"
              type="tel"
              valueChangeHandler={officePhoneChangeHandler}
              inputBlurHandler={officePhoneBlurHandler}
              hasError={officePhoneHasError}
              value={officePhoneValue}
              placeholder="+91-0987654321"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              label="Complete Address"
              type="text"
              valueChangeHandler={addressChangeHandler}
              inputBlurHandler={addressBlurHandler}
              hasError={addressHasError}
              value={addressValue}
              placeholder="2300 Oracle Way, Austin, Texas 78741, United States"
            />
          </Grid>
        </Grid>

        <Grid container spacing="12">
          <Grid item xs={12} sm={6}>
            <InputArea
              label="Describe Yourself"
              type="text"
              valueChangeHandler={describeChangeHandler}
              inputBlurHandler={describeBlurHandler}
              hasError={describeHasError}
              value={describeValue}
              placeholder="Hey there! I am Mark Zuckerberg from Facebook and ..."
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              label="State"
              type="text"
              valueChangeHandler={stateChangeHandler}
              inputBlurHandler={stateBlurHandler}
              hasError={stateHasError}
              value={stateValue}
              placeholder="Texas"
            />
            <InputField
              label="Adhaar Number"
              type="number"
              valueChangeHandler={adhaarNumberChangeHandler}
              inputBlurHandler={adhaarNumberBlurHandler}
              hasError={adhaarNumberHasError}
              value={adhaarNumberValue}
              placeholder="1234-5678-1357-2468"
            />
          </Grid>
        </Grid>

        <Grid container spacing="12">
          <Grid item xs={12} sm={6}>
            <InputFile
              label="Upload PAN (in PDF format)"
              value={PANValue}
              folderName={user.uid}
              setValue={setPANValue}
              placeholder="Upload both sides of PAN Card"
              field="PANValue"
              collectionName="EmployeePersonalInfo"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputFile
              label="Upload Adhaar (in PDF format)"
              value={adhaarValue}
              folderName={user.uid}
              setValue={setAdhaarValue}
              placeholder="Upload both sides of Adhaar Card"
              field="adhaarValue"
              collectionName="EmployeePersonalInfo"
            />
          </Grid>
        </Grid>

        <Grid container spacing="12">
          <Grid item xs={12} sm={6}>
            <InputField
              label="Reference 1"
              type="text"
              valueChangeHandler={reference1ChangeHandler}
              inputBlurHandler={reference1BlurHandler}
              hasError={reference1HasError}
              value={reference1Value}
              placeholder="Mr. XYZ, Senior Director, Oracle"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              label="Reference 2"
              type="text"
              valueChangeHandler={reference2ChangeHandler}
              inputBlurHandler={reference2BlurHandler}
              hasError={reference2HasError}
              value={reference2Value}
              placeholder="Dr. PQR, Assitant Prof, MIT"
            />
          </Grid>
        </Grid>

        <Grid container spacing="12">
          <Grid item xs={12} sm={6}>
            <InputField
              label="Mode of Transport"
              type="text"
              valueChangeHandler={modeOfTransportChangeHandler}
              inputBlurHandler={modeOfTransportBlurHandler}
              hasError={modeOfTransportHasError}
              value={modeOfTransportValue}
              placeholder="Personal Vehicle"
            />
          </Grid>
          <Grid item xs={12} sm={6}></Grid>
        </Grid>

        <Grid container sx={{ py: 4 }}>
          <Grid item xs={12} sm={4}>
            <button className="form-button" type="submit" disabled={!formIsValid}>
              Update Profile
            </button>
          </Grid>
        </Grid>
      </form>
      <SuccessSnackbar open={open} setOpen={setOpen} />
    </Container>
  );
};

export default PersonalInfo;
