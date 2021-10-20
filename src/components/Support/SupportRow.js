import { Fragment } from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import TextLinks from '../ui/text-links/TextLinks';

const SupportRow = (props) => {
  const { order, image, whatsapp } = props;

  const ImageComponent = () => {
    return (
      <Grid item xs={12} lg={4} sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', mx: 4 }}>
        <img src={image} alt="support-icon" width="320px" />
      </Grid>
    );
  };

  const TextComponent = () => {
    return (
      <Grid item xs={12} lg={4} sx={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', mx: 4 }}>
        <h1>Update to iOS 15 and iPadOS 15</h1>
        <p>
          Explore all new features to help you connect with others, stay focused, and do more with your iPhone and iPad.
        </p>
        <Box py={1} />
        <TextLinks text="Get the latest" />
        {whatsapp && (
          <a href={whatsapp} target="_blank" rel="noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>
            Reach out via Whatsapp
          </a>
        )}
      </Grid>
    );
  };

  let content =
    order === 1 ? (
      <Fragment>
        <ImageComponent />
        <TextComponent />
      </Fragment>
    ) : (
      <Fragment>
        <TextComponent /> <ImageComponent />
      </Fragment>
    );

  return (
    <Fragment>
      <Grid container sx={{ backgroundColor: 'white', pb: 4 }} spacing={4}>
        <Grid item lg={2} />
        {content}
        <Grid item lg={2} />
      </Grid>
      <Box py={2} />
      <hr />
    </Fragment>
  );
};

export default SupportRow;
