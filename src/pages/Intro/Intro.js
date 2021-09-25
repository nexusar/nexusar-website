import classes from './Intro.module.css';
import { Link } from 'react-router-dom';
import LocalNav from '../../components/layout/local-nav/LocalNav';
import { Grid, Container } from '@mui/material';
import SineWave from '../../components/ui/sine-wave/SineWave';

const Intro = () => {
  return (
    <div className={classes.introDarkContainer}>
      <LocalNav title={'nexuSAR'} menuItems={['About Us', 'Overview']} buttonText={'Pricing Plans'} />

      <div className={classes.background}>
        <Container class="centered">
          <h1 className={classes.bigHeader}>Nexusar</h1>

          <div className={`${classes.fadeIn} centered`}>
            <p>Secure the future with precision</p>

            <Container py={4} class="centered">
              <Grid item xs={11} sm={8} md={6}>
                <p className={classes.descHeader} style={{ textAlign: 'center' }}>
                  At Nexusar we believe that the future can be secured by precisely predicting mishappenings and taking
                  actions promptly.
                </p>
              </Grid>
            </Container>

            <SineWave />
            <button className="button">
              <Link to="/home">Click here to discover more</Link>
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Intro;
