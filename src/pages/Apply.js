import { Fragment } from 'react';
import { Container, Box } from '@mui/material';
import { SliderButton } from '@typeform/embed-react';
import RecentUpdates from '../components/ui/recent-updates/RecentUpdates';

const Apply = () => {
  return (
    <Fragment>
      <RecentUpdates />
      <Box sx={{ mx: 'auto', width: 'fit-content' }}>
        <Container sx={{ py: 10 }}>
          <h1>This is the Application Page</h1>
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

export default Apply;
