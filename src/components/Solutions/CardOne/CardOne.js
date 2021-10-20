import { Box } from '@mui/system';
import { Container, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './CardOne.module.css';

const CardOne = (props) => {
  const { heading, highlights, content } = props;

  return (
    <Paper elevation={4} className={classes.card}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Container sx={{ pt: 4, mx: 2 }}>
            <h3>{heading}</h3>
          </Container>
          <Container sx={{ py: 6, mx: 2 }}>
            <h1 className={classes.bigHeader}>
              <span style={{ color: '#c48cfc' }}>{highlights[0]}</span> <br /> {highlights[1]}. <br /> {highlights[2]}.
            </h1>
            <Box sx={{ py: 2 }} />
            <p>{content}</p>
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
