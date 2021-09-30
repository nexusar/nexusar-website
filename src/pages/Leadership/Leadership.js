import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { Fragment } from 'react';
import LeaderCard from '../../components/Leadership/LeaderCard';
import LeadershipHeader from '../../components/Leadership/LeadershipHeader';
import leaderList from '../../data/leader-list.json';

const Leadership = () => {
  const leaderGrid = leaderList.map((leader) => (
    <Grid key={Math.random().toString()} item xs={12} sm={6} md={3}>
      <LeaderCard
        name={leader.name}
        designation={leader.designation}
        image={leader.image}
        linkedin={leader.linkedin}
        twitter={leader.twitter}
      />
    </Grid>
  ));

  return (
    <Fragment>
      <Box sx={{ height: 43 }} />
      <LeadershipHeader />
      <Container sx={{ py: 4 }}>
        <h1>Executive Profiles</h1>
      </Container>

      <Container sx={{ pb: 8 }}>
        <Grid container spacing={2}>
          {leaderGrid}
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Leadership;
