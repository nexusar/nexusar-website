import { Fragment } from 'react';
import { Container } from '@mui/material';
import { Box } from '@mui/system';

const Admin = () => {
  return (
    <Fragment>
      <Box sx={{ height: 50 }} />
      <Container sx={{ py: 10 }}>
        <h1>Welcome Database Adminstrator</h1>
        <p>
          Here you will find a list of all employees in the organisation. You can read and modify their propreitary
          information
        </p>
      </Container>
    </Fragment>
  );
};

export default Admin;
