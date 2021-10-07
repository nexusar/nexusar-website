import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import useInput from '../../hooks/use-input';
import { useHistory } from 'react-router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState, useEffect } from 'react';
import { auth } from '../../services/firebase';
import InputField from '../ui/input-field/InputField';
import { getEmployeeBankInfo, postEmployeeBankInfo } from '../../services/firestore-queries';
import SuccessSnackbar from './SuccessSnackbar';
import Loading from '../../pages/Loading';

const isNotEmpty = (value) => value.trim() !== '';

const BankInfo = () => {
  const history = useHistory();
  const [user, loading, error] = useAuthState(auth);
  const [bankData, setBankData] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (error) alert(error);
    if (loading) return <Loading />;
    if (!user) history.replace('/login');
    if (user) getEmployeeBankInfo(user.uid, setBankData);
  }, [user, loading, error, history]);

  const {
    value: accountNumberValue,
    isValid: accountNumberIsValid,
    hasError: accountNumberHasError,
    valueChangeHandler: accountNumberChangeHandler,
    inputBlurHandler: accountNumberBlurHandler,
    reset: resetAccountNumber,
  } = useInput(isNotEmpty, bankData.accountNumberValue);

  const {
    value: IFSCCodeValue,
    isValid: IFSCCodeIsValid,
    hasError: IFSCCodeHasError,
    valueChangeHandler: IFSCCodeChangeHandler,
    inputBlurHandler: IFSCCodeBlurHandler,
    reset: resetIFSCCode,
  } = useInput(isNotEmpty, bankData.IFSCCodeValue);

  const {
    value: bankNameValue,
    isValid: bankNameIsValid,
    hasError: bankNameHasError,
    valueChangeHandler: bankNameChangeHandler,
    inputBlurHandler: bankNameBlurHandler,
    reset: resetBankName,
  } = useInput(isNotEmpty, bankData.bankNameValue);

  const formIsValid = accountNumberIsValid && IFSCCodeIsValid && bankNameIsValid;

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;

    const formData = {
      accountNumberValue,
      bankNameValue,
      IFSCCodeValue,
    };

    postEmployeeBankInfo(user.uid, formData);
    setOpen(true);

    resetAccountNumber();
    resetBankName();
    resetIFSCCode();
  };

  return (
    <Container sx={{ py: 4 }}>
      <h2>Your bank information.</h2>
      <p>This section has all your bank account details. Please make sure to fill them correctly.</p>
      <Box sx={{ pb: 4 }} />

      <form onSubmit={formSubmitHandler}>
        <Grid container spacing="12">
          <Grid item xs={12} sm={6}>
            <InputField
              label="Bank Account Number"
              type="text"
              valueChangeHandler={accountNumberChangeHandler}
              inputBlurHandler={accountNumberBlurHandler}
              hasError={accountNumberHasError}
              value={accountNumberValue}
              placeholder="12345678912"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputField
              label="IFSC Code"
              type="text"
              valueChangeHandler={IFSCCodeChangeHandler}
              inputBlurHandler={IFSCCodeBlurHandler}
              hasError={IFSCCodeHasError}
              value={IFSCCodeValue}
              placeholder="SBIN14262"
            />
          </Grid>
        </Grid>

        <Grid container spacing="12">
          <Grid item xs={12} sm={6}>
            <InputField
              label="Bank Name"
              type="text"
              valueChangeHandler={bankNameChangeHandler}
              inputBlurHandler={bankNameBlurHandler}
              hasError={bankNameHasError}
              value={bankNameValue}
              placeholder="State Bank of India"
            />
          </Grid>
          <Grid item xs={12} sm={6}></Grid>
        </Grid>

        <Grid container sx={{ py: 4 }}>
          <Grid item xs={12} sm={4}>
            <button className="form-button" type="submit" disabled={!formIsValid}>
              Update Bank Details
            </button>
          </Grid>
        </Grid>
      </form>
      <SuccessSnackbar open={open} setOpen={setOpen} />
    </Container>
  );
};

export default BankInfo;
