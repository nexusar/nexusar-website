import { Fragment } from 'react';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import RecentUpdates from '../components/layout/recent-updates/RecentUpdates';
import SubNav from '../components/layout/sub-nav/SubNav';

const Solutions = () => {
  return (
    <Fragment>
      <RecentUpdates />
      <SubNav />
      <Box sx={{ mx: 'auto', width: 'fit-content' }}>
        <Container sx={{ py: 10 }}>
          <h1>This is the Solutions Page</h1>
          <p>Here are all the solutions that we offer at nexusar.</p>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Solutions;
