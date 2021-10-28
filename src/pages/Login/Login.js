import { Fragment, useEffect } from 'react';
import { Container, Divider, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebase.js';
import googleAuth from '../../services/auth/google-auth';
import { useHistory } from 'react-router';

import appleLogo from '../../assets/images/apple-logo.png';
import googleLogo from '../../assets/images/google-logo.png';
import LoginButton from '../../components/Login/LoginButton';
import Loading from '../Loading.js';

const Login = () => {
  const history = useHistory();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (error) alert(error);

    if (loading) return <Loading />;
    if (user) history.replace('/dashboard');
  }, [user, loading, error, history]);

  return (
    <Fragment>
      <Box sx={{ height: 100 }} />
      <Container>
        <h1>Please sign in.</h1>
        <p>This page is for company's employees and clients. You won't be logged in unless you are one.</p>
        <Divider light sx={{ py: 1 }} />
      </Container>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box sx={{ py: 4 }}>
              <h2>Login as an employee</h2>
              <p>You can use your Google or Apple accounts for logging in</p>
            </Box>
            <LoginButton name="Apple" logo={appleLogo} />
            <LoginButton name="Google" logo={googleLogo} loginHandler={googleAuth} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ py: 4 }}>
              <h2>Login as a client</h2>
              <p>You can use your Google or Apple accounts for logging in</p>
            </Box>
            <LoginButton name="Apple" logo={appleLogo} />
            <LoginButton name="Google" logo={googleLogo} loginHandler={googleAuth} />
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Login;
