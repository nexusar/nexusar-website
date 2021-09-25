import { Container } from '@mui/material';
import classes from './JumpingDots.module.css';

const JumpingDots = () => {
  return (
    <Container id={classes.wave}>
      <span className={classes.dot}></span>
      <span className={classes.dot}></span>
      <span className={classes.dot}></span>
    </Container>
  );
};

export default JumpingDots;
