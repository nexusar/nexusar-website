import { Box } from '@mui/system';
import { Container, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './CardTwo.module.css';

const CardTwo = () => {
  return (
    <Paper elevation={4} className={classes.card}>
      <Container sx={{ py: 4, mx: 2 }}>
        <h3>Machine Learning</h3>
      </Container>
      <Grid container>
        <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
          <Container sx={{ py: 6, mx: 2 }}>
            <h2>
              Up to 9x faster. Even for a 16‑core Neural Engine, that’s a lot to process.{' '}
              <span style={{ color: '#a1a1a6' }}>
                Apps on MacBook Air can use machine learning (ML) to automatically retouch photos like a pro, make smart
                tools such as magic wands and audio filters more accurate at auto‑detection, and so much more. That’s
                not just brain power — that’s the power of a full stack of ML technologies.
              </span>
            </h2>
            <Box sx={{ py: 2 }} />
            <Link to="#" className={classes.button}>
              See how M1 unleashes ML
            </Link>
          </Container>
        </Grid>
        <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }} sx={{ alignItems: 'center', display: 'flex' }}>
          <Container sx={{ overflow: 'hidden' }}>
            <img alt="card-1" className={classes.image} />
          </Container>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CardTwo;
