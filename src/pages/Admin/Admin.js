import { Fragment } from 'react';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import AdminPage from '../../components/Admin/AdminPage';

const Admin = () => {
  return (
    <Fragment>
      <Box sx={{ height: 50 }} />
      <Container sx={{ py: 10 }}>
        <h1>Welcome Database Adminstrator</h1>
        <p>
          Here you will find a list of all employees in the organisation. You can read and modify their propreitary
          information.
        </p>
        <Box sx={{ py: 4 }}>
          <AdminPage />
        </Box>
      </Container>
    </Fragment>
  );
};

export default Admin;
