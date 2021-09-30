import classes from './JumpingDots.module.css';

const JumpingDots = (props) => {
  const { padding } = props;

  return (
    <div className={classes.container}>
      <div className={`${classes.circle} ${classes.ball1}`} style={{ padding: `${padding}px` }}></div>
      <div className={`${classes.circle} ${classes.ball2}`} style={{ padding: `${padding}px` }}></div>
      <div className={`${classes.circle} ${classes.ball3}`} style={{ padding: `${padding}px` }}></div>
    </div>
  );
};

export default JumpingDots;
