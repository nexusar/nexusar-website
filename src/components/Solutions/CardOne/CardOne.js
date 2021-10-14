import { Box } from '@mui/system';
import { Container, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './CardOne.module.css';

const CardOne = () => {
  return (
    <Paper elevation={4} className={classes.card}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Container sx={{ pt: 4, mx: 2 }}>
            <h3>CPU</h3>
          </Container>
          <Container sx={{ py: 6, mx: 2 }}>
            <h1 className={classes.bigHeader}>
              <span style={{ color: '#c48cfc' }}>8-core CPU</span> <br /> Devours tasks. <br /> Sips battery.
            </h1>
            <Box sx={{ py: 2 }} />
            <p>
              M1 has the fastest CPU we’ve ever made. With that kind of processing speed, MacBook Air can take on new
              extraordinarily intensive tasks like professional-quality editing and action-packed gaming. But the 8‑core
              CPU on M1 isn’t just up to 3.5x faster than the previous generation2 — it balances high-performance cores
              with efficiency cores that can still crush everyday jobs while using just a tenth of the power.
            </p>
            <Box sx={{ py: 2 }} />
            <Link to="#" className={classes.button}>
              See how M1 redefines speed
            </Link>
          </Container>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ alignItems: 'center', display: 'flex' }}>
          <Container>
            <img alt="card-1" className={classes.image} />
          </Container>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CardOne;
