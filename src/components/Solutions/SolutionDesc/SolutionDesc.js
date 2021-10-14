import classes from './SolutionDesc.module.css';
import { Container } from '@mui/material';

const SolutionDesc = () => {
  return (
    <Container sx={{ pt: 8, overflow: 'hidden' }}>
      <h1 className={classes.bigHeader}>
        <span style={{ color: '#a1a1a6', fontFamily: 'SF Pro Text SemiBold' }}>
          <i class="fa fa-apple" aria-hidden="true"></i>
          {'\t'}M1
        </span>
        <br /> Small chip. Giant leap.
      </h1>
      <h2 style={{ color: '#a1a1a6' }}>
        It’s here. Our first chip designed specifically for Mac. Packed with an astonishing 16 billion transistors, the
        Apple M1 system on a chip (SoC) integrates the CPU, GPU, Neural Engine, I/O and so much more onto a single tiny
        chip. With incredible performance, custom technologies and industry-leading power efficiency,1 M1 is not just a
        next step for Mac — it’s another level entirely.
      </h2>
      <img className={classes.image} alt="hero" />
    </Container>
  );
};

export default SolutionDesc;
