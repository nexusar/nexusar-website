import { Fragment } from 'react';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import { SliderButton } from '@typeform/embed-react';
import RecentUpdates from '../components/layout/recent-updates/RecentUpdates';

const Career = () => {
  return (
    <Fragment>
      <RecentUpdates />
      <Box sx={{ mx: 'auto', width: 'fit-content' }}>
        <Container sx={{ py: 10 }}>
          <h1>This is the Careers Page</h1>
          <p>We are currently hiring developers, designers and employees</p>
          <Box sx={{ m: 2 }} />
          <SliderButton id="cnExQL79" className="button" position="left" hideScrollbars="true" autoClose="true">
            Please click here to apply
          </SliderButton>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Career;
