import { Fragment } from 'react';
import { Box } from '@mui/system';
import { Container } from '@mui/material';
import RecentUpdates from '../../components/layout/recent-updates/RecentUpdates';
import CardOne from '../../components/Solutions/CardOne/CardOne';
import CardTwo from '../../components/Solutions/CardTwo/CardTwo';

const SolutionPage = () => {
  return (
    <Fragment>
      <RecentUpdates />
      <Box sx={{ py: 4, backgroundColor: '#1d1d1f' }}>
        <Container>
          <Box my={2}>
            <CardOne />
          </Box>
          <Box my={2}>
            <CardTwo />
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
};

export default SolutionPage;
