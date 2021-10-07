import classes from './Intro.module.css';
import LocalNav from '../../components/layout/local-nav/LocalNav';
import { Grid, Container, IconButton } from '@mui/material';
import SineWave from '../../components/ui/sine-wave/SineWave';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import { useHistory } from 'react-router-dom';
import backgroundVideo from '../../assets/videos/background-video.mp4';

const Intro = () => {
  const history = useHistory();

  const clickHandler = () => {
    history.push('/home');
  };

  return (
    <div className={classes.introDarkContainer}>
      <LocalNav title={'NexuSAR'} menuItems={[]} buttonText={'Home'} />

      <div className={classes.background}>
        <video autoPlay muted loop className={classes.videoBackground}>
          <source src={backgroundVideo} type="video/mp4" />
        </video>

        <Container>
          <h1 className={`${classes.bigHeader} centered`}>NexuSAR</h1>
          <div className={`${classes.fadeIn} centered`}>
            <p className={classes.descLine}>{`Secure the future with precision`.toUpperCase()}</p>

            <Container sx={{ pt: 4 }}>
              <Grid container>
                <Grid item md={2} />
                <Grid item xs={12} md={8}>
                  <p className={classes.descHeader} style={{ textAlign: 'center' }}>
                    At NexuSAR we believe that the future lies in precisely predicting mishappenings and taking actions
                    promptly.
                  </p>
                </Grid>
                <Grid item md={2} />
              </Grid>
            </Container>

            <SineWave />
            <p>Discover more</p>
            <IconButton onClick={clickHandler} className={classes.downwardIcon}>
              <ArrowDownwardRoundedIcon style={{ fontSize: '3em', color: 'white' }} />
            </IconButton>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Intro;
