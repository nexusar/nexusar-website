import { Box } from '@mui/system';
import { Container, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './CardFour.module.css';

const CardFour = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={7}>
        <Paper elevation={4} className={classes.card1}>
          <Container sx={{ pt: 4, mx: 2 }}>
            <h3>All day battery life</h3>
          </Container>
          <Container sx={{ py: 6, mx: 2, my: 12 }}>
            <h1 className={classes.bigHeader}>Up to 18 hours of battery life. That’s 6 more hours, free of charge.</h1>
          </Container>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={5}>
        <Paper elevation={4} className={classes.card2}>
          <Container sx={{ pt: 4, mx: 2 }}>
            <h3>All day battery life</h3>
          </Container>
          <Container sx={{ py: 6, mx: 2, my: 6 }}>
            <h1 className={classes.bigHeader}>
              No fan. <br /> No noise. <br /> Just Air.
            </h1>
            <Box sx={{ py: 4 }} />
          </Container>
          <Container sx={{ py: 6, mx: 2 }}>
            <Link to="#" className={classes.button}>
              See how M1 redefines speed
            </Link>
          </Container>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CardFour;
