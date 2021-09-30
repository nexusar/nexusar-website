import { useParams } from 'react-router-dom';
import { Fragment } from 'react';
import { Box } from '@mui/system';
import { Container, Grid } from '@mui/material';
import LeadershipHeader from '../../components/Leadership/LeadershipHeader';
import classes from '../Leadership/Leader.module.css';
import leaderList from '../../data/leader-list.json';

const Leader = () => {
  const params = useParams();
  const leaderId = params.leaderId;
  const leaderData = leaderList.find((leader) => leader.id === leaderId);

  return (
    <Fragment>
      <Box sx={{ height: 43 }} />
      <LeadershipHeader />
      <Container sx={{ pt: 4 }}>
        <Grid container sx={{ alignItems: 'center', justifyContent: 'center' }} spacing={2}>
          <Grid item xs={11} sm={6} order={{ xs: 2, sm: 1 }}>
            <h2 className={classes.name}>{leaderData.name}</h2>
            <p className={classes.designation}>{leaderData.designation}</p>
          </Grid>
          <Grid item xs={11} sm={6} order={{ xs: 1, sm: 2 }} className="centered">
            <img src={leaderData['image-transparent']} alt={leaderId} className={classes.leaderImage} />
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ py: 4 }}>
        <Grid container sx={{ alignItems: 'center', justifyContent: 'center' }} spacing={{ xs: 2, sm: 8 }}>
          <Grid item xs={11} sm={6}>
            <p>{leaderData['details-first']}</p>
          </Grid>
          <Grid item xs={11} sm={6}>
            <p>{leaderData['details-second']}</p>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Leader;
