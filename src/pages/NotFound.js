import { Fragment } from 'react';
import { Container, Box } from '@mui/material';
import RecentUpdates from '../components/ui/recent-updates/RecentUpdates';

const NotFound = () => {
  return (
    <Fragment>
      <RecentUpdates />
      <Box sx={{ mx: 'auto', width: 'fit-content' }}>
        <Container sx={{ py: 10 }}>
          <h1>
            That's a <strong>404</strong> from the server
          </h1>
          <p>This page either does not exist or is under construction. Thank you for your patience</p>
        </Container>
      </Box>
    </Fragment>
  );
};

export default NotFound;
