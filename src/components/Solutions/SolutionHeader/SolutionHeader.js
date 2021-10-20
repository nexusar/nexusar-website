import { Grid } from '@mui/material';
import classes from './SolutionHeader.module.css';

const SolutionHeader = (props) => {
  const { name, description } = props;

  return (
    <div style={{ overflow: 'hidden', textAlign: 'center' }}>
      <Grid container>
        <Grid item xs={1} sm={3}></Grid>
        <Grid item xs={12} sm={6} sx={{ textAlign: 'center', pb: 6, px: 2 }}>
          <h1>{name}</h1>
          <p>{description}</p>
        </Grid>
        <Grid item xs={1} sm={3}></Grid>
      </Grid>
      <img className={classes.image} alt="hero" />
    </div>
  );
};

export default SolutionHeader;
