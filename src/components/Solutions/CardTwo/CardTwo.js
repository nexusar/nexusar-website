import { Box } from '@mui/system';
import { Container, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './CardTwo.module.css';

const CardTwo = (props) => {
  const { heading, highlights, content } = props;

  return (
    <Paper elevation={4} className={classes.card}>
      <Container sx={{ py: 4, mx: 2 }}>
        <h3>{heading}</h3>
      </Container>
      <Grid container>
        <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
          <Container sx={{ py: 6, mx: 2 }}>
            <h2>
              {highlights} <span style={{ color: '#a1a1a6' }}>{content}</span>
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
