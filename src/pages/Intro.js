import { Fragment } from 'react';
import { Box } from '@mui/system';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <Fragment>
      <Box sx={{ mx: 'auto', width: 'fit-content' }}>
        <Container sx={{ py: 10, textAlign: 'center' }}>
          <h1>This is the INTRODUCTION page.</h1>
          <p>The intro page for our web application, is under construction.</p>
          <Link to="/home" style={{ textDecoration: 'underline' }}>
            Discover more from us by clicking here.
          </Link>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Intro;
