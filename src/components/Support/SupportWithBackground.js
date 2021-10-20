import { Fragment } from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';

const SupportWithBackground = (props) => {
  const { background } = props;

  const TextComponent = () => {
    return (
      <Grid item xs={12} lg={4} sx={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', mx: 4 }}>
        <h1>Update to iOS 15 and iPadOS 15</h1>
        <p>
          Explore all new features to help you connect with others, stay focused, and do more with your iPhone and iPad.
        </p>
      </Grid>
    );
  };

  return (
    <Fragment>
      <Grid
        container
        sx={{ color: 'white', py: 20, backgroundImage: `url(${background})`, backgroundSize: 'cover' }}
        spacing={4}
      >
        <Grid item lg={2} />
        <TextComponent />
      </Grid>
      <Box py={2} />
      <hr />
    </Fragment>
  );
};

export default SupportWithBackground;
