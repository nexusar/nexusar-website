import { Fragment } from 'react';
import { Container, Box } from '@mui/material';
import RecentUpdates from '../components/ui/recent-updates/RecentUpdates';

const Home = () => {
  return (
    <Fragment>
      <RecentUpdates />
      <Box sx={{ mx: 'auto', width: 'fit-content' }}>
        <Container sx={{ py: 10 }}>
          <h1>This is the HOME Page</h1>
          <p>The home page for our web application, is under construction.</p>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Home;
