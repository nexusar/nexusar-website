import { Fragment } from 'react';
import { Container, Divider } from '@mui/material';
import { useLocation } from 'react-router-dom';
import RecentUpdates from '../../components/layout/recent-updates/RecentUpdates';
import SolutionContent from '../../components/Solutions/SolutionContent';

const SolutionPage = () => {
  const location = useLocation();
  const solutionName = location.pathname.split('/')[2].split('-').join(' ');
  const solutionID = 'asset-tracking-and-analysis';

  return (
    <Fragment>
      <RecentUpdates />
      <Container sx={{ pt: 1, textTransform: 'capitalize' }}>
        <h3>{solutionName}</h3>
        <Divider sx={{ pt: 1 }} />
      </Container>
      <SolutionContent solutionID={solutionID} />
    </Fragment>
  );
};

export default SolutionPage;
