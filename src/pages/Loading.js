import { Fragment } from 'react';
import { Container } from '@mui/material';
import IOSSpinner from '../components/ui/ios-spinner/IOSSpinner';

const Loading = () => {
  return (
    <Fragment>
      <Container sx={{ pt: 16 }}>
        <IOSSpinner />
      </Container>
    </Fragment>
  );
};

export default Loading;
