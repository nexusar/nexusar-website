import { Container } from '@mui/material';
import { Fragment } from 'react';
import { Box } from '@mui/system';
import RecentUpdates from '../../components/layout/recent-updates/RecentUpdates';
import classes from './Support.module.css';
import SupportRow from '../../components/Support/SupportRow';
import SupportWithBackground from '../../components/Support/SupportWithBackground';

const Support = () => {
  return (
    <Fragment>
      <RecentUpdates />
      <Box sx={{ display: 'flex' }}>
        <img className={classes.image} alt="support-background" />
      </Box>
      <Box className={classes.header}>Nexusar Support</Box>
      <Box sx={{ mx: 'auto', width: 'fit-content' }}>
        <Container sx={{ py: 10 }}>
          <h1>This is the support page</h1>
          <p>We are always here to help you with any issues. You can reach out to us via email or whatsapp.</p>
        </Container>
      </Box>
      <SupportRow
        order={1}
        image="https://support.apple.com/content/dam/edam/applecare/images/en_IN/psp/featured-section-promo-ios15-ipados15_2x.jpg"
      />
      <SupportRow
        order={2}
        image="https://support.apple.com/content/dam/edam/applecare/images/en_IN/psp/featured-section-promo-ios15-ipados15_2x.jpg"
      />
      <SupportWithBackground
        background={
          'https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/psp-hero-banner-homepage-getsupport.image.large_2x.jpg'
        }
      />
      <SupportRow
        order={1}
        image="https://support.apple.com/content/dam/edam/applecare/images/en_US/repair/applecare-products_2x.png"
        whatsapp="https://wa.me/919394463276"
      />
    </Fragment>
  );
};

export default Support;
