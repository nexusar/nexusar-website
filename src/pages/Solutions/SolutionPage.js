import { Fragment } from 'react';
import { Box } from '@mui/system';
import { Container, Divider } from '@mui/material';
import { useLocation } from 'react-router-dom';
import RecentUpdates from '../../components/layout/recent-updates/RecentUpdates';
import CardOne from '../../components/Solutions/CardOne/CardOne';
import CardTwo from '../../components/Solutions/CardTwo/CardTwo';
import CardThree from '../../components/Solutions/CardThree/CardThree';
import CardFour from '../../components/Solutions/CardFour/CardFour';
import SolutionHeader from '../../components/Solutions/SolutionHeader/SolutionHeader';
import SolutionDesc from '../../components/Solutions/SolutionDesc/SolutionDesc';

const SolutionPage = () => {
  const location = useLocation();
  const solutionName = location.pathname.split('/')[2].split('-').join(' ');

  return (
    <Fragment>
      <RecentUpdates />
      <Container sx={{ pt: 1, textTransform: 'capitalize' }}>
        <h3>{solutionName}</h3>
        <Divider sx={{ pt: 1 }} />
      </Container>
      <Box sx={{ py: 4 }}>
        <SolutionHeader />
        <SolutionDesc />
        <Container>
          <Box my={4}>
            <CardOne />
          </Box>
          <Box my={4}>
            <CardTwo />
          </Box>
          <Box my={4}>
            <CardThree />
          </Box>
          <Box my={4}>
            <CardFour />
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
};

export default SolutionPage;
