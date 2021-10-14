import { Grid } from '@mui/material';
import classes from './SolutionHeader.module.css';

const SolutionHeader = () => {
  return (
    <div style={{ overflow: 'hidden', textAlign: 'center' }}>
      <Grid container>
        <Grid item xs={0.5} sm={3} />
        <Grid item xs={11} sm={6} sx={{ textAlign: 'center', pb: 6 }}>
          <h1>Keyboards that have you covered.</h1>
          <p>
            iPad keyboards provide a great typing experience, and lightweight, durable protection for your iPad. And
            they attach to iPad magnetically — no need for switches, plugs and pairing. The Magic Keyboard delivers even
            more with a floating design, backlit keys and a built‑in trackpad.
          </p>
        </Grid>
        <Grid item xs={0.5} sm={3} />
      </Grid>
      <img className={classes.image} alt="hero" />
    </div>
  );
};

export default SolutionHeader;
