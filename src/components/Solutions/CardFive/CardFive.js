import { Container, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './CardFive.module.css';

const CardFive = (props) => {
  const { heading1, content1, heading2, highlights2, content2, heading3, content3 } = props;

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} lg={4}>
        <Paper elevation={4} className={classes.card1}>
          <Container sx={{ pt: 4 }}>
            <h3>{heading1}</h3>
          </Container>
          <Container sx={{ my: 12 }}>
            <h2>{content1}</h2>
          </Container>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Paper elevation={4} className={classes.card3}>
          <Container sx={{ pt: 4 }}>
            <h3>{heading2}</h3>
          </Container>
          <Container sx={{ my: 12 }}>
            <h3>{content2}</h3>
            <h1 style={{ paddingTop: '20px' }} className={classes.bigHeader}>
              {highlights2[0]}. {highlights2[1]}.
            </h1>
          </Container>
        </Paper>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Paper elevation={4} className={classes.card2}>
          <Container sx={{ pt: 4 }}>
            <h3>{heading3}</h3>
          </Container>
          <Container sx={{ pt: 12, pb: 2 }}>
            <img
              src="	https://www.apple.com/v/macbook-air/k/images/overview/memory_icon__eekqsyyftocy_large.png"
              alt="memory"
            />
          </Container>
          <Container sx={{}}>
            <p>{content3}</p>
          </Container>
          <Container sx={{ py: 6 }}>
            <Link to="#" className={classes.button}>
              See how M1 redefines speed
            </Link>
          </Container>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CardFive;
