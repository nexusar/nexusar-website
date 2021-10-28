import { Box } from '@mui/system';
import { Container, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './CardThree.module.css';

const CardThree = (props) => {
  const { heading, highlights, content } = props;

  return (
    <Paper elevation={4} className={classes.card}>
      <Grid container>
        <Grid item xs={12} sm={9}>
          <Container sx={{ pt: 4, mx: 2 }}>
            <h3>{heading}</h3>
          </Container>
          <Container sx={{ py: 6, mx: 2 }}>
            {highlights && (
              <h1 className={classes.bigHeader}>
                <span style={{ color: '#4693ad' }}>{highlights[0]}</span> <br /> {highlights[1]}. <br /> {highlights[2]}
                .
              </h1>
            )}
            <Box sx={{ py: 4 }} />
            <Link to="#" className={classes.button}>
              See how M1 revs up graphics
            </Link>
          </Container>
        </Grid>
        <Grid item xs={12} sm={3} sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
          <Container sx={{ py: 4 }}>
            <h3>{content}</h3>
          </Container>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CardThree;
