import classes from './SolutionDesc.module.css';
import { Container } from '@mui/material';

const SolutionDesc = (props) => {
  const { heading, subHeading, content } = props;

  return (
    <Container sx={{ pt: 8, overflow: 'hidden' }}>
      <h1 className={classes.bigHeader}>
        <span style={{ color: '#a1a1a6' }}>{heading}.</span>
        <br /> {subHeading}.
      </h1>
      <h2 style={{ color: '#a1a1a6' }}>{content}</h2>
      <img className={classes.image} alt="hero" />
    </Container>
  );
};

export default SolutionDesc;
