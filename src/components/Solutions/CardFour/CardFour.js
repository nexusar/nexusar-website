import { Box } from '@mui/system';
import { Container, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './CardFour.module.css';

const CardFour = (props) => {
  const { heading1, content1, heading2, content2 } = props;

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6}>
        <Paper elevation={4} className={classes.card1}>
          <Container sx={{ pt: 4, mx: 2 }}>
            <h3>{heading1}</h3>
          </Container>
          <Container sx={{ py: 6, mx: 2 }}>
            <h1>{content1}</h1>
          </Container>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper elevation={4} className={classes.card2}>
          <Container sx={{ pt: 4, mx: 2 }}>
            <h3>{heading2}</h3>
          </Container>
          <Container sx={{ py: 6, mx: 2 }}>
            <h1>{content2}</h1>
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
